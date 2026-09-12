# 🌐 B4-1 나를 소개하는 반응형 포트폴리오 웹사이트

> 순수 **HTML5, CSS3, JavaScript(ES6+)**만으로 개발한 반응형 포트폴리오 웹사이트입니다.  
> 외부 라이브러리/프레임워크(React, Vue, Bootstrap, Tailwind 등) 없이 **"사용자 이벤트 → 상태(State) 변경 → DOM 렌더링"** 흐름을 직접 구축했습니다.

---

## 📌 1. 프로젝트 기본 정보

- **개발자**: 김동조 (ntt65)
- **학습 단계**: AI/SW 기초 (웹 기초와 프론트엔드)
- **저장소 URL**: [https://github.com/ntt65/b4_1](https://github.com/ntt65/b4_1)
- **배포 URL**: [https://ntt65.github.io/b4_1/](https://ntt65.github.io/b4_1/)
- **개발 환경**: VS Code + Live Server + Vanilla JS + Git/GitHub Pages

---

## 🎯 2. 최종 결과물 및 요구조건 달성 현황 (상세 주석 & GitHub 코드 링크)

미션 명세서(`mission.md`) 및 평가 질문지(`Eval.pdf`)의 **최종 결과물 5대 필수 조건**과 세부 기능 요구사항을 모두 충족하였으며, 각 조건별 실제 구현 코드 위치와 라인별 주석 설명을 아래와 같이 연결합니다.

---

### 📱 조건 1. 반응형 웹사이트 (Responsive Web)
> **요구사항**: 모바일, 태블릿, 데스크톱 등 모든 환경에서 레이아웃이 최적화되어야 하며, Hero, About, Skills, Projects, Contact, Footer 6개 섹션을 포함해야 한다.

* **[구현 1-1] 6개 시맨틱 섹션 구성**
  * **설명**: `div` 남용 없이 웹 접근성(Accessibility)과 SEO를 높이는 시맨틱 태그(`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)로 설계.
  * **GitHub 코드 링크**: [`index.html (Line 24 ~ 190)`](https://github.com/ntt65/b4_1/blob/main/index.html#L24-L190) | 로컬 파일: [`index.html`](file:///Users/mpeg46551/b4_1/index.html)
  * **주요 코드 주석**:
    ```html
    <!-- Hero 섹션: 인사말, 타자기/소개글, CTA 버튼 -->
    <section id="hero" class="section hero-section">...</section>

    <!-- About 섹션: alt 속성을 준 프로필 이미지와 자기소개 -->
    <section id="about" class="section about-section">...</section>

    <!-- Skills 섹션: article 태그로 독립 카드화 -->
    <section id="skills" class="section skills-section">...</section>

    <!-- Projects 섹션: GitHub API 연동 카드 Grid 영역 -->
    <section id="projects" class="section projects-section">...</section>

    <!-- Contact 섹션: label-for 1:1 매칭 폼 영역 -->
    <section id="contact" class="section contact-section">...</section>
    ```

* **[구현 1-2] Flexbox & Grid 반응형 레이아웃 분리**
  * **설명**: 1차원 수평 정렬이 필요한 Navigation에는 **Flexbox**, 2차원 반응형 격자 배치가 필요한 Projects 카드에는 **Grid**(`repeat(auto-fit, minmax(280px, 1fr))`)를 선택하여 적용.
  * **GitHub 코드 링크**: [`css/style.css (Flexbox: L145 / Grid: L324)`](https://github.com/ntt65/b4_1/blob/main/css/style.css#L145) | 로컬 파일: [`css/style.css`](file:///Users/mpeg46551/b4_1/css/style.css)
  * **주요 코드 주석**:
    ```css
    /* Navigation Bar: Flexbox 적용 (로고 왼쪽, 메뉴 오른쪽 수평 정렬) */
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    /* Projects 카드 섹션: Grid 적용 (auto-fit과 minmax로 미디어쿼리 없는 자동 반응형) */
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }
    ```

* **[구현 1-3] 모바일 퍼스트 미디어 쿼리 (768px, 1024px)**
  * **설명**: 모바일 화면 스타일을 기본으로 작성하고, 768px(태블릿), 1024px(데스크톱) 미디어 쿼리로 점진적 확장.
  * **GitHub 코드 링크**: [`css/style.css (Line 466 ~ 508)`](https://github.com/ntt65/b4_1/blob/main/css/style.css#L466-L508)

---

### 🖱️ 조건 2. 인터랙티브 UI & 폼 유효성 검사 (Interactive UI)
> **요구사항**: 다크 모드 토글, 햄버거 메뉴, 부드러운 스크롤, 스크롤 애니메이션, 폼 유효성 검사가 정상 동작해야 한다.

* **[구현 2-1] 모바일 햄버거 메뉴 토글**
  * **설명**: 768px 미만 모바일에서 햄버거 버튼 클릭 시 `state.isMenuOpen`을 반전시키고 `classList.toggle('active')`로 메뉴 개폐.
  * **GitHub 코드 링크**: [`js/app.js (Line 49 & L215)`](https://github.com/ntt65/b4_1/blob/main/js/app.js#L49) | 로컬 파일: [`js/app.js`](file:///Users/mpeg46551/b4_1/js/app.js)
  * **주요 코드 주석**:
    ```javascript
    // 햄버거 메뉴 UI 렌더링 함수
    const renderMenu = () => {
      const { isMenuOpen } = state; // 구조분해 할당
      elements.hamburgerBtn.classList.toggle('active', isMenuOpen);
      elements.navMenu.classList.toggle('active', isMenuOpen);
    };
    ```

* **[구현 2-2] 스크롤 애니메이션 & 스크롤 탑 / 헤더 변경**
  * **설명**: `Intersection Observer` (threshold: 0.2)로 요소 진입 시 `.appear` 부여, 스크롤 60px 이상 시 헤더 스타일 변경(`.scrolled`), 300px 이상 시 스크롤탑 버튼 표시(`.visible`).
  * **GitHub 코드 링크**: [`js/app.js (Line 230 ~ 285)`](https://github.com/ntt65/b4_1/blob/main/js/app.js#L230-L285)

* **[구현 2-3] Contact 폼 유효성 검사 (Form Validation & UX)**
  * **설명**: `e.preventDefault()`로 폼 기본 제출 동작을 막고, 이름/이메일(정규식)/메시지 필수값을 검증하여 에러 피드백 노출.
  * **GitHub 코드 링크**: [`js/app.js (Line 150 ~ 200)`](https://github.com/ntt65/b4_1/blob/main/js/app.js#L150-L200)
  * **주요 코드 주석**:
    ```javascript
    // 이메일 정규표현식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
      elements.emailError.textContent = '올바른 이메일 형식이 아닙니다.';
      elements.userEmailInput.classList.add('invalid');
      isValid = false;
    }
    ```

---

### 🌐 조건 3. 외부 GitHub API 연동 & 4가지 UI 상태 (Async API & State UI)
> **요구사항**: GitHub API에서 본인의 저장소 목록을 가져와 Projects 섹션에 동적으로 렌더링하며, 로딩/성공/에러/빈 상태가 UI로 표현되어야 한다.

* **[구현 3-1] `fetch` 및 `async/await` 비동기 통신 + `try/catch` 에러 처리**
  * **설명**: 엔드포인트 `https://api.github.com/users/ntt65/repos`를 비동기 호출하고, 403 Rate Limit 및 네트워크 오류를 예외 처리.
  * **GitHub 코드 링크**: [`js/app.js (Line 115 ~ 145)`](https://github.com/ntt65/b4_1/blob/main/js/app.js#L115-L145)

* **[구현 3-2] 4가지 UI 상태 표현 (Loading, Success, Error, Empty)**
  * **설명**: 단일 상태 `state.apiStatus`에 따라 조건부 렌더링 수행.
  * **GitHub 코드 링크**: [`js/app.js (Line 57 ~ 110)`](https://github.com/ntt65/b4_1/blob/main/js/app.js#L57-L110)
  * **상태별 렌더링 정리**:
    1. **로딩(loading)**: `<div class="spinner"></div>` 스피너 애니메이션 표시.
    2. **성공(success)**: `array.map()`과 템플릿 리터럴로 카드 동적 변환 후 `innerHTML` 반영.
    3. **에러(error)**: 에러 메시지 + `[다시 시도]` 버튼 제공 (재시도 클릭 시 API 재호출).
    4. **빈 상태(empty)**: "표시할 프로젝트가 없습니다." 안내 문구 렌더링.

* **[구현 3-3] 보너스 과제: 언어별 프로젝트 필터링 (`array.filter()`)**
  * **설명**: 필터 버튼 클릭 시 `state.filterLanguage`를 변경하고 `projects.filter()`로 걸러진 프로젝트만 카드 출력.
  * **GitHub 코드 링크**: [`js/app.js (Line 80 & L250)`](https://github.com/ntt65/b4_1/blob/main/js/app.js#L80)

---

### 💾 조건 4. 상태 유지 및 다크 모드 (State Persistence)
> **요구사항**: 다크 모드 설정이 로컬스토리지(localStorage)에 저장되어 새로고침 후에도 유지되어야 한다.

* **[구현 4-1] LocalStorage 연동 및 테마 스위칭**
  * **설명**: 초기 상태 로딩 시 `localStorage.getItem('theme') || 'light'`로 읽어오며, 토글 버튼 클릭 시 `setAttribute('data-theme', theme)` 및 `localStorage.setItem('theme', theme)` 수행.
  * **GitHub 코드 링크**: [`js/app.js (Line 13 & L38)`](https://github.com/ntt65/b4_1/blob/main/js/app.js#L13) | [`css/style.css (Line 38 ~ 59)`](https://github.com/ntt65/b4_1/blob/main/css/style.css#L38-L59)
  * **주요 코드 주석**:
    ```javascript
    // 테마 변경 렌더러
    const renderTheme = () => {
      const { theme } = state;
      elements.html.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme); // 새로고침 후에도 상태 유지
    };
    ```

---

### 🚀 조건 5. 배포 및 README 명세 (Deployment)
> **요구사항**: GitHub Pages로 배포되어 외부 접속이 가능해야 하며, README에 설명, 기술, 배포 URL이 포함되어야 한다.

* **[구현 5-1] GitHub Pages 자동 배포 완료**
  * **배포 URL**: **[https://ntt65.github.io/b4_1/](https://ntt65.github.io/b4_1/)**
  * **상태**: `main` 브랜치 `/ (root)` 디렉터리 기준 정상 빌드 및 HTTPS 인포스 활성화 완료.

---

## 📁 3. 프로젝트 폴더 구조

```text
b4_1/
├── index.html          # 시맨틱 HTML5 구조 문서
├── css/
│   └── style.css       # 메인 스타일시트 (CSS 변수, Flexbox/Grid, 모바일 퍼스트 반응형)
├── js/
│   └── app.js          # JavaScript (중앙 State 관리, API 통신, DOM 조작, 이벤트)
├── doc/
│   ├── plan.md         # 미션 구현 계획서 & 평가 인터뷰 모범 Q&A 10선
│   ├── code_review.md  # 라인별 상세 코드 리뷰 및 아키텍처 분석 문서
│   ├── mission.md      # 미션 요구사항 원본
│   └── Eval.pdf        # 평가 질문지 및 레퍼런스
└── README.md           # [본 문서] 최종 결과물 요구조건 달성 보고서
```

---

## 📚 4. 평가 인터뷰 대비 및 추가 가이드 문서

- 📄 **[doc/plan.md](doc/plan.md)**: 평가 15개 문항에 대한 핵심 인터뷰 답변집
- 📖 **[doc/code_review.md](doc/code_review.md)**: 전체 코드 구조 및 라인별 종합 분석 보고서
