# 🚀 미션 수행 및 평가 대비 심플 구현 계획서 (Plan)

> **프로젝트 목표**: 순수 HTML/CSS/JavaScript만을 사용하여 반응형 포트폴리오 웹사이트를 구축하고, **"이벤트 → 상태(State) 변경 → UI 렌더링"** 흐름을 완벽히 이해하여 평가 인터뷰 질문에 명쾌하게 답변할 수 있도록 합니다.

---

## 📋 1. 핵심 설계 철학 (초보자를 위한 가이드)

1. **복잡한 구조 지양, 한눈에 들어오는 직관적 코드 구조**:
   - CSS 모듈 분리 대신 **단일 `css/style.css`** 사용 (CSS 변수로 완벽 관리).
   - JS 파일 분리 대신 **단일 `js/app.js`** 사용 (중앙 집중식 `state` 객체 기반).
2. **평가 질문 100% 대응 가능한 구조**:
   - `Eval.pdf`의 15개 평가 문항과 질문에 정확히 답변할 수 있는 기술적 근거를 코드에 반영.
3. **가장 쉬운 상태 관리 패턴**:
   - 상태(State)를 중앙 객체 `const state = { theme: 'light', projects: [], loading: true, ... }` 하나로 모아서 조작.

---

## 📁 2. 디렉토리 및 파일 구조

```text
b4_1/
├── index.html          # 메인 시맨틱 HTML 문서
├── css/
│   └── style.css       # 메인 스타일시트 (CSS 변수, 모바일 퍼스트, Flexbox/Grid)
├── js/
│   └── app.js          # 메인 자바스크립트 (STATE 관리, DOM 조작, API, 이벤트 처리)
├── images/             # 프로필 및 프로젝트 이미지
├── doc/
│   └── plan.md         # [본 문서] 구현 계획서 및 평가 답변 가이드
└── README.md           # 프로젝트 소개, 사용 기술, 배포 URL, 스크린샷 명시
```

---

## 🗓️ 3. 단계별 상세 구현 계획 (Step-by-Step)

### Phase 1: 시맨틱 HTML5 구조 설계 (`index.html`)
- **목적**: 의미에 맞는 태그 사용 및 accessible 마크업 구성
- **구현 요소**:
  - `<header>` + `<nav>`: 로고, 네비게이션 앵커 링크 (`#hero`, `#about`, `#skills`, `#projects`, `#contact`), 다크모드 토글 버튼, 햄버거 버튼 (`.hamburger-btn`)
  - `<main>`:
    - `<section id="hero">`: 인사말, 타이핑 효과/소개글, CTA 버튼
    - `<section id="about">`: 프로필 이미지 (`<img alt="프로필 사진">`), 자기소개 문구
    - `<section id="skills">`: 기술 스택 카드/뱃지 목록 (`<ul>`, `<li>` 또는 `article`)
    - `<section id="projects">`: GitHub API 프로젝트 연동 영역 (필터 버튼, 상태별 UI 영역 포함)
    - `<section id="contact">`: 문의 폼 (`<form>`, `<label for="...">`, `<input id="...">`, `<textarea>`, 에러 피드백 `<div>`)
  - `<footer>`: 저작권 정보, 소셜 링크 (GitHub, Blog 등)
  - `<button id="scroll-top-btn">`: 스크롤 탑 버튼

---

### Phase 2: CSS 모바일 퍼스트 스타일링 & 디자인 시스템 (`css/style.css`)
- **목적**: CSS 변수 활용, 반응형 레이아웃(Flexbox & Grid), 다크 모드 구현
- **구현 요소**:
  1. **CSS 변수 (`:root` & `[data-theme="dark"]`)**:
     - Light/Dark 테마별 배경색, 글자색, 카드 배경, 테두리, 그림자 등 정의.
  2. **모바일 퍼스트 레이아웃**:
     - 기본 스타일: 모바일 화면(기본) 기준 작성.
     - 미디어 쿼리: `@media (min-width: 768px)` (태블릿), `@media (min-width: 1024px)` (데스크톱).
  3. **레이아웃 명확 분리 (평가 핵심)**:
     - **Flexbox**: Navigation (`display: flex; justify-content: space-between; align-items: center;`)
     - **Grid**: Projects 섹션 (`display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;`)
  4. **시각 효과 및 인터랙션**:
     - 버튼/카드 `hover` 시 `transform: translateY(-5px)` + `transition: all 0.3s ease`
     - 다크모드 전환 시 색상 변화 애니메이션.

---

### Phase 3: JavaScript 상태(State) 중심 설계 (`js/app.js`)
- **목적**: "이벤트 → 상태 변경 → DOM 렌더링" 흐름 구축
- **상태(State) 구조**:
  ```javascript
  const state = {
    theme: localStorage.getItem('theme') || 'light', // 다크/라이트 테마
    isMenuOpen: false,                              // 모바일 햄버거 메뉴 열림 여부
    projects: [],                                   // GitHub API로 받아온 원본 저장소 목록
    filteredProjects: [],                           // 필터링된 저장소 목록
    filterLanguage: 'all',                          // 선택된 언어 필터
    apiStatus: 'loading',                           // 'loading' | 'success' | 'error' | 'empty'
    errorMessage: '',                               // API 에러 메시지
    form: {
      name: '',
      email: '',
      message: '',
      errors: {}
    }
  };
  ```

---

### Phase 4: 주요 기능 및 인터랙션 구현 (`js/app.js`)

1. **다크 모드 (LocalStorage 저장 & 테마 반영)**:
   - `state.theme` 변경 -> `document.documentElement.setAttribute('data-theme', state.theme)` -> `localStorage.setItem('theme', state.theme)`
2. **햄버거 메뉴 토글 (모바일)**:
   - 햄버거 버튼 클릭 -> `state.isMenuOpen` 반전 -> `.nav-menu.classList.toggle('active')`
3. **부드러운 스크롤 & 앵커 링크**:
   - `scroll-behavior: smooth;` (CSS) 또는 JavaScript `element.scrollIntoView({ behavior: 'smooth' })`
4. **스크롤 헤더 & 스크롤 탑 버튼**:
   - `window.addEventListener('scroll', ...)`
   - `window.scrollY > 60`: Header에 `.scrolled` 클래스 추가 (배경색 변경)
   - `window.scrollY > 300`: Scroll-Top 버튼 표시 (`.visible`)
5. **스크롤 애니메이션 (Intersection Observer)**:
   - `threshold: 0.2`로 요소가 20% 보일 때 `.fade-in` 클래스 부여하여 슬라이드/페이드 효과 적용

---

### Phase 5: GitHub API 연동 & 상태별 UI 처리 (`js/app.js`)

1. **비동기 데이터 호출 (`async/await` & `fetch`)**:
   - API: `https://api.github.com/users/{username}/repos?sort=updated`
2. **4가지 UI 상태 렌더링 (`try / catch`)**:
   - **로딩(loading)**: 스피너 UI 표시 (`<div class="spinner"></div>`)
   - **성공(success)**: `state.projects`를 `map()`으로 카드 HTML 문자열 변환 후 `innerHTML` 반영
   - **에러(error)**: API 403(Rate limit) 또는 네트워크 에러 시 메시지 + `[다시 시도]` 버튼 제공
   - **빈 데이터(empty)**: 저장소가 없을 때 "표시할 프로젝트가 없습니다." 문구 출력
3. **언어별 필터링 (보너스 기능)**:
   - 필터 버튼 클릭 시 `state.filterLanguage` 변경 -> `state.projects.filter(repo => repo.language === selected)` 실행 -> 프로젝트 목록 렌더링 재호출.

---

### Phase 6: Contact 폼 유효성 검사 (`js/app.js`)

1. **이벤트 처리**:
   - `form.addEventListener('submit', (e) => { e.preventDefault(); ... })`
2. **검증 조건**:
   - 이름: 필수 입력 (빈 값 검사)
   - 이메일: 필수 입력 + 정규표현식(`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`) 검증
   - 메시지: 필수 입력 (최소 글자수)
3. **피드백 렌더링**:
   - 유효하지 않은 입력 필드 하단에 Red 에러 메시지 렌더링
   - 통과 시 Form Reset + 성공 메시지 Toast 표시.

---

