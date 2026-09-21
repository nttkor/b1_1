# 프론트엔드 스터디
## HTML, CSS, JavaScript

예전처럼 HTML 하나로 화면과 스타일을 모두 다루던 방식에서 발전하여, 현대 웹 개발에서는 **HTML, CSS, JavaScript**라는 3가지 핵심 기술로 역할을 명확히 나누어 개발합니다. 이 세 가지는 브라우저가 직접 이해하는 유일한 기초 언어들입니다.

이 3가지의 관계는 **'집을 짓는 과정'**에 비유하면 직관적으로 이해할 수 있습니다.

---

### 1. **HTML (HyperText Markup Language) — 웹의 '뼈대'**
* **역할**: 웹페이지의 **구조와 의미(Semantic Structure)**를 담당합니다.
* **집 짓기 비유**: 건물의 기둥을 세우고 방, 거실, 현관의 위치를 잡는 뼈대 공사와 같습니다.
* **핵심 특징**: 과거에는 구역을 나누기 위해 `<div>` 태그를 남용하는 경우가 많았으나, 현대 웹 개발에서는 `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`와 같은 **시맨틱(Semantic) 태그**를 사용합니다. 이를 통해 검색 엔진이 웹페이지 구조를 잘 파악할 수 있고(**검색 엔진 최적화, SEO**), 시각 장애인용 스크린 리더 등에서도 웹을 정확히 읽을 수 있게 돕습니다(**웹 접근성**).

**시맨틱 태그(Semantic Tag)**란 태그 자체에 **의미(Semantics)**를 부여하여 웹페이지의 **구조와 역할(Semantic Structure)**을 명확하게 표현하는 HTML 태그를 의미합니다. 

화면 구역을 구분할 때 의미 없는 `<div>` 태그를 무분별하게 남용하는 대신, 해당 영역이 어떤 역할을 하는지 브라우저와 개발자가 한눈에 알 수 있는 태그를 사용하는 마크업 방식입니다.

---

### 💡 **시맨틱 태그를 사용하는 이유**

* **`div` 남용 방지**: 무분별한 `<div>` 중첩을 막아 코드의 가독성과 유지보수성을 높입니다.
* **웹 접근성(Accessibility) 향상**: 시각 장애인을 위한 스크린 리더 등의 보조 기술이 문서 구조와 각 영역의 역할을 정확히 파악하도록 돕습니다.
* **검색 엔진 최적화(SEO) 향상**: 검색 엔진 크롤러가 웹페이지의 핵심 콘텐츠 구조를 명확히 이해하여 검색 결과 노출에 도움을 줍니다.

---

### 🏷️ **대표적인 시맨틱 태그와 선택 기준**

웹페이지를 설계할 때 영역별 목적에 맞추어 다음과 같은 기준으로 태그를 선택합니다:

* **`<header>`**: 로고와 메인 네비게이션이 위치하는 최상단 영역.
* **`<nav>`**: 다른 섹션이나 페이지로 이동하는 앵커 링크들의 집합 영역.
* **`<main>`**: 문서의 핵심 주제이자 페이지 내에서 중복되지 않는 본문 콘텐츠 영역.
* **`<section>`**: 연관된 콘텐츠들을 하나의 논리적인 그룹으로 묶어주는 영역.
* **`<article>`**: 독립적으로 분리하여 재사용할 수 있는 콘텐츠 단위(예: 프로젝트 카드).
* **`<footer>`**: 저작권 정보, 소셜 링크 등이 위치하는 바닥글 영역.

---

💡 실제 웹사이트에서 이 시맨틱 태그들이 어떤 전체 구조로 배치되는지 예시 HTML 코드 형태로 확인해 볼까요?
---

### 2. **CSS (Cascading Style Sheets) — 웹의 '인테리어'**
* **역할**: 웹페이지의 **시각적 스타일, 레이아웃, 반응형 디자인 및 테마**를 담당합니다.
* **집 짓기 비유**: 완성된 뼈대에 벽지를 바르고, 가구를 배치하고, 조명 색상을 꾸미는 인테리어 작업입니다.
* **핵심 특징**: 
  * 화면 크기(모바일, 태블릿, 데스크톱)에 맞게 화면 배치를 바꾸는 **모바일 퍼스트 반응형 디자인**이나 **Flexbox, Grid** 같은 최신 레이아웃 기법을 구현합니다.
  * 다크 모드/라이트 모드처럼 웹사이트의 색상 테마를 쉽게 바꿀 수 있도록 관리합니다.

---

### 3. **JavaScript (JS) — 웹의 '전기 및 자동화 시스템'**
* **역할**: **동적 인터랙션, 사용자 이벤트 처리, 비동기 API 통신 및 상태(State) 변경에 따른 화면 업데이트**를 담당합니다.
* **집 짓기 비유**: 스위치를 누르면 불이 켜지거나, 사람이 다가가면 동작하는 자동문처럼 '동적 기능'을 넣어주는 시스템입니다.
* **핵심 특징**:
  * 사용자의 **클릭, 스크롤, 입력** 등에 즉각 반응하여 화면 요소를 바꾸거나 애니메이션을 실행합니다.
  * 페이지 전체를 새로고침하지 않고도 외부 서버(예: GitHub API)에서 데이터를 비동기로 불러와 카드 형태로 화면에 보여줍니다.

---

### 💡 **왜 세 가지 기술을 분리해서 작성할까요?**

1. **관심사의 분리 (Separation of Concerns)**: 구조(HTML), 스타일(CSS), 로직(JS)을 각자 독립된 파일로 나누어 관리합니다.
2. **코드의 재사용성과 유지보수성 향상**: 코드가 얽히지 않아 나중에 디자인만 바꾸거나 기능만 수정할 때 매우 편리합니다.
3. **웹 로딩 성능 개선**: 브라우저가 CSS와 JS 파일을 파일별로 따로 저장(**캐싱**)해 두고 재사용하므로 로딩 속도가 빨라집니다.
4. **현대 프론트엔드의 기반**: 최근 자주 쓰이는 React, Vue, Angular 같은 프레임워크들도 결국 내부적으로는 이 HTML, CSS, JavaScript 세 가지로 변환되어 동작합니다.

---
## html 문법
**네, HTML의 `class` 속성과 Python의 `class`는 이름만 같을 뿐 완전히 다른 개념입니다!** 

이전 질문에서 보셨던 `<button class="hamburger-btn">`의 **HTML `class`**와 Python의 **객체지향 `class`**가 어떻게 다른지 직관적으로 비교해 드리겠습니다.

---

### 1. **HTML/CSS의 `class` 속성 — "그룹 이름표 (분류용 태그)"**

* **개념**: HTML 태그에 붙이는 **스타일 및 그룹화용 이름표(카테고리)**입니다.
* **주요 역할**: 
  * **CSS**: 동일한 디자인 스타일을 여러 요소에 한 번에 적용할 때 사용합니다. (예: `.btn` 클래스를 가진 모든 버튼에 같은 배경색 적용)
  * **JavaScript**: `classList.add()`, `classList.toggle('active')`처럼 요소의 스타일 상태를 켜고 끌 때 식별자로 활용합니다.
* **특징**: 
  * 한 페이지 안에서 **여러 요소에 중복해서 사용**할 수 있습니다.
  * 띄어쓰기로 **여러 개를 동시에 부여**할 수 있습니다 (예: `class="btn primary active"`).

---

### 2. **Python의 `class` — "붕어빵 틀 (객체 설계도)"**

* **개념**: 프로그래밍(객체지향 언어)에서 데이터(변수)와 기능(메서드)을 하나로 묶어 다루기 위한 **설계도(Blueprint)**입니다.
* **주요 역할**: 
  * 똑같은 구조를 가진 객체(Object)를 수없이 만들어내기 위한 틀 역할을 합니다.
  * 예: `Car`라는 클래스(설계도)를 만들고, 이를 통해 `my_car`, `your_car`라는 실제 자동차 객체(인스턴스)를 생성.
* **특징**: 코드 로직과 데이터를 구조화하는 프로그래밍 언어 차원의 키워드입니다.

---

### ⚖️ **한눈에 비교하기**

| 구분 | **HTML의 `class` 속성** | **Python의 `class` 키워드** |
| :--- | :--- | :--- |
| **분야** | 웹 문서 구조 / 디자인 (HTML & CSS) | 프로그래밍 로직 / 객체지향 (Python) |
| **비유** | 동아리 명찰 / 옷의 색상 분류 표지 | 붕어빵을 찍어내는 **붕어빵 틀** |
| **목적** | 요소들을 그룹으로 묶어 **CSS 스타일을 적용**하거나 JS로 모양을 바꿈 | 데이터와 기능을 묶어 **새로운 객체(인스턴스)**를 생성함 |
| **사용 예시** | `<div class="card active">` | `class User:` <br> `  def __init__(self): ...` |

> 💡 **참고 (JavaScript에서의 class)**
> JavaScript 언어 자체에도 Python처럼 객체를 만드는 `class` 문법(ES6)이 존재합니다. 하지만 HTML 태그 속에 적는 `class="..."` 속성은 단순한 **문자열 이름표**일 뿐, 프로그래밍의 `class` 문법과는 완전히 별개입니다.

---

💡 HTML의 또 다른 식별자인 **`id`와 `class`는 각각 언제 나누어 쓰는지** 차이점도 알아볼까요?
---
##  다크 모드 전환 기능
현대 웹 개발에서 다크 모드 전환 기능은 **HTML, CSS, JavaScript**가 어떻게 역할을 나누어 **"이벤트 → 상태 변경 → 화면 업데이트"** 흐름으로 동작하는지 보여주는 대표적인 예시입니다.

---

### 1. **HTML (index.html) — 구조 준비**
최상단 `<html>` 태그에 테마를 식별할 `data-theme` 속성을 정의하고, 사용자가 클릭할 테마 전환 버튼을 배치합니다.

```html
<!DOCTYPE html>
<!-- data-theme 속성으로 현재 테마 상태를 나타냅니다 -->
<html lang="ko" data-theme="light">
<head>
  <link rel="stylesheet" href="css/style.css">
  <script src="js/app.js" defer></script>
</head>
<body>
  <!-- 다크 모드 토글 버튼 -->
  <button id="theme-toggle" aria-label="테마 전환">
    <i id="theme-icon" class="fa-solid fa-moon"></i>
  </button>
</body>
</html>
```
HTML에서 **`id`**와 **`class`**는 모두 특정 태그 요소를 식별하기 위한 속성이지만, **고유성(Uniqueness)**과 **사용 목적**에서 명확한 차이가 있습니다.

---

### 1. **`id` — 세상에 단 하나뿐인 고유 식별자**
* **고유성**: 한 HTML 문서 내에서 **오직 하나의 요소에만 부여**해야 하는 고유 식별자입니다.
* **주요 용도**:
  * **JavaScript 단일 요소 선택**: `document.getElementById('header')` 또는 `document.getElementById('theme-toggle')`처럼 딱 하나의 특정 요소를 정확히 지정하여 제어할 때 사용합니다.
  * **앵커 링크(#) 위치 지정**: `<section id="hero">`나 `<section id="about">`처럼 메뉴 클릭 시 해당 위치로 페이지 스크롤을 이동시키는 기준점으로 활용됩니다.
  * **폼 라벨 연결 (for-id 매칭)**: `<label for="user-name">`과 `<input id="user-name">`을 1:1로 매칭하여 웹 접근성을 확보할 때 사용합니다.
* **CSS 표기법**: CSS 선택자로 지정할 때 샵(`#`) 기호를 사용합니다 (예: `#header`).

---

### 2. **`class` — 여러 요소를 묶어주는 그룹 이름표**
* **중복성**: 한 문서 내에서 **여러 요소에 중복해서 동일하게 지정**할 수 있습니다.
* **주요 용도**:
  * **CSS 스타일 재사용**: `.skill-card`나 `.projects-grid`처럼 같은 레이아웃과 디자인을 여러 요소에 일괄 적용할 때 사용합니다.
  * **동적 상태 제어**: JavaScript에서 `classList.toggle('active')` 형태로 햄버거 메뉴나 버튼의 열림/닫힘 상태를 전환할 때 사용됩니다.
  * **그룹 요소 선택**: `document.querySelectorAll('.nav-link')`처럼 같은 역할을 하는 요소들을 일괄 선택할 때 활용합니다.
* **다중 지정 가능**: 한 요소에 띄어쓰기로 여러 개의 클래스를 동시에 부여할 수 있습니다 (예: `class="btn btn-primary active"`).
* **CSS 표기법**: CSS 선택자로 지정할 때 점(`.`) 기호를 사용합니다 (예: `.nav-container`).

---
웹 개발(특히 CSS 스타일링)에서 **`id` 대신 `class`를 선호하고 권장하는 핵심 이유**는 다음과 같습니다.

---

### 1. **스타일 재사용성 (Reusability)**
* **`class`**: 한 페이지 안에서 여러 요소에 중복 적용이 가능하므로, `.btn`, `.skill-card`, `.projects-grid`처럼 동일한 디자인이나 레이아웃 규칙을 여러 태그에 일괄 적용하고 재사용하기에 매우 유리합니다.
* **`id`**: 문서 내 단 하나의 고유한 요소에만 부여해야 하므로 스타일을 재사용할 수 없습니다.

---

### 2. **CSS 우선순위(Specificity / 명시도) 관리의 유연성**
* **`id` 선택자(`#id`)**: `class` 선택자보다 CSS 우선순위(명시도 점수)가 매우 높습니다. `id`로 스타일을 정의해 두면, 나중에 디자인을 수정하거나 스타일을 덮어쓸(Override) 때 제약이 크고 코드가 복잡해집니다.
* **`class` 선택자(`.class`)**: 명시도가 적절하여 `:root` 변수나 `[data-theme="dark"]`, `.active`와 같은 테마 및 상태 변경 클래스를 활용해 스타일을 유연하게 제어할 수 있습니다.

---

### 3. **HTML / CSS / JS 간의 명확한 역할 분리**
프로젝트의 구현 방식과 코드를 살펴보면 각 속성의 역할이 명확히 나뉘어 있습니다:
* **`id`**: JavaScript에서 단일 DOM 요소를 고유하게 선택(`getElementById`)하거나, 폼 요소와 라벨을 1:1로 연결(`for-id` 매칭)하는 용도로 사용합니다.
* **`class`**: CSS 시각적 스타일 지정 및 JavaScript를 통한 동적 UI 상태 전환(`classList.toggle('active')`) 용도로 활용합니다.

---

💡 CSS에서 `id`와 `class` 또는 태그 선택자 간에 스타일이 충돌할 때 적용되는 **우선순위(Specificity) 점수 계산 방식**도 함께 알아보실까요?
---
### ⚖️ **한눈에 비교하기**

| 구분 | **`id` 속성** | **`class` 속성** |
| :--- | :--- | :--- |
| **고유성** | 페이지 내 **단 1개만** 존재 가능 | **여러 개 중복** 적용 가능 |
| **CSS 선택자** | `#` 기호 (예: `#theme-toggle`) | `.` 기호 (예: `.skill-card`) |
| **다중 지정** | 불가능 (1개 요소당 1개 id) | 가능 (예: `class="btn primary"`) |
| **CSS 우선순위** | 우선순위가 **높음** (class보다 강력함) | 우선순위가 **보통** |
| **대표적 용도** | JS 요소 개별 제어, 앵커 이동, 폼 매칭 | CSS 스타일 재사용, UI 상태 전환(`active`) |
| **비유** | **주민등록번호** (고유 식별) | **반/동아리 이름** (그룹 분류) |

---

💡 CSS에서 스타일이 충돌할 때 적용되는 우선순위 점수 계산 방식이나, 스타일시트 작성 시 `id`보다 `class` 선택자를 선호하는 이유도 함께 알아보실까요?
---

### 2. **CSS (style.css) — CSS 변수(:root) 기반 테마 설계**
`:root`에 기본(라이트 모드) 색상을 변수로 선언하고, `[data-theme="dark"]` 속성이 적용되었을 때 변수 값만 바꿔줍니다. 이렇게 하면 개별 태그의 스타일을 하나씩 바꿀 필요 없이 변수 값만 한 번에 전환됩니다.

```css
/* 1. 라이트 테마 기본 변수 */
:root {
  --bg-primary: #ffffff;
  --text-primary: #0f172a;
}

/* 2. 다크 테마 변수 (data-theme="dark" 일 때 재정의) */
[data-theme="dark"] {
  --bg-primary: #0f172a;
  --text-primary: #f8fafc;
}

/* 3. 실제 요소에는 CSS 변수를 연결 */
body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

---

### 3. **JavaScript (app.js) — 상태 관리 및 인터랙션 구현**

JavaScript에서는 **이벤트 감지 → 상태(State) 변경 → 화면 렌더링** 순서로 동작을 처리합니다.

#### **① 상태(State) 정의 및 초기화**
현재 테마 상태를 중앙 `state` 객체에서 관리하고, 새로고침 후에도 유지되도록 `localStorage`와 연동합니다.

```javascript
// 단일 출처(Single Source of Truth) 상태 객체
const state = {
  theme: localStorage.getItem('theme') || 'light' // 로컬스토리지 저장값 또는 기본값 'light'
};
```

#### **② 1단계: 이벤트(Event) 감지 및 2단계: 상태(State) 변경**
버튼 클릭 이벤트를 등록하고, 클릭 시 `state.theme` 값을 토글합니다.

```javascript
const themeToggleBtn = document.getElementById('theme-toggle');

// onclick 대신 addEventListener 사용
themeToggleBtn.addEventListener('click', () => {
  // 상태 변경 (light <-> dark)
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  
  // 화면 업데이트 함수 호출
  renderTheme();
});
```

#### **③ 3단계: 화면 업데이트(Render / DOM 조작)**
변경되어 갱신된 `state.theme` 값을 받아 `<html>` 태그의 `data-theme` 속성을 바꿔주고, `localStorage`에 저장합니다.

```javascript
const renderTheme = () => {
  const { theme } = state; // 구조분해 할당
  
  // 1) html 태그의 data-theme 속성 변경 -> CSS 변수 즉시 반영
  document.documentElement.setAttribute('data-theme', theme);
  
  // 2) 새로고침 시에도 유지되도록 저장
  localStorage.setItem('theme', theme);
};

// 페이지 최초 로드 시 저장된 테마 반영
renderTheme();
```

---

### 🔄 **작동 단계 요약**
1. **이벤트 (Event)**: 사용자가 테마 토글 버튼을 클릭.
2. **상태 변경 (State Change)**: `state.theme` 값이 `'light'`에서 `'dark'`로 변경.
3. **화면 업데이트 (Render)**: `setAttribute('data-theme', 'dark')`가 실행되면서 CSS 변수의 색상이 일괄 전환되고, `localStorage`에 저장.

## 햄버거메뉴
모바일처럼 화면 폭이 좁은 환경에서는 네비게이션 메뉴를 숨겨 두었다가, ☰ 모양의 **햄버거 버튼**을 클릭하면 메뉴가 나타나도록 처리합니다.

햄버거 메뉴 역시 **HTML(구조) → CSS(스타일 & 미디어 쿼리) → JavaScript(이벤트 및 상태 변경)** 3단계 흐름으로 구현합니다.

---

### 1. **HTML (index.html) — 버튼과 메뉴 구조 작성**
3개의 막대(`<span>`)를 가진 햄버거 버튼과, 감춰둘 네비게이션 메뉴 목록(`<ul>`)을 구성합니다.

```html
<!-- 햄버거 버튼 (막대 3개) -->
<button id="hamburger-btn" class="hamburger-btn" aria-label="메뉴 열기">
  <span></span>
  <span></span>
  <span></span>
</button>

<!-- 네비게이션 메뉴 -->
<ul id="nav-menu" class="nav-menu">
  <li><a href="#hero" class="nav-link">Home</a></li>
  <li><a href="#about" class="nav-link">About</a></li>
  <li><a href="#projects" class="nav-link">Projects</a></li>
  <li><a href="#contact" class="nav-link">Contact</a></li>
</ul>
```

---

### 2. **CSS (style.css) — 모바일 퍼스트 레이아웃 & `.active` 스타일**
기본 모바일 화면에서는 메뉴를 화면 바깥(`left: -100%`)으로 숨겨두고, **768px 이상(태블릿/데스크톱)** 미디어 쿼리 환경에서는 햄버거 버튼을 숨기도록 처리합니다.

```css
/* 1. 모바일 기본 스타일: 메뉴를 화면 좌측 바깥에 숨김 */
.nav-menu {
  position: fixed;
  top: 70px;
  left: -100%; /* 화면 밖으로 숨김 */
  width: 100%;
  transition: all 0.3s ease;
}

/* 2. active 클래스가 붙었을 때 메뉴 나타남 */
.nav-menu.active {
  left: 0; /* 화면에 노출 */
}

/* 3. active 클래스가 붙었을 때 햄버거 막대 3개가 'X' 모양으로 변형 */
.hamburger-btn.active span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
.hamburger-btn.active span:nth-child(2) { opacity: 0; }
.hamburger-btn.active span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

/* 4. 태블릿/데스크톱(768px 이상)에서는 햄버거 버튼을 숨기고 메뉴를 상단 정렬 */
@media (min-width: 768px) {
  .hamburger-btn { display: none; }
  .nav-menu {
    position: static;
    flex-direction: row;
  }
}
```

---

### 3. **JavaScript (app.js) — 이벤트 감지 및 클래스 토글**

클릭 이벤트를 받아 메뉴의 열림 상태(`isMenuOpen`)를 토글하고, `classList.toggle('active')`를 활용해 CSS 클래스를 추가/제거합니다.

```javascript
// 1. 메뉴 상태 관리 (Single Source of Truth)
const state = {
  isMenuOpen: false
};

const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

// 2. 화면 렌더링 함수
const renderMenu = () => {
  const { isMenuOpen } = state;
  hamburgerBtn.classList.toggle('active', isMenuOpen);
  navMenu.classList.toggle('active', isMenuOpen);
};

// 3. 버튼 클릭 이벤트 바인딩
hamburgerBtn.addEventListener('click', () => {
  state.isMenuOpen = !state.isMenuOpen; // 상태 반전
  renderMenu(); // UI 업데이트
});
```

---

## 4 **햄버거 버튼**

### 🔄 **핵심 작동 흐름**
1. **사용자 이벤트**: 사용자가 햄버거 버튼을 클릭.
2. **상태 변경**: `state.isMenuOpen` 값이 `true` ↔ `false`로 변경.
3. **화면 업데이트**: `classList.toggle('active')`가 실행되면서 메뉴 슬라이드 열림 및 버튼의 'X'자 변형 애니메이션이 적용.


모바일처럼 화면 폭이 좁은 환경에서는 네비게이션 메뉴를 숨겨 두었다가, ☰ 모양의 **햄버거 버튼**을 클릭하면 메뉴가 나타나도록 처리합니다.

햄버거 메뉴 역시 **HTML(구조) → CSS(스타일 & 미디어 쿼리) → JavaScript(이벤트 및 상태 변경)** 3단계 흐름으로 구현합니다.

---

### 1. **HTML (index.html) — 버튼과 메뉴 구조 작성**
3개의 막대(`<span>`)를 가진 햄버거 버튼과, 감춰둘 네비게이션 메뉴 목록(`<ul>`)을 구성합니다.

```html
<!-- 햄버거 버튼 (막대 3개) -->
<button id="hamburger-btn" class="hamburger-btn" aria-label="메뉴 열기">
  <span></span>
  <span></span>
  <span></span>
</button>

<!-- 네비게이션 메뉴 -->
<ul id="nav-menu" class="nav-menu">
  <li><a href="#hero" class="nav-link">Home</a></li>
  <li><a href="#about" class="nav-link">About</a></li>
  <li><a href="#projects" class="nav-link">Projects</a></li>
  <li><a href="#contact" class="nav-link">Contact</a></li>
</ul>
```

---

### 2. **CSS (style.css) — 모바일 퍼스트 레이아웃 & `.active` 스타일**
기본 모바일 화면에서는 메뉴를 화면 바깥(`left: -100%`)으로 숨겨두고, **768px 이상(태블릿/데스크톱)** 미디어 쿼리 환경에서는 햄버거 버튼을 숨기도록 처리합니다.

```css
/* 1. 모바일 기본 스타일: 메뉴를 화면 좌측 바깥에 숨김 */
.nav-menu {
  position: fixed;
  top: 70px;
  left: -100%; /* 화면 밖으로 숨김 */
  width: 100%;
  transition: all 0.3s ease;
}

/* 2. active 클래스가 붙었을 때 메뉴 나타남 */
.nav-menu.active {
  left: 0; /* 화면에 노출 */
}

/* 3. active 클래스가 붙었을 때 햄버거 막대 3개가 'X' 모양으로 변형 */
.hamburger-btn.active span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
.hamburger-btn.active span:nth-child(2) { opacity: 0; }
.hamburger-btn.active span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

/* 4. 태블릿/데스크톱(768px 이상)에서는 햄버거 버튼을 숨기고 메뉴를 상단 정렬 */
@media (min-width: 768px) {
  .hamburger-btn { display: none; }
  .nav-menu {
    position: static;
    flex-direction: row;
  }
}
```

---

### 3. **JavaScript (app.js) — 이벤트 감지 및 클래스 토글**
클릭 이벤트를 받아 메뉴의 열림 상태(`isMenuOpen`)를 토글하고, `classList.toggle('active')`를 활용해 CSS 클래스를 추가/제거합니다.

```javascript
// 1. 메뉴 상태 관리 (Single Source of Truth)
const state = {
  isMenuOpen: false
};

const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

// 2. 화면 렌더링 함수
const renderMenu = () => {
  const { isMenuOpen } = state;
  hamburgerBtn.classList.toggle('active', isMenuOpen);
  navMenu.classList.toggle('active', isMenuOpen);
};

// 3. 버튼 클릭 이벤트 바인딩
hamburgerBtn.addEventListener('click', () => {
  state.isMenuOpen = !state.isMenuOpen; // 상태 반전
  renderMenu(); // UI 업데이트
});
```

---

### 🔄 **핵심 작동 흐름**
1. **사용자 이벤트**: 사용자가 햄버거 버튼을 클릭.
2. **상태 변경**: `state.isMenuOpen` 값이 `true` ↔ `false`로 변경.
3. **화면 업데이트**: `classList.toggle('active')`가 실행되면서 메뉴 슬라이드 열림 및 버튼의 'X'자 변형 애니메이션이 적용.

💡 포트폴리오 웹사이트에 들어가는 다른 반응형 인터랙션(예: GitHub API 연동이나 스크롤 탑 버튼) 구현 방식도 궁금하신가요?