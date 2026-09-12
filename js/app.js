/**
 * ==========================================================================
 * 애플리케이션 상태 (State) 및 중앙 관리
 * "이벤트 → 상태(State) 변경 → UI 렌더링" 흐름을 충실히 구현합니다.
 * ==========================================================================
 */

// GitHub 아이디 (본인 아이디)
const GITHUB_USERNAME = 'ntt65';

// 1. 단일 출처 (Single Source of Truth) 상태 객체
const state = {
  theme: localStorage.getItem('theme') || 'light', // 다크/라이트 테마
  isMenuOpen: false,                              // 모바일 햄버거 메뉴 열림 여부
  projects: [],                                   // API 원본 저장소 리스트
  filterLanguage: 'all',                          // 선택된 언어 필터
  apiStatus: 'loading',                           // 'loading' | 'success' | 'error' | 'empty'
  errorMessage: ''                                // API 에러 메시지
};

/**
 * ==========================================================================
 * 2. DOM 요소 참조 가져오기 (querySelector / querySelectorAll)
 * ==========================================================================
 */
const elements = {
  html: document.documentElement,
  header: document.getElementById('header'),
  themeToggleBtn: document.getElementById('theme-toggle'),
  themeIcon: document.getElementById('theme-icon'),
  hamburgerBtn: document.getElementById('hamburger-btn'),
  navMenu: document.getElementById('nav-menu'),
  navLinks: document.querySelectorAll('.nav-link'),
  scrollTopBtn: document.getElementById('scroll-top-btn'),
  projectsContainer: document.getElementById('projects-container'),
  filterContainer: document.getElementById('filter-container'),
  contactForm: document.getElementById('contact-form'),
  userNameInput: document.getElementById('user-name'),
  userEmailInput: document.getElementById('user-email'),
  userMessageInput: document.getElementById('user-message'),
  nameError: document.getElementById('name-error'),
  emailError: document.getElementById('email-error'),
  messageError: document.getElementById('message-error'),
  formSuccessMsg: document.getElementById('form-success-msg')
};

/**
 * ==========================================================================
 * 3. UI 렌더링 함수들 (Renderers)
 * ==========================================================================
 */

// 테마 렌더링
const renderTheme = () => {
  const { theme } = state; // 구조분해 할당
  elements.html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  if (theme === 'dark') {
    elements.themeIcon.className = 'fa-solid fa-sun';
  } else {
    elements.themeIcon.className = 'fa-solid fa-moon';
  }
};

// 햄버거 메뉴 렌더링
const renderMenu = () => {
  const { isMenuOpen } = state;
  elements.hamburgerBtn.classList.toggle('active', isMenuOpen);
  elements.navMenu.classList.toggle('active', isMenuOpen);
};

// Projects 섹션 UI 렌더링 (로딩/성공/에러/빈 상태 분기)
const renderProjects = () => {
  const { projects, filterLanguage, apiStatus, errorMessage } = state;

  // 1. 로딩 상태
  if (apiStatus === 'loading') {
    elements.projectsContainer.innerHTML = `
      <div class="state-container">
        <div class="spinner"></div>
        <p>GitHub 프로젝트를 불러오는 중입니다...</p>
      </div>
    `;
    return;
  }

  // 2. 에러 상태
  if (apiStatus === 'error') {
    elements.projectsContainer.innerHTML = `
      <div class="state-container">
        <i class="fa-solid fa-triangle-exclamation" style="font-size: 2.5rem; color: var(--error-color); margin-bottom: 1rem;"></i>
        <p>프로젝트를 불러올 수 없습니다.<br><small>${errorMessage}</small></p>
        <button id="retry-btn" class="btn btn-primary" style="margin-top: 0.5rem;">
          <i class="fa-solid fa-rotate-right"></i> 다시 시도
        </button>
      </div>
    `;

    // 재시도 버튼 이벤트 연결
    document.getElementById('retry-btn')?.addEventListener('click', fetchGitHubProjects);
    return;
  }

  // 3. 언어 필터링 (array.filter 사용)
  const filtered = filterLanguage === 'all'
    ? projects
    : projects.filter(repo => repo.language && repo.language.toLowerCase() === filterLanguage.toLowerCase());

  // 4. 빈 상태
  if (filtered.length === 0) {
    elements.projectsContainer.innerHTML = `
      <div class="state-container">
        <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
        <p>표시할 프로젝트가 없습니다.</p>
      </div>
    `;
    return;
  }

  // 5. 성공 상태: array.map과 템플릿 리터럴로 카드 동적 생성
  const cardsHtml = filtered.map(repo => {
    const { name, description, html_url, stargazers_count, language, updated_at } = repo;
    const formattedDate = new Date(updated_at).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });

    return `
      <article class="project-card">
        <div>
          <div class="project-header">
            <i class="fa-regular fa-folder-closed"></i>
            <a href="${html_url}" target="_blank" rel="noopener noreferrer" aria-label="${name} 저장소 이동">
              <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 1.1rem; color: var(--text-muted);"></i>
            </a>
          </div>
          <h3 class="project-title">${name}</h3>
          <p class="project-desc">${description || '등록된 프로젝트 설명이 없습니다.'}</p>
        </div>
        <div class="project-meta">
          <span class="project-lang">
            <span class="lang-dot"></span>
            ${language || '기타'}
          </span>
          <span><i class="fa-regular fa-star"></i> ${stargazers_count}</span>
          <span>${formattedDate}</span>
        </div>
      </article>
    `;
  }).join('');

  elements.projectsContainer.innerHTML = cardsHtml;
};

/**
 * ==========================================================================
 * 4. GitHub API 비동기 통신 (fetch + async/await + try/catch)
 * ==========================================================================
 */
const fetchGitHubProjects = async () => {
  state.apiStatus = 'loading';
  renderProjects();

  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`);

    // 403 Rate Limit 또는 404 에러 핸들링
    if (!response.ok) {
      if (response.status === 403) {
        throw new Error('API 호출 제한(Rate Limit)을 초과했습니다. 잠시 후 다시 시도해주세요.');
      }
      throw new Error(`데이터를 불러오지 못했습니다. (코드: ${response.status})`);
    }

    const data = await response.json();

    // Fork된 저장소는 제외 (선택 사항)
    state.projects = data.filter(repo => !repo.fork);
    state.apiStatus = state.projects.length === 0 ? 'empty' : 'success';

  } catch (error) {
    state.apiStatus = 'error';
    state.errorMessage = error.message || '네트워크 통신 중 오류가 발생했습니다.';
  } finally {
    renderProjects();
  }
};

/**
 * ==========================================================================
 * 5. Contact 폼 유효성 검사 (Form UX)
 * ==========================================================================
 */
const validateForm = () => {
  let isValid = true;

  const nameVal = elements.userNameInput.value.trim();
  const emailVal = elements.userEmailInput.value.trim();
  const messageVal = elements.userMessageInput.value.trim();

  // 1. 이름 검증
  if (!nameVal) {
    elements.nameError.textContent = '이름을 입력해 주세요.';
    elements.userNameInput.classList.add('invalid');
    isValid = false;
  } else {
    elements.nameError.textContent = '';
    elements.userNameInput.classList.remove('invalid');
  }

  // 2. 이메일 검증 (정규표현식)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailVal) {
    elements.emailError.textContent = '이메일을 입력해 주세요.';
    elements.userEmailInput.classList.add('invalid');
    isValid = false;
  } else if (!emailRegex.test(emailVal)) {
    elements.emailError.textContent = '올바른 이메일 형식이 아닙니다. (예: user@example.com)';
    elements.userEmailInput.classList.add('invalid');
    isValid = false;
  } else {
    elements.emailError.textContent = '';
    elements.userEmailInput.classList.remove('invalid');
  }

  // 3. 메시지 검증
  if (!messageVal) {
    elements.messageError.textContent = '메시지를 입력해 주세요.';
    elements.userMessageInput.classList.add('invalid');
    isValid = false;
  } else if (messageVal.length < 5) {
    elements.messageError.textContent = '메시지는 최소 5자 이상 작성해 주세요.';
    elements.userMessageInput.classList.add('invalid');
    isValid = false;
  } else {
    elements.messageError.textContent = '';
    elements.userMessageInput.classList.remove('invalid');
  }

  return isValid;
};

/**
 * ==========================================================================
 * 6. 이벤트 바인딩 (Event Listeners)
 * ==========================================================================
 */
const setupEventListeners = () => {

  // 1. 다크모드 토글 버튼
  elements.themeToggleBtn.addEventListener('click', () => {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    renderTheme();
  });

  // 2. 햄버거 메뉴 토글 버튼
  elements.hamburgerBtn.addEventListener('click', () => {
    state.isMenuOpen = !state.isMenuOpen;
    renderMenu();
  });

  // 3. 네비게이션 링크 클릭 시 메뉴 닫기 (모바일)
  elements.navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (state.isMenuOpen) {
        state.isMenuOpen = false;
        renderMenu();
      }
    });
  });

  // 4. 스크롤 이벤트 (Header 스타일 변경 & Scroll-Top 버튼)
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // 60px 이상 스크롤 시 Header 스타일 변경
    if (scrollY > 60) {
      elements.header.classList.add('scrolled');
    } else {
      elements.header.classList.remove('scrolled');
    }

    // 300px 이상 스크롤 시 Scroll-Top 버튼 표시
    if (scrollY > 300) {
      elements.scrollTopBtn.classList.add('visible');
    } else {
      elements.scrollTopBtn.classList.remove('visible');
    }
  });

  // 5. Scroll-Top 버튼 클릭 시 맨 위로 이동
  elements.scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 6. 언어 필터 버튼 클릭 이벤트 (보너스 과제)
  elements.filterContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
      // 버튼 active 클래스 처리
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');

      // 상태 변경 및 Projects 렌더링
      state.filterLanguage = e.target.getAttribute('data-lang');
      renderProjects();
    }
  });

  // 7. Contact 폼 제출 이벤트
  elements.contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // 기본 폼 제출(페이지 새로고침) 방지

    if (validateForm()) {
      elements.formSuccessMsg.style.display = 'block';
      elements.contactForm.reset();

      // 4초 후 성공 메시지 자동 숨김
      setTimeout(() => {
        elements.formSuccessMsg.style.display = 'none';
      }, 4000);
    }
  });

  // 8. 폼 실시간 입력 검증 (input 이벤트)
  elements.userNameInput.addEventListener('input', validateForm);
  elements.userEmailInput.addEventListener('input', validateForm);
  elements.userMessageInput.addEventListener('input', validateForm);
};

/**
 * ==========================================================================
 * 7. 스크롤 애니메이션 (Intersection Observer - threshold: 0.2)
 * ==========================================================================
 */
const setupScrollAnimation = () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2 // 요소가 화면의 20% 이상 노출될 때 실행
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target); // 한 번 등장하면 관찰 해제
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
};

/**
 * ==========================================================================
 * 8. 초기화 (Initialization)
 * ==========================================================================
 */
const init = () => {
  renderTheme();
  setupEventListeners();
  setupScrollAnimation();
  fetchGitHubProjects();
};

// DOM 로드 완료 후 실행
document.addEventListener('DOMContentLoaded', init);
