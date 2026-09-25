### 용어 정리

| 용어 | 한 줄 요약 | 상세 설명 |
| :--- | :--- | :--- |
| **HTML / CSS / JavaScript** | 웹의 뼈대·인테리어·전기 시스템 | [📖 설명 보기](doc/study.md#html-css-javascript) |
| **시맨틱 태그** | 의미 있는 HTML 태그(`<header>`, `<nav>` 등) | [📖 설명 보기](doc/study.md) |
| **반응형 웹 & 모바일 퍼스트** | 화면 크기에 따라 자동 적응, 모바일 기준 우선 설계 | [📖 설명 보기](doc/study.md#responsive) |
| **미디어 쿼리** | 화면 너비 조건별 CSS 적용 (`@media`) | [📖 설명 보기](doc/study.md#responsive) |

### 🎨 CSS 레이아웃

| 용어 | 한 줄 요약 | 상세 설명 |
| :--- | :--- | :--- |
| **Flexbox** | 1차원(한 방향) 요소 정렬 — 네비게이션, 버튼 그룹 | [📖 설명 보기](doc/study.md#layout) |
| **Grid** | 2차원(행×열) 요소 배치 — 카드 목록, 갤러리 | [📖 설명 보기](doc/study.md#layout) |
| **CSS 변수 (Custom Properties)** | `:root`에 색상 등 값을 변수로 선언하고 재사용 | [📖 설명 보기](doc/study.md#css-variables) |

### ⚡ JavaScript 핵심 패턴

| 용어 | 한 줄 요약 | 상세 설명 |
| :--- | :--- | :--- |
| **이벤트 → 상태 → 렌더링** | 모던 프론트엔드의 핵심 흐름 | [📖 설명 보기](doc/study.md#event-state-render) |
| **Single Source of Truth** | 앱 상태를 `state` 객체 하나에 집중 관리 | [📖 설명 보기](doc/study.md#single-source) |
| **다크 모드 전환** | CSS 변수 + localStorage + 이벤트-상태-렌더 흐름 종합 | [📖 설명 보기](doc/study.md#다크-모드-전환-기능) |
| **햄버거 메뉴** | classList.toggle + aria-expanded + 미디어 쿼리 | [📖 설명 보기](doc/study.md#햄버거메뉴) |

### 🌍 비동기 & API

| 용어 | 한 줄 요약 | 상세 설명 |
| :--- | :--- | :--- |
| **fetch / async‑await / try‑catch** | 서버에 데이터 요청하고 오류 처리하는 비동기 코드 | [📖 설명 보기](doc/study.md#async) |
| **GitHub REST API** | URL 기반으로 GitHub 저장소 데이터를 가져오는 인터페이스 | [📖 설명 보기](doc/study.md#github-api) |
| **localStorage** | 새로고침 후에도 유지되는 브라우저 내장 저장소 | [📖 설명 보기](doc/study.md#localstorage) |
| **Intersection Observer** | 요소가 화면에 진입했을 때를 감지하는 브라우저 API | [📖 설명 보기](doc/study.md#intersection-observer) |

### ♿ 웹 접근성 (ARIA)

| 용어 | 한 줄 요약 | 상세 설명 |
| :--- | :--- | :--- |
| **폼 유효성 검사** | 입력값 형식을 서버 전송 전 브라우저에서 검증 | [📖 설명 보기](doc/study.md#form-validation) |
| **aria‑label** | 아이콘 버튼에 스크린 리더용 설명 텍스트 추가 | [📖 설명 보기](doc/study.md#aria) |
| **aria‑expanded** | 메뉴 열림/닫힘 상태를 스크린 리더에게 알림 | [📖 설명 보기](doc/study.md#aria) |
| **role="alert" / aria‑live** | 동적으로 나타나는 에러 메시지를 스크린 리더가 즉시 읽게 함 | [📖 설명 보기](doc/study.md#aria) |
| **스킵 링크 (Skip Link)** | 키보드 사용자가 본문으로 바로 이동하는 링크 | [📖 설명 보기](doc/study.md#aria) |
| **:focus‑visible** | 키보드 탐색 시에만 포커스 윤곽선 표시 | [📖 설명 보기](doc/study.md#aria) |

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

---

## 반응형 웹 & 모바일 퍼스트 & 미디어 쿼리 {#responsive}

### 반응형 웹(Responsive Web)이란?

하나의 웹사이트가 모바일, 태블릿, 데스크톱 등 **다양한 화면 크기에서 자동으로 레이아웃이 조정**되는 방식입니다.  
예전에는 "모바일용 사이트"와 "PC용 사이트"를 따로 만들었지만, 지금은 CSS 하나로 모든 기기를 대응합니다.

> **비유**: 물을 담는 용기처럼, 어떤 크기의 그릇(화면)에 담아도 그 모양에 맞게 흘러 채워지는 디자인입니다.

---

### 모바일 퍼스트(Mobile First)란?

CSS를 작성할 때 **가장 작은 화면(모바일)을 기본 스타일로 먼저 작성**하고, 화면이 커질수록 스타일을 추가로 덮어씌우는 설계 방식입니다.

**왜 모바일 퍼스트인가?**

- 전 세계 인터넷 트래픽의 60% 이상이 모바일에서 발생합니다.
- 작은 화면 → 큰 화면 순으로 레이아웃을 확장하는 것이 반대 방향보다 훨씬 자연스럽습니다.
- 모바일은 필수 요소만 남기는 과정이라, 우선순위 설계를 강제합니다.

```css
/* ✅ 모바일 퍼스트: 조건 없이 모바일 기본 스타일 먼저 */
.hero-title {
  font-size: 2.5rem; /* 모바일 기본 */
}

/* 768px 이상(태블릿)일 때 추가 적용 */
@media (min-width: 768px) {
  .hero-title {
    font-size: 3.2rem;
  }
}

/* 1024px 이상(데스크톱)일 때 추가 적용 */
@media (min-width: 1024px) {
  .hero-title {
    font-size: 3.8rem;
  }
}
```

---

### 미디어 쿼리(Media Query)란?

CSS에서 **"화면이 이 조건을 만족할 때만 이 스타일을 적용해라"** 라고 지정하는 문법입니다.

```css
/* 문법: @media (조건) { ... } */
@media (min-width: 768px) {
  /* 화면 너비가 768px 이상일 때만 이 블록이 실행됨 */
  .hamburger-btn {
    display: none; /* 태블릿 이상에서 햄버거 버튼 숨김 */
  }
}
```

`min-width` = "최소 이 너비 이상이면" → 모바일 퍼스트에서 사용  
`max-width` = "최대 이 너비 이하이면" → 데스크톱 퍼스트에서 사용 (모바일 퍼스트의 반대)

---

## Flexbox vs Grid — 언제 무엇을 쓰나 {#layout}

### Flexbox — 1차원 레이아웃

**한 방향(가로 또는 세로) 으로 요소를 정렬**할 때 사용합니다.

> **비유**: 지하철 좌석처럼 한 줄로 나란히 앉히되, 간격과 정렬을 자유롭게 조정하는 방식.

```css
/* Navigation Bar: 로고(왼쪽) + 메뉴(오른쪽) 1차원 수평 정렬 */
.nav-container {
  display: flex;                  /* Flexbox 활성화 */
  justify-content: space-between; /* 양 끝으로 배치 */
  align-items: center;            /* 세로 가운데 정렬 */
}
```

**Flexbox를 선택하는 상황**: 네비게이션 바, 버튼 그룹, 카드 안 내부 정렬처럼 한 줄 배치

---

### Grid — 2차원 레이아웃

**가로(열)와 세로(행)를 동시에 제어**하는 격자 배치입니다.

> **비유**: 바둑판처럼 행과 열이 교차하는 격자 칸에 요소를 배치하는 방식.

```css
/* Projects 카드: 행 × 열 2차원 격자 배치 */
.projects-grid {
  display: grid;
  /* auto-fit: 열 개수를 자동으로 조정 */
  /* minmax(280px, 1fr): 최소 280px, 남는 공간은 균등 분배 */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
```

`repeat(auto-fit, minmax(280px, 1fr))`의 의미:
- 카드 하나의 최소 너비는 280px
- 화면이 넓으면 한 줄에 여러 카드 배치, 좁으면 1열로 줄어듦
- 미디어 쿼리 없이도 자동 반응형

**Grid를 선택하는 상황**: 카드 목록, 갤러리, 복잡한 페이지 레이아웃처럼 행·열 2차원 배치

| | Flexbox | Grid |
| :--- | :--- | :--- |
| 방향 | 1차원 (행 OR 열) | 2차원 (행 AND 열) |
| 사용 상황 | 네비게이션, 버튼 그룹 | 카드 목록, 갤러리 |
| 자동 반응형 | 수동 설정 필요 | `auto-fit` + `minmax`로 자동 |

---

## CSS 변수 (Custom Properties) — 다크모드의 핵심 {#css-variables}

### CSS 변수란?

CSS에서 자주 쓰는 색상, 폰트, 크기 등의 값을 **변수로 정의해두고 재사용**하는 기능입니다.  
값을 한 곳에서만 바꾸면 그 변수를 사용하는 모든 곳이 한 번에 바뀝니다.

```css
/* 1. :root 에 변수 선언 (전체 페이지에서 사용 가능) */
:root {
  --accent-color: #6366f1; /* 보라색 포인트 */
  --bg-primary: #ffffff;   /* 배경색 흰색 */
  --text-primary: #0f172a; /* 글자색 검정 */
}

/* 2. var() 함수로 변수 값 사용 */
.btn-primary {
  background-color: var(--accent-color); /* #6366f1 이 들어감 */
}
```

### 다크모드에 CSS 변수를 활용하는 이유

`[data-theme="dark"]` 속성이 `<html>` 태그에 붙으면, `:root` 변수값만 덮어씌웁니다.  
각 요소의 스타일 코드를 건드리지 않고도 테마 전환이 됩니다.

```css
/* 라이트 모드 기본값 */
:root {
  --bg-primary: #ffffff;
  --text-primary: #0f172a;
}

/* 다크 모드: 변수값만 교체 */
[data-theme="dark"] {
  --bg-primary: #0f172a;
  --text-primary: #f8fafc;
}

/* body 스타일은 그대로 — 변수가 알아서 바뀜 */
body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}
```

> **비유**: 엑셀에서 특정 셀의 숫자 하나를 바꾸면 그 셀을 참조하는 모든 수식이 자동으로 업데이트되는 것과 같습니다.

---

## 이벤트 → 상태 → 렌더링 패턴 {#event-state-render}

### 이 패턴이 무엇인가?

모던 프론트엔드 개발의 가장 핵심적인 사고방식입니다.

```
사용자 행동(클릭/스크롤/입력)
    ↓ 이벤트(Event) 감지
상태 객체(state) 값 변경
    ↓ 상태(State) 변경
변경된 상태를 바탕으로 화면 다시 그리기
    ↓ 렌더링(Render / DOM 조작)
사용자에게 변경된 화면 표시
```

### 왜 이 패턴을 쓰나?

**나쁜 예 (직접 DOM 조작)**:

```javascript
// ❌ 클릭할 때마다 직접 DOM을 바꿈
document.getElementById('hamburger-btn').addEventListener('click', () => {
  document.getElementById('nav-menu').style.left = '0';
  document.getElementById('hamburger-btn').classList.add('active');
  // 상태가 어딘가에 기록되지 않음 → 나중에 "지금 메뉴가 열려있나 닫혀있나?" 모름
});
```

**좋은 예 (상태 → 렌더 분리)**:

```javascript
// ✅ 상태를 먼저 바꾸고, 렌더 함수가 상태를 보고 화면을 그림
const state = { isMenuOpen: false };

const renderMenu = () => {
  // 상태만 보고 화면 결정 → "지금 상태"가 항상 명확
  elements.hamburgerBtn.classList.toggle('active', state.isMenuOpen);
  elements.navMenu.classList.toggle('active', state.isMenuOpen);
};

elements.hamburgerBtn.addEventListener('click', () => {
  state.isMenuOpen = !state.isMenuOpen; // 1단계: 상태 변경
  renderMenu();                          // 2단계: 화면 반영
});
```

이 패턴의 장점:
- 현재 앱 상태가 `state` 객체 하나에 모두 모여 있음 → 버그 추적이 쉬움
- React, Vue 같은 프레임워크들도 내부적으로 이 패턴으로 동작

---

## Single Source of Truth — 중앙 상태 관리 {#single-source}

### 개념

"**진실의 단일 출처**"라는 뜻으로, 앱의 모든 상태를 **한 곳(state 객체)에서만 관리**하는 원칙입니다.

```javascript
// 앱의 모든 상태가 이 객체 하나에 집중
const state = {
  theme: localStorage.getItem('theme') || 'light', // 테마
  isMenuOpen: false,                               // 메뉴 열림 여부
  projects: [],                                    // 프로젝트 목록
  filterLanguage: 'all',                           // 선택된 필터
  apiStatus: 'loading',                            // API 상태
  errorMessage: ''                                 // 에러 메시지
};
```

**왜 이렇게 하나?**

상태가 여러 변수에 흩어져 있으면 "지금 앱이 어떤 상태인지"를 파악하려면 모든 변수를 찾아봐야 합니다.  
한 객체에 모으면 `console.log(state)` 한 번으로 앱 전체 상태를 즉시 확인할 수 있습니다.

---

## 비동기 통신 — fetch / async-await / try-catch {#async}

### 동기 vs 비동기

**동기(Synchronous)**: 작업이 순서대로 처리됨. 앞 작업이 끝날 때까지 다음 작업은 대기.  
**비동기(Asynchronous)**: 오래 걸리는 작업(네트워크 요청 등)을 기다리는 동안 다른 작업을 먼저 처리.

> **비유**: 카페에서 음료를 주문하고 진동벨을 받은 뒤 자리에 앉아 핸드폰을 보다가, 벨이 울리면 가져오는 것이 비동기입니다. 반대로 카운터 앞에 서서 음료가 나올 때까지 무조건 기다리는 것이 동기입니다.

### fetch — 네트워크 요청 함수

```javascript
// fetch(URL)는 서버에 요청을 보내고, 응답을 기다리는 Promise를 반환합니다.
const response = await fetch('https://api.github.com/users/ntt65/repos');
```

### async / await — 비동기를 동기처럼 읽기 쉽게

`async`를 함수 앞에 붙이면 그 함수 안에서 `await`를 쓸 수 있습니다.  
`await`는 "이 작업이 끝날 때까지 여기서 기다려라" 라는 의미입니다.

```javascript
// async 키워드: "이 함수는 비동기 작업을 포함합니다"
const fetchGitHubProjects = async () => {
  
  // await: "fetch가 응답을 줄 때까지 기다렸다가 response에 담아라"
  const response = await fetch(`https://api.github.com/users/ntt65/repos`);
  
  // await: "JSON 파싱이 끝날 때까지 기다렸다가 data에 담아라"
  const data = await response.json();
  
  state.projects = data;
};
```

### try-catch — 에러 처리

네트워크 요청은 실패할 수 있습니다(인터넷 끊김, 서버 오류 등).  
`try` 블록에서 오류가 발생하면 `catch` 블록이 대신 실행됩니다.

```javascript
const fetchGitHubProjects = async () => {
  try {
    // 여기 안에서 오류가 생기면 catch로 이동
    const response = await fetch('https://api.github.com/users/ntt65/repos');
    
    if (!response.ok) {
      // 200이 아닌 응답(403, 404 등)은 직접 에러로 처리
      throw new Error(`오류 코드: ${response.status}`);
    }
    
    const data = await response.json();
    state.projects = data;
    state.apiStatus = 'success';

  } catch (error) {
    // try 블록에서 throw된 에러 또는 네트워크 단절 시 실행
    state.apiStatus = 'error';
    state.errorMessage = error.message;

  } finally {
    // 성공이든 실패든 항상 실행 (화면 업데이트)
    renderProjects();
  }
};
```

### HTTP 상태 코드

| 코드 | 의미 |
| :--- | :--- |
| 200 | 성공 (OK) |
| 403 | 접근 금지 (GitHub API Rate Limit 초과 시) |
| 404 | 찾을 수 없음 (존재하지 않는 URL) |
| 500 | 서버 내부 오류 |

---

## GitHub REST API 연동 {#github-api}

### API란?

**Application Programming Interface** — 두 프로그램이 서로 대화하는 창구입니다.

> **비유**: 음식점에서 손님(브라우저)이 주문서(요청)를 웨이터(API)에게 건네면, 주방(서버)에서 요리(데이터)를 만들어 웨이터가 다시 가져다주는 구조입니다.

### REST API란?

**HTTP 주소(URL) + 방식(GET/POST 등)** 으로 데이터를 주고받는 약속입니다.  
이 프로젝트에서는 GitHub가 공개한 REST API를 통해 저장소 목록을 가져옵니다.

```javascript
// GitHub API 요청 예시
// GET https://api.github.com/users/{유저이름}/repos
const response = await fetch(
  `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`
);
// ?sort=updated  → 최근 업데이트 순 정렬
// &per_page=12   → 최대 12개만 가져오기
```

응답 데이터(JSON)에는 저장소마다 이런 정보가 담겨 있습니다:

```json
{
  "name": "b4_1",
  "description": "포트폴리오 웹사이트",
  "html_url": "https://github.com/ntt65/b4_1",
  "language": "JavaScript",
  "stargazers_count": 0,
  "updated_at": "2026-09-01T12:00:00Z"
}
```

### Rate Limit (속도 제한)

GitHub API는 로그인하지 않은 상태에서 **1시간에 최대 60번** 요청이 가능합니다.  
초과하면 `403 Forbidden` 응답이 오고, 이때 에러 UI를 보여주도록 처리합니다.

---

## localStorage — 브라우저 저장소 {#localstorage}

### localStorage란?

브라우저가 제공하는 **열쇠-값 쌍 저장소**입니다. 페이지를 닫거나 새로고침해도 데이터가 사라지지 않습니다.  
서버에 저장되는 것이 아니라 **사용자 컴퓨터의 브라우저 내부**에 저장됩니다.

```javascript
// 저장
localStorage.setItem('theme', 'dark');

// 읽기
const savedTheme = localStorage.getItem('theme'); // 'dark'

// 삭제
localStorage.removeItem('theme');
```

### 다크모드에 적용된 방식

```javascript
const state = {
  // 앱 시작 시 저장된 값 읽기. 저장값 없으면 기본값 'light'
  theme: localStorage.getItem('theme') || 'light'
};

const renderTheme = () => {
  // 테마 적용 후 바로 저장 → 새로고침해도 유지
  localStorage.setItem('theme', state.theme);
  document.documentElement.setAttribute('data-theme', state.theme);
};
```

> **비유**: 인터넷 없이도 쓸 수 있는 **브라우저 내장 메모장**. 여기에 설정을 적어두면 다음에 열 때도 그대로 남아 있습니다.

---

## Intersection Observer — 스크롤 애니메이션 {#intersection-observer}

### Intersection Observer란?

특정 HTML 요소가 **화면(뷰포트)에 들어오거나 나갈 때를 감지**하는 브라우저 내장 기능입니다.  
스크롤 이벤트로 위치를 직접 계산하는 것보다 훨씬 성능이 좋습니다.

### 작동 원리

```javascript
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 요소가 화면에 20% 이상 보이면 실행
        entry.target.classList.add('appear'); // fade-in 애니메이션 클래스 추가
        observer.unobserve(entry.target);     // 한 번 실행 후 감시 중단
      }
    });
  },
  { threshold: 0.2 } // 요소가 20% 이상 보일 때 콜백 실행
);

// .fade-in 클래스를 가진 모든 요소를 관찰 대상으로 등록
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
```

```css
/* 초기 상태: 투명하고 아래에 위치 */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

/* appear 클래스가 붙으면: 보이고 원래 위치로 이동 */
.fade-in.appear {
  opacity: 1;
  transform: translateY(0);
}
```

> **비유**: 무대의 스포트라이트처럼, 배우(요소)가 무대(화면)에 등장하는 순간을 포착해 조명(애니메이션)을 켜는 방식입니다.

---

## 폼 유효성 검사 (Form Validation) {#form-validation}

### 폼 유효성 검사란?

사용자가 입력한 값이 올바른 형식인지 **서버로 전송하기 전에 브라우저에서 먼저 확인**하는 과정입니다.

### 이 프로젝트의 검증 로직

```javascript
const validateForm = () => {
  let isValid = true;

  // 1. 이름: 빈값 체크
  const nameVal = elements.userNameInput.value.trim(); // 앞뒤 공백 제거
  if (!nameVal) {
    elements.nameError.textContent = '이름을 입력해 주세요.';
    elements.userNameInput.classList.add('invalid'); // 빨간 테두리 표시
    isValid = false;
  }

  // 2. 이메일: 빈값 체크 + 정규표현식 형식 체크
  const emailVal = elements.userEmailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // 정규표현식 풀이:
  // ^[^\s@]+ → 시작: 공백·@가 아닌 문자 1개 이상 (아이디 부분)
  // @         → @ 기호 1개
  // [^\s@]+   → 공백·@가 아닌 문자 1개 이상 (도메인 이름)
  // \.        → 점(.) 1개
  // [^\s@]+$  → 공백·@가 아닌 문자 1개 이상으로 끝 (com, kr 등)

  if (!emailVal) {
    elements.emailError.textContent = '이메일을 입력해 주세요.';
    isValid = false;
  } else if (!emailRegex.test(emailVal)) {
    elements.emailError.textContent = '올바른 이메일 형식이 아닙니다.';
    isValid = false;
  }

  return isValid;
};

// 폼 제출 시 검증 실행
elements.contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // 기본 동작(페이지 새로고침) 방지
  if (validateForm()) {
    // 검증 통과 시만 다음 동작
    elements.formSuccessMsg.style.display = 'block';
  }
});
```

### 정규표현식(Regex)이란?

문자열의 패턴을 검사하는 특수 문법입니다. `/패턴/` 형식으로 사용합니다.

| 패턴 | 의미 | 예시 |
| :--- | :--- | :--- |
| `^` | 문자열 시작 | `^A` → A로 시작 |
| `$` | 문자열 끝 | `z$` → z로 끝 |
| `+` | 1개 이상 | `a+` → a, aa, aaa |
| `[^...]` | 괄호 안 문자 제외 | `[^\s@]` → 공백·@ 제외한 문자 |
| `\.` | 점(.) 그 자체 | `\.com` → .com |

---

## 웹 접근성 (ARIA) — 보조 기기를 위한 속성 {#aria}

### 웹 접근성이란?

시각 장애인, 운동 장애인 등 **보조 기기를 사용하는 사람도 웹을 사용**할 수 있게 만드는 것입니다.  
스크린 리더(화면을 소리로 읽어주는 프로그램)가 대표적인 보조 기기입니다.

---

### aria-label — 시각적 텍스트가 없는 요소에 설명 추가

아이콘만 있는 버튼은 스크린 리더가 무슨 버튼인지 알 수 없습니다.

```html
<!-- ❌ 스크린 리더: "버튼" 이라고만 읽음 -->
<button id="theme-toggle">
  <i class="fa-solid fa-moon"></i>
</button>

<!-- ✅ 스크린 리더: "테마 전환, 버튼" 이라고 읽음 -->
<button id="theme-toggle" aria-label="테마 전환">
  <i class="fa-solid fa-moon"></i>
</button>
```

---

### aria-expanded — 열림/닫힘 상태 알림

햄버거 메뉴처럼 열렸다 닫히는 요소의 현재 상태를 스크린 리더에게 알려줍니다.

```html
<!-- HTML에서 초기값 설정 -->
<button id="hamburger-btn" aria-expanded="false" aria-controls="nav-menu">
```

```javascript
// JS에서 상태가 바뀔 때마다 값 업데이트
const renderMenu = () => {
  const { isMenuOpen } = state;
  elements.hamburgerBtn.setAttribute('aria-expanded', isMenuOpen);
  // isMenuOpen이 true면 "true", false면 "false" 가 됨
};
```

스크린 리더 사용자가 듣는 내용:
- 닫혀있을 때: "메뉴 열기, 접혀 있음, 버튼"
- 열렸을 때: "메뉴 열기, 펼쳐져 있음, 버튼"

---

### role="alert" & aria-live — 동적으로 추가된 메시지 알림

처음부터 화면에 없다가 나중에 나타나는 에러 메시지는 스크린 리더가 자동으로 감지하지 못합니다.  
`role="alert"` 또는 `aria-live="assertive"`를 붙이면 내용이 생길 때 즉시 읽어줍니다.

```html
<!-- 에러 메시지: 내용이 생기면 스크린 리더가 즉시 읽어줌 -->
<span class="error-msg" id="email-error" role="alert" aria-live="assertive"></span>

<!-- 성공 메시지: 방해하지 않게 자연스럽게 읽어줌 -->
<div id="form-success-msg" role="status" aria-live="polite"></div>
```

`assertive` = 지금 하는 일을 멈추고 즉시 읽음 (에러처럼 중요한 것)  
`polite` = 현재 읽는 것이 끝난 뒤 읽음 (성공 메시지처럼 덜 급한 것)

---

### 스킵 링크 (Skip Link) — 키보드 사용자를 위한 단축키

키보드로만 웹을 탐색하는 사용자는 Tab 키로 링크/버튼을 하나씩 이동합니다.  
헤더의 모든 메뉴를 Tab으로 지나쳐야 본문에 도달하는 불편함을 없애주는 것이 스킵 링크입니다.

```html
<!-- body 맨 위에 배치, 평소에는 화면 밖에 숨겨두다가 Tab을 처음 누르면 나타남 -->
<a href="#main-content" class="skip-link">본문 바로가기</a>

<main id="main-content">
  <!-- 본문 내용 -->
</main>
```

```css
.skip-link {
  position: absolute;
  top: -100%;   /* 평소에는 화면 위 밖으로 숨김 */
}

.skip-link:focus {
  top: 1rem;    /* Tab 키로 포커스 받으면 화면에 나타남 */
}
```

---

### :focus-visible — 키보드 포커스 스타일

마우스 클릭 시에는 focus 윤곽선이 필요 없지만, 키보드 Tab 탐색 시에는 어디에 포커스가 있는지 보여야 합니다.  
`:focus-visible`은 **키보드 탐색 시에만** 포커스 스타일을 보여줍니다.

```css
/* outline: none 으로 전체 제거 후, 키보드 포커스에만 다시 적용 */
:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 3px;
}
```