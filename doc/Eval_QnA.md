## 🎯 4. 평가 인터뷰 질문지 (Eval.pdf) 완전 대비 Q&A 가이드

후일 평가를 받을 때 아래 질문들에 대해 자신감 있게 답변할 수 있도록 정리한 핵심 내용입니다.

---

### ❓ Q1. HTML, CSS, JavaScript를 분리한 이유와 각 파일의 역할은 무엇인가요?
- **답변**: 
  - **관심사의 분리(Separation of Concerns)** 원칙을 따르기 위함입니다. 
  - **HTML (`index.html`)**: 웹페이지의 구조와 의미(Semantic Structure)를 담당합니다.
  - **CSS (`css/style.css`)**: 시각적 스타일, 레이아웃, 반응형 디자인 및 테마 표현을 담당합니다.
  - **JavaScript (`js/app.js`)**: 동적 인터랙션, 사용자 이벤트 처리, 비동기 API 통신 및 상태(State)에 따른 DOM 조작을 담당합니다.
  - 파일 분리를 통해 코드의 재사용성과 유지보수성이 향상되며, 브라우저가 CSS와 JS를 캐싱하여 로딩 성능도 개선됩니다.

---

### ❓ Q2. 시맨틱 태그(`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` 등)를 사용한 이유는 무엇이며 어떤 기준으로 선택했나요?
- **답변**:
  - `div` 남용을 막고, **웹 접근성(Accessibility)** 및 **검색 엔진 최적화(SEO)**를 높이기 위해 시맨틱 태그를 사용했습니다.
  - **선택 기준**:
    - `<header>`: 로고와 메인 네비게이션이 위치하는 최상단 영역
    - `<nav>`: 섹션 이동 앵커 링크들의 집합 영역
    - `<main>`: 문서의 핵심 주제이자 중복되지 않는 본문 콘텐츠 영역
    - `<section>`: Hero, About, Skills, Projects, Contact 등 연관된 콘텐츠를 논리 그룹으로 묶는 영역
    - `<article>`: Projects 섹션 내부의 카드처럼 독립적으로 존재 가능한 콘텐츠 단위
    - `<footer>`: 저작권, 소셜 링크 등 바닥글 정보 영역

---

### ❓ Q3. CSS 변수(`:root`)를 사용한 이유와 어떤 이점이 있나요?
- **답변**:
  - **중앙 집중식 디자인 시스템 구축**을 위해서입니다.
  - primary 색상, 배경색, 폰트 크기 등을 `:root`에 변수로 선언해 두면, 코드 전체에서 일관된 스타일을 유지할 수 있습니다.
  - 특히 다크 모드 구현 시 `[data-theme="dark"]` 속성 아래에서 변수 값만 바꿔주면 전체 페이지의 테마가 한 번에 전환되므로 테마 관리 및 유지보수가 매우 손쉽습니다.

---

### ❓ Q4. HTML의 `onclick` 인라인 속성 대신 JavaScript의 `addEventListener`를 사용한 이유는 무엇인가요?
- **답변**:
  - **HTML(구조)과 JS(로직)의 분리**를 유지하기 위해서입니다.
  - HTML 태그 내에 `onclick="func()"`을 적으면 구조와 로직이 섞여 코드가 지저분해지고 유지보수가 어렵습니다.
  - `addEventListener`를 사용하면 한 요소에 복수의 이벤트 리스너를 등록할 수 있고, 이벤트 캡처링/버블링 단계를 제어할 수 있으며, 동적으로 이벤트를 바인딩하거나 해제(`removeEventListener`)하기 용이합니다.

---

### ❓ Q5. "이벤트 → 상태 변경 → 화면 업데이트" 흐름이 코드에서 어떻게 동작하는지 설명해보세요.
- **답변 (예: 다크 모드 토글)**:
  1. **이벤트(Event)**: 사용자가 테마 토글 버튼을 클릭합니다 (`button.addEventListener('click', ...)`).
  2. **상태 변경(State Change)**: `state.theme = state.theme === 'light' ? 'dark' : 'light'` 코드가 실행되어 `state` 객체의 값이 갱신됩니다.
  3. **화면 업데이트(Render)**: 갱신된 `state.theme` 값을 바탕으로 `document.documentElement.setAttribute('data-theme', state.theme)`를 수행하여 화면 스타일이 즉시 바뀝니다.

---

### ❓ Q6. `async/await`와 `try/catch`로 API 호출 성공과 실패를 어떻게 분기 처리했나요?
- **답변**:
  - `async` 함수 내에서 `fetch(url)`를 `await`로 호출하여 비동기 응답을 기다립니다.
  - **성공 처리 (`try`)**: 응답 status가 `res.ok` (200대)인 경우 JSON 변환 후 `state.projects`에 저장하고, `state.apiStatus = 'success'`로 지정한 뒤 프로젝트 카드를 화면에 렌더링합니다. (저장소가 비어있다면 `state.apiStatus = 'empty'`)
  - **실패 처리 (`catch`)**: 네트워크 오류나 API Rate Limit (403 forbidden) 발생 시 `catch` 블록으로 이동하여 `state.apiStatus = 'error'`로 설정하고, 사용자에게 "프로젝트를 불러올 수 없습니다" 메시지와 [재시도] 버튼을 렌더링합니다.

---

### ❓ Q7. `map`, `filter` 등 배열 메서드로 GitHub 데이터를 카드 UI로 변환하는 과정을 설명해보세요.
- **답변**:
  - **`filter`**: API로 전달받은 전체 저장소 배열에서 포크된 저장소를 제외하거나(`!repo.fork`), 사용자가 선택한 특정 언어(`state.filterLanguage`)에 해당하는 저장소만 걸러냅니다.
  - **`map`**: 걸러진 저장소 객체 배열을 순회하며, 템플릿 리터럴(Template Literal)을 이용해 `<article class="project-card">` 형태의 HTML 태그 문자열 배열로 변환합니다.
  - 마지막으로 `.join('')`을 호출해 하나의 거대한 HTML 문자열로 합친 뒤 `projectsContainer.innerHTML`에 할당하여 화면에 렌더링합니다.

---

### ❓ Q8. Flexbox와 Grid를 각각 어디에 적용했고, 왜 그렇게 선택했나요?
- **답변**:
  - **Flexbox (1차원 레이아웃)**: Navigation Bar (`<nav>`)와 Header 영역에 사용했습니다. 로고와 메뉴 항목들을 수평 1직선상으로 정렬하고 양 끝 배치(`justify-content: space-between`), 수직 중앙 정렬(`align-items: center`)을 수행하기에 Flexbox가 가장 적합합니다.
  - **Grid (2차원 레이아웃)**: Projects 카드 섹션에 사용했습니다. 여러 개의 카드 항목을 가로/세로 격자 형태로 배열할 때 `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`를 작성하면, 별도의 미디어 쿼리 없이도 화면 크기에 맞춰 반응형 카드가 자동으로 배치되므로 Grid가 유리합니다.

---

### ❓ Q9. `state` 객체를 따로 만들어 관리한 이유는 무엇이며, 그냥 개별 변수로 처리하면 안 되나요?
- **답변**:
  - 애플리케이션의 현재 화면 상태(단일 출처 - Single Source of Truth)를 통일성 있게 추적하고 관리하기 위해서입니다.
  - 개별 `let theme = 'light'; let loading = true;` 변수로 흩어져 있으면 어떤 이벤트에서 어떤 변수가 바뀌었는지 추적하기 힘듭니다.
  - `state`라는 하나의 중앙 객체로 모아두면, 애플리케이션의 현재 상태를 한눈에 파악할 수 있고, React의 State 개념(컴포넌트 상태에 기반한 렌더링)을 바닐라 JS 수준에서 모방하여 구조화된 개발이 가능해집니다.

---

### ❓ Q10. 반응형 디자인에서 "모바일 퍼스트(Mobile First)"로 작성한 이유는 무엇인가요?
- **답변**:
  - **성능 및 코드 간결성**: 리소스가 제한적인 모바일 환경의 스타일을 기본(Base)으로 먼저 작성하고, 화면이 넓어짐에 따라 `@media (min-width: ...)`로 레이아웃 요소를 확장/추가하는 방식이 코드 불필요성을 줄여줍니다.
  - **사용자 경험(UX)**: 오늘날 대부분의 웹 접속이 모바일에서 이루어지므로 모바일 최적화를 최우선으로 고려하고 복잡한 데스크톱 레이아웃으로 점진적 향상(Progressive Enhancement)을 이루는 것이 모범범 디자인 패턴입니다.

---

## 🛠️ 5. 향후 실행 순서 안내

1. **`index.html` 작성**: 시맨틱 태그 뼈대 구축
2. **`css/style.css` 작성**: 디자인 시스템 & 모바일 퍼스트 레이아웃 적용
3. **`js/app.js` 작성**: State 객체 정의, 이벤트 연결, API 연동, DOM 렌더링 구현
4. **로컬 테스트 & 디버깅**: Live Server를 사용하여 다크모드, API 에러/로딩, 폼 검증 작동 테스트
5. **`README.md` 작성 및 GitHub Pages 배포**
