/**
 * ==========================================================================
 * 포트폴리오 메인 스크립트 (app.js)
 *
 * 핵심 설계 원칙: "이벤트(Event) → 상태(State) 변경 → UI 렌더링(Render)"
 *   1. 사용자 이벤트(클릭, 스크롤 등)가 발생하면
 *   2. 중앙 state 객체의 값을 변경하고
 *   3. render 함수가 state를 읽어 DOM을 갱신한다
 *
 * 이 패턴을 쓰는 이유: 앱 상태가 한 곳에 집중되어 버그 추적이 쉬움
 * React, Vue 같은 프레임워크도 내부적으로 동일한 흐름으로 동작함
 * ==========================================================================
 */


/* ==========================================================================
   1. 전역 상수 & 상태 객체 (Single Source of Truth)
   ========================================================================== */

// const: 재할당 불가 상수. 변경되지 않는 값에 사용 (let보다 안전)
const GITHUB_USERNAME = 'ntt65'; // GitHub API 요청 시 사용할 사용자 아이디

/**
 * state: 앱 전체의 현재 상태를 한 객체에 집중 관리 (Single Source of Truth)
 * 이 객체 하나만 보면 앱이 지금 어떤 상태인지 즉시 파악 가능
 */
const state = {
  // localStorage.getItem('theme'): 이전 방문에서 저장된 테마 값 읽기
  // || 'light': 저장값이 없으면(null) 기본값 'light' 사용
  theme: localStorage.getItem('theme') || 'light',

  isMenuOpen: false,    // 모바일 햄버거 메뉴 열림 여부 (true/false)
  projects:   [],       // GitHub API에서 받은 저장소 배열 (처음엔 빈 배열)
  filterLanguage: 'all', // 현재 선택된 언어 필터 ('all' | 'JavaScript' | 'HTML' | ...)
  apiStatus: 'loading', // API 상태: 'loading' | 'success' | 'error' | 'empty'
  errorMessage: ''      // API 에러 발생 시 사용자에게 보여줄 에러 메시지
};


/* ==========================================================================
   2. DOM 요소 참조 (DOM Reference)
   DOM: Document Object Model — HTML을 JS가 조작할 수 있는 객체 트리로 표현한 것
   getElementById / querySelectorAll: HTML의 id·클래스 기반으로 요소 선택
   한 번에 모아두면 이후에 document.getElementById를 반복 호출할 필요 없음
   ========================================================================== */
const elements = {
  // document.documentElement: <html> 태그 (data-theme 속성을 여기에 붙임)
  html:             document.documentElement,
  header:           document.getElementById('header'),
  themeToggleBtn:   document.getElementById('theme-toggle'),
  themeIcon:        document.getElementById('theme-icon'),     // 달/해 아이콘 <i>
  hamburgerBtn:     document.getElementById('hamburger-btn'),
  navMenu:          document.getElementById('nav-menu'),
  // querySelectorAll: 해당 선택자를 가진 요소 전체를 NodeList(배열처럼)로 반환
  navLinks:         document.querySelectorAll('.nav-link'),
  scrollTopBtn:     document.getElementById('scroll-top-btn'),
  projectsContainer: document.getElementById('projects-container'),
  filterContainer:  document.getElementById('filter-container'),
  contactForm:      document.getElementById('contact-form'),
  userNameInput:    document.getElementById('user-name'),
  userEmailInput:   document.getElementById('user-email'),
  userMessageInput: document.getElementById('user-message'),
  nameError:        document.getElementById('name-error'),
  emailError:       document.getElementById('email-error'),
  messageError:     document.getElementById('message-error'),
  formSuccessMsg:   document.getElementById('form-success-msg')
};


/* ==========================================================================
   3. 렌더링 함수들 (Renderers)
   각 함수는 state를 읽어 DOM을 갱신하는 역할만 담당
   ========================================================================== */

/**
 * renderTheme(): state.theme 값에 따라 테마를 화면에 반영
 * 1) <html data-theme="..."> 속성 변경 → CSS 변수 자동 전환 (다크/라이트 색상)
 * 2) localStorage에 저장 → 새로고침 후에도 유지
 * 3) 버튼 아이콘 교체 (달 ↔ 해)
 */
const renderTheme = () => {
  // 구조분해 할당(Destructuring): const theme = state.theme; 과 동일
  const { theme } = state;

  // setAttribute: HTML 속성 값 변경
  // data-theme 값이 'dark'로 바뀌면 CSS의 [data-theme="dark"] 블록이 자동 적용됨
  elements.html.setAttribute('data-theme', theme);

  // localStorage.setItem: 브라우저에 키-값 저장 (탭 닫아도 유지, 서버에는 저장 안 됨)
  localStorage.setItem('theme', theme);

  // 테마에 따라 아이콘 클래스 교체
  // className: 요소의 class 속성 전체를 덮어쓰는 방식
  if (theme === 'dark') {
    elements.themeIcon.className = 'fa-solid fa-sun';  // 다크모드 → 해 아이콘
  } else {
    elements.themeIcon.className = 'fa-solid fa-moon'; // 라이트모드 → 달 아이콘
  }
};

/**
 * renderMenu(): state.isMenuOpen 값에 따라 햄버거 메뉴 상태를 화면에 반영
 * classList.toggle(클래스, 조건): 조건이 true면 클래스 추가, false면 제거
 * aria-expanded: 스크린 리더에게 메뉴 열림 여부를 알리는 접근성 속성
 */
const renderMenu = () => {
  const { isMenuOpen } = state;

  // classList.toggle('active', isMenuOpen):
  // isMenuOpen이 true면 'active' 클래스 추가 → CSS에서 left: 0 으로 슬라이드-인
  // isMenuOpen이 false면 'active' 클래스 제거 → CSS에서 left: -100% 로 숨김
  elements.hamburgerBtn.classList.toggle('active', isMenuOpen);

  // setAttribute: aria-expanded 값을 boolean → string으로 세팅
  // true → 스크린 리더: "펼쳐져 있음", false → "접혀 있음"
  elements.hamburgerBtn.setAttribute('aria-expanded', isMenuOpen);

  elements.navMenu.classList.toggle('active', isMenuOpen);
};

/**
 * renderProjects(): state.apiStatus와 필터에 따라 Projects 섹션을 렌더링
 * 4가지 상태를 분기 처리: loading → error → empty → success(카드 목록)
 * innerHTML: HTML 문자열로 자식 요소를 통째로 교체하는 방법
 */
const renderProjects = () => {
  // 구조분해 할당으로 필요한 state 값을 한 번에 추출
  const { projects, filterLanguage, apiStatus, errorMessage } = state;

  /* ── 1. 로딩 상태 ─────────────────────────────────────── */
  if (apiStatus === 'loading') {
    // 백틱(`): 템플릿 리터럴(Template Literal) — 여러 줄 문자열 + ${변수} 삽입 가능
    elements.projectsContainer.innerHTML = `
      <div class="state-container">
        <div class="spinner"></div>
        <p>GitHub 프로젝트를 불러오는 중입니다...</p>
      </div>
    `;
    return; // 이후 코드 실행 중단 (다음 상태 조건문 건너뜀)
  }

  /* ── 2. 에러 상태 ─────────────────────────────────────── */
  if (apiStatus === 'error') {
    // ${errorMessage}: 템플릿 리터럴 안에 state.errorMessage 값 삽입
    elements.projectsContainer.innerHTML = `
      <div class="state-container">
        <i class="fa-solid fa-triangle-exclamation"
           style="font-size:2.5rem;color:var(--error-color);margin-bottom:1rem;"></i>
        <p>프로젝트를 불러올 수 없습니다.<br><small>${errorMessage}</small></p>
        <button id="retry-btn" class="btn btn-primary" style="margin-top:0.5rem;">
          <i class="fa-solid fa-rotate-right"></i> 다시 시도
        </button>
      </div>
    `;

    // ?. (옵셔널 체이닝): retry-btn이 null이어도 에러 없이 넘어감
    // 클릭 시 fetchGitHubProjects 함수를 다시 호출해 API 재시도
    document.getElementById('retry-btn')?.addEventListener('click', fetchGitHubProjects);
    return;
  }

  /* ── 3. 언어 필터링 (array.filter 사용) ──────────────── */
  // 삼항 연산자: 조건 ? 참일때값 : 거짓일때값
  const filtered = filterLanguage === 'all'
    ? projects  // 'all'이면 필터 없이 전체
    // .filter(): 조건이 true인 요소만 남긴 새 배열 반환 (원본 변경 없음)
    // .toLowerCase(): 대소문자 무시 비교 (JavaScript와 javascript 모두 매칭)
    : projects.filter(repo =>
        repo.language &&
        repo.language.toLowerCase() === filterLanguage.toLowerCase()
      );

  /* ── 4. 빈 상태 (필터 결과 또는 저장소 없음) ─────────── */
  if (filtered.length === 0) {
    elements.projectsContainer.innerHTML = `
      <div class="state-container">
        <i class="fa-solid fa-folder-open"
           style="font-size:2.5rem;color:var(--text-muted);margin-bottom:1rem;"></i>
        <p>표시할 프로젝트가 없습니다.</p>
      </div>
    `;
    return;
  }

  /* ── 5. 성공 상태: 카드 목록 렌더링 ─────────────────── */
  // .map(): 배열의 각 요소를 변환해 새 배열 반환 (원본 변경 없음)
  // 각 repo 객체를 HTML 문자열(카드)로 변환
  const cardsHtml = filtered.map(repo => {
    // 구조분해 할당: repo.name, repo.description 등을 변수로 한 번에 추출
    const { name, description, html_url, stargazers_count, language, updated_at } = repo;

    // Date 객체로 파싱 후 한국어 날짜 형식으로 변환 (예: '2026년 9월 1일')
    const formattedDate = new Date(updated_at).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });

    // 카드 HTML을 템플릿 리터럴로 생성
    // || 연산자: 왼쪽 값이 falsy(null, undefined, '')이면 오른쪽 기본값 사용
    return `
      <article class="project-card">
        <div>
          <div class="project-header">
            <i class="fa-regular fa-folder-closed"></i>
            <a href="${html_url}" target="_blank" rel="noopener noreferrer"
               aria-label="${name} 저장소 이동">
              <i class="fa-solid fa-arrow-up-right-from-square"
                 style="font-size:1.1rem;color:var(--text-muted);"></i>
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
  }).join(''); // .join(''): 배열의 문자열들을 구분자 없이 하나로 합침

  // 완성된 전체 카드 HTML을 컨테이너에 한 번에 주입
  elements.projectsContainer.innerHTML = cardsHtml;
};


/* ==========================================================================
   4. GitHub API 비동기 통신
   async/await: 비동기(순서를 기다릴 필요 없는) 작업을 동기처럼 순서대로 읽히게 작성
   try/catch/finally: 네트워크 오류 등 예외 발생 시 처리
   ========================================================================== */

/**
 * fetchGitHubProjects(): GitHub REST API로 저장소 목록을 가져와 state에 저장
 * async 키워드: 이 함수 안에서 await를 사용할 수 있음을 선언
 */
const fetchGitHubProjects = async () => {
  // API 요청 전 로딩 상태로 변경하고 스피너 표시
  state.apiStatus = 'loading';
  renderProjects();

  try {
    // await fetch(...): 서버 응답이 올 때까지 기다림 (이 줄에서 일시 정지)
    // sort=updated: 최근 업데이트 순 정렬 / per_page=12: 최대 12개 요청
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`
    );

    // response.ok: HTTP 상태 코드가 200~299 범위인지 확인
    // !response.ok: 성공이 아니면 (403, 404, 500 등) 에러 처리
    if (!response.ok) {
      if (response.status === 403) {
        // throw new Error: 직접 에러를 발생시켜 catch 블록으로 이동
        throw new Error('API 호출 제한(Rate Limit)을 초과했습니다. 잠시 후 다시 시도해주세요.');
      }
      // 백틱 + ${}: 상태 코드를 메시지에 동적으로 삽입
      throw new Error(`데이터를 불러오지 못했습니다. (코드: ${response.status})`);
    }

    // await response.json(): 응답 본문을 JavaScript 객체로 파싱 (JSON → JS 배열)
    const data = await response.json();

    // .filter(repo => !repo.fork): fork된 저장소 제외 (내 원본 저장소만 표시)
    // !repo.fork: fork 여부가 false인 것만 남김
    state.projects = data.filter(repo => !repo.fork);

    // 저장소가 0개면 'empty', 1개 이상이면 'success'
    state.apiStatus = state.projects.length === 0 ? 'empty' : 'success';

  } catch (error) {
    // try 블록 안에서 throw된 에러 또는 네트워크 단절 시 이 블록 실행
    state.apiStatus = 'error';
    // error.message: Error 객체의 메시지 / 없으면 기본 메시지 사용
    state.errorMessage = error.message || '네트워크 통신 중 오류가 발생했습니다.';

  } finally {
    // finally: 성공이든 실패든 항상 실행 → 화면을 최종 상태로 업데이트
    renderProjects();
  }
};


/* ==========================================================================
   5. 폼 유효성 검사 (Form Validation)
   ========================================================================== */

/**
 * validateForm(): 입력값 형식을 검사하고 에러 메시지를 표시
 * 반환값(boolean): true = 모두 유효 / false = 하나라도 오류
 */
const validateForm = () => {
  let isValid = true; // 모든 검사를 통과하면 true 유지

  // .value: input 요소의 현재 입력값
  // .trim(): 앞뒤 공백 제거 (스페이스만 입력한 경우도 빈값으로 처리)
  const nameVal    = elements.userNameInput.value.trim();
  const emailVal   = elements.userEmailInput.value.trim();
  const messageVal = elements.userMessageInput.value.trim();

  /* ── 이름 검증 ──────────────────────────────────────── */
  if (!nameVal) {
    // textContent: 요소의 텍스트 내용 설정 (role="alert"로 스크린 리더가 즉시 읽음)
    elements.nameError.textContent = '이름을 입력해 주세요.';
    // classList.add: 'invalid' 클래스 추가 → CSS로 빨간 테두리 표시
    elements.userNameInput.classList.add('invalid');
    isValid = false;
  } else {
    elements.nameError.textContent = '';               // 에러 메시지 초기화
    elements.userNameInput.classList.remove('invalid'); // 빨간 테두리 제거
  }

  /* ── 이메일 검증 ─────────────────────────────────────
     정규표현식(RegExp): 문자열 패턴 검사 도구
     /^[^\s@]+@[^\s@]+\.[^\s@]+$/
       ^         → 문자열 시작
       [^\s@]+   → 공백·@ 제외 1자 이상 (아이디 부분)
       @         → @ 기호 하나
       [^\s@]+   → 공백·@ 제외 1자 이상 (도메인명)
       \.        → 점(.) 하나
       [^\s@]+$  → 공백·@ 제외 1자 이상으로 끝 (com, kr 등)
     ─────────────────────────────────────────────────── */
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailVal) {
    elements.emailError.textContent = '이메일을 입력해 주세요.';
    elements.userEmailInput.classList.add('invalid');
    isValid = false;
  } else if (!emailRegex.test(emailVal)) {
    // .test(값): 정규표현식 패턴에 맞으면 true, 아니면 false
    elements.emailError.textContent = '올바른 이메일 형식이 아닙니다. (예: user@example.com)';
    elements.userEmailInput.classList.add('invalid');
    isValid = false;
  } else {
    elements.emailError.textContent = '';
    elements.userEmailInput.classList.remove('invalid');
  }

  /* ── 메시지 검증 ─────────────────────────────────────── */
  if (!messageVal) {
    elements.messageError.textContent = '메시지를 입력해 주세요.';
    elements.userMessageInput.classList.add('invalid');
    isValid = false;
  } else if (messageVal.length < 5) {
    // .length: 문자열의 글자 수
    elements.messageError.textContent = '메시지는 최소 5자 이상 작성해 주세요.';
    elements.userMessageInput.classList.add('invalid');
    isValid = false;
  } else {
    elements.messageError.textContent = '';
    elements.userMessageInput.classList.remove('invalid');
  }

  return isValid; // true(통과) 또는 false(실패)
};


/* ==========================================================================
   6. 이벤트 바인딩 (Event Listeners)
   addEventListener: "이 요소에서 이 이벤트가 발생하면 이 함수를 실행해라" 등록
   인라인 onclick 대신 addEventListener 사용 이유: HTML과 JS 로직 분리
   ========================================================================== */
const setupEventListeners = () => {

  /* ① 다크모드 토글 버튼 클릭 ──────────────────────────── */
  elements.themeToggleBtn.addEventListener('click', () => {
    // 삼항 연산자: light면 dark로, dark면 light로 토글
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    renderTheme(); // 상태 변경 후 즉시 화면 반영
  });

  /* ② 햄버거 버튼 클릭 ─────────────────────────────────── */
  elements.hamburgerBtn.addEventListener('click', () => {
    // !state.isMenuOpen: 현재 값을 반전 (true→false, false→true)
    state.isMenuOpen = !state.isMenuOpen;
    renderMenu();
  });

  /* ③ 네비게이션 링크 클릭 시 모바일 메뉴 닫기 ──────────── */
  // forEach: NodeList의 각 요소마다 함수 실행
  elements.navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // 메뉴가 열려 있을 때만 닫기 처리 (불필요한 render 호출 방지)
      if (state.isMenuOpen) {
        state.isMenuOpen = false;
        renderMenu();
      }
    });
  });

  /* ④ 스크롤 이벤트: 헤더 스타일 & 스크롤탑 버튼 표시 ──── */
  window.addEventListener('scroll', () => {
    // window.scrollY: 현재 페이지를 세로로 얼마나 스크롤했는지 (px 단위)
    const scrollY = window.scrollY;

    // 60px 이상 스크롤: 헤더에 테두리·그림자 추가 (.scrolled)
    if (scrollY > 60) {
      elements.header.classList.add('scrolled');
    } else {
      elements.header.classList.remove('scrolled');
    }

    // 300px 이상 스크롤: 맨 위로 버튼 표시 (.visible)
    if (scrollY > 300) {
      elements.scrollTopBtn.classList.add('visible');
    } else {
      elements.scrollTopBtn.classList.remove('visible');
    }
  });

  /* ⑤ 맨 위로 버튼 클릭 ───────────────────────────────── */
  elements.scrollTopBtn.addEventListener('click', () => {
    // window.scrollTo: 페이지를 지정한 위치로 이동
    // behavior: 'smooth' → 부드럽게 스크롤 (즉시 이동이 아님)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ⑥ 언어 필터 버튼 클릭 (이벤트 위임) ──────────────────
     이벤트 위임(Event Delegation): 버튼마다 리스너를 붙이지 않고,
     부모(.filter-container)에 하나만 등록 후 e.target으로 실제 클릭된 자식 구분
     ─────────────────────────────────────────────────────── */
  elements.filterContainer.addEventListener('click', (e) => {
    // e.target: 실제 클릭된 요소
    // classList.contains: 해당 클래스가 있는지 확인 (다른 곳 클릭 시 무시)
    if (e.target.classList.contains('filter-btn')) {

      // 모든 필터 버튼에서 active 제거 후 클릭된 버튼에만 추가
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');

      // getAttribute: data-lang 속성값 읽기 (예: 'JavaScript', 'HTML', 'all')
      state.filterLanguage = e.target.getAttribute('data-lang');
      renderProjects(); // 필터 변경 후 즉시 카드 목록 재렌더링
    }
  });

  /* ⑦ 폼 제출 이벤트 ──────────────────────────────────── */
  elements.contactForm.addEventListener('submit', (e) => {
    // e.preventDefault(): 폼의 기본 동작(서버 전송 + 페이지 새로고침) 차단
    e.preventDefault();

    if (validateForm()) {
      // 유효성 통과 시 성공 메시지 표시
      elements.formSuccessMsg.style.display = 'block';
      elements.contactForm.reset(); // 폼 모든 입력값 초기화

      // setTimeout: 지정 시간(ms) 후 함수 실행. 4000ms = 4초
      setTimeout(() => {
        elements.formSuccessMsg.style.display = 'none'; // 4초 후 메시지 숨김
      }, 4000);
    }
  });

  /* ⑧ 폼 실시간 검증 (input 이벤트) ──────────────────────
     'input' 이벤트: 사용자가 타이핑할 때마다 발생
     글자를 입력하면 바로 에러/성공 피드백 → UX 향상
     ─────────────────────────────────────────────────────── */
  elements.userNameInput.addEventListener('input', validateForm);
  elements.userEmailInput.addEventListener('input', validateForm);
  elements.userMessageInput.addEventListener('input', validateForm);
};


/* ==========================================================================
   7. 스크롤 등장 애니메이션 (Intersection Observer)
   Intersection Observer: 특정 요소가 뷰포트(화면)에 들어왔는지를 감지하는 브라우저 API
   스크롤 이벤트로 위치를 직접 계산하는 것보다 성능이 훨씬 좋음
   ========================================================================== */
const setupScrollAnimation = () => {
  const observerOptions = {
    root: null,          // root: null → 기준을 브라우저 뷰포트로 설정
    rootMargin: '0px',   // 감지 영역 확장/축소 (0px = 뷰포트 그대로)
    threshold: 0.2       // 0.2 = 요소의 20% 이상이 화면에 보일 때 콜백 실행
  };

  // IntersectionObserver(콜백, 옵션): 관찰 대상이 화면에 들어오면 콜백 실행
  const observer = new IntersectionObserver((entries, observer) => {
    // entries: 이번 감지에서 상태가 변한 요소들의 배열
    entries.forEach(entry => {
      // entry.isIntersecting: 요소가 현재 화면에 보이면 true
      if (entry.isIntersecting) {
        // .appear 클래스 추가 → CSS에서 opacity: 1, translateY(0) 전환 → 등장 애니메이션
        entry.target.classList.add('appear');
        // unobserve: 한 번 등장하면 관찰 중단 (다시 올라와도 재실행 없음)
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // .fade-in 클래스를 가진 모든 요소를 관찰 대상으로 등록
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
};


/* ==========================================================================
   8. 앱 초기화 (Initialization)
   init(): 페이지 로드 시 가장 먼저 실행되는 진입점 함수
   ========================================================================== */
const init = () => {
  renderTheme();          // 저장된 테마를 읽어 다크/라이트 적용
  setupEventListeners();  // 모든 이벤트 리스너 등록
  setupScrollAnimation(); // Intersection Observer로 스크롤 애니메이션 준비
  fetchGitHubProjects();  // GitHub API 호출 시작
};

// DOMContentLoaded: HTML 파싱이 완전히 끝난 뒤 init() 실행
// <script defer> 가 있으면 자동으로 DOM 완성 후 실행되어 사실상 동일하지만
// 명시적으로 작성해 의도를 코드로 드러냄
document.addEventListener('DOMContentLoaded', init);
