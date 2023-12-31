![paikdabang](https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/121606131/8fce2deb-4f1b-4dc2-9a05-c47de0501ecd)

# 🥤빽다방 홈페이지 클론코딩

빽다방 홈페이지를 HTML, CSS, Javascript를 사용하여 클론코딩한 개인 프로젝트

### 사이트 주소

배포 주소: https://jihongkyu.github.io/Paikdabang_CloneCoding

원본 주소: https://paikdabang.com

#

# 📆 제작 기간

### 2023년 07월 24일 ~ 2023년 07월 28일

# 📌필수요구 사항

✅ 과제에 대한 설명을 포함한 README.md 파일을 제공

✅ 과제 결과와 비교할 수 있는 실제 사이트(페이지)의 주소를 명시

✅ 과정에서 사용한 프로젝트 폴더/파일이 모두 포함

✅ 실제 서비스로 배포하고 접근 가능한 링크를 추가

# 🚀 기술스택

### 개발 환경

<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

### 사용 언어

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

# 📝 기능 구현

- HEADER

  - `position: sticky`를 사용하여 스크롤 시 상단에 고정
  - navbar 호버 시 submenu에 `display:flex` 적용

    ![header-PR](https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/121606131/df518f6f-7d80-44b5-8a3d-4082f7c6584a)

- CAROUSEL

  - ul태그를 가로 정렬한 후 캐러셀 이동버튼 클릭 시 브라우저 가로 길이를 ul태그에서 빼서 캐러셀 구현

    ![carousel-PR](https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/121606131/b865d29a-6e24-416e-bde1-71e90685ba80)

- SECTION

  - section 호버 시 `transform: scale` 을 사용하여 이미지 크기만 증가
  - viewBtn 호버 시 `+`버튼에서 360도 돌면서 백종원 이미지로 변경

    ![section-PR](https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/121606131/ce7421a6-d533-4dc3-931e-e5856cc21602)

- FOOTER - familySite

  - `classList.toggle` 을 이용하여 familySite 클릭 시 familyMenu에 active 클래스 토글 -> `display:none`에서 `display: block`으로 바뀜

    ![footer-PR](https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/121606131/55c5b71b-fb64-4984-ba0f-c32546c370fd)

# ✍ 개선 사항

- 반응형 레이아웃 적용
- ~~캐러셀 이동 후 브라우저 창의 크기가 변하면 레이아웃이 깨짐~~ -> `window.onresize`를 사용해 브라우저 창의 크기가 변할 때마다 캐러셀 크기 조정 & Debounce를 통해 마지막 이벤트만 실행시켜서 성능 문제 개선
- SCSS를 적용시켜서 다시 제작해보기
