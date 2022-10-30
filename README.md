# 원티드 프리온보딩 프론트엔드 - Week 1-2

## 프로잭트 요약

### 기간: 22년 10월 29일 ~ 22년 10월 31일

### 기술 스택

<div align=left> 
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>   
  <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/><br/>
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"/>
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"/> <img src="https://img.shields.io/badge/react_router_dom-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"/> 
 <img src=" https://img.shields.io/badge/Octokit-007ACC?style=for-the-badge&logo=octokit&logoColor=white"/> 
</div>

## 실행 방법

⌨️1. src상단에 .env 파일을 생성합니다.

```javascript
  REACT_APP_TOKEN={사용자의 토큰을 입력}
```

2. 라이브러리를 설치합니다.

```
npm install
```

3. 프로젝트를 실행합니다.

```
 npm start
```

## 배포 링크

[배포링크 바로가기]

## 📦 디렉토리 구조

<details>
<summary> 구조</summary>
<div markdown="1">
```
🗂 src
 ┣ 📁 actions
	 ┣ issue.js
	 ┣ issues.js
   ┗ types.js
 ┣ 📁 components
 ┣ 📁 api
	 ┣ index.js
 ┣ 📂 context
	 ┣ IssueContext.js
	 ┣ IssuesContext.js
   ┗ IssuesContext.jsx
 ┣ 📂 pages
   ┣ Error404Pages.jsx
   ┣ Issues.jsx
   ┗ Issue.jsx
 ┣ 📂 hoc
   ┣ withCheckPageState.jsx
 ┣ 📂 hooks
   ┣ useGetContextState.js
 ┣ 📂 styles
   ┣ GlobalStyle.jsx
   ┗ common.js
 ┣ App.js
 ┣ index.js
 ┗ router.js
 ```
 </div>
</details>

## ✏️ 개선 부분

하루동안 함께 시행착오를 한 기록을 담았습니다!

두개 였던 API 하나로 사용한 이유 : 디테일로 들어가든 홈으로 가든 받아오는 List는 하나이기에 라우터 설정(리다이랙트)
무한 API 호출 문제 해결!! 상세 페이지에서 메인으로 가도 상태 그대로를 가지고 있다. 공통 헤더는 레이아웃을 하나 만들어쓰면 편하다.

무한 스크롤 쓰면서 성능을 신경썼다!? 그래서 배열이 아닌 객체 자료구조를 선택하여 만들었다. 만약 해당 id값을 넣어서 가진 객체를 찾아라라고 한다면 배열은 처음부터 끝까지 찾아야하지만 객체는 key만 넣어주면 바로 가져올 수 있다. 시간 복잡도 측면에서는 객체가 배열보다 유리하다.

네티워크 통신을 위해 오브젝트 사용(데이터베이스 역할?) (얕은 복사)-> 중복 제거, 시간 복잡도, 캐쉬, 성능 최적화
캐시를 하여 성능 최적화하였다.
배열로 데이터를 캐시를 한다면 중복이 발생 -> 따라서 오브젝트 사용

에러
상세페이지에서 리로딩 했을 경우, error-screen페이지가 나타남
해결

## ✏️ action-point 보러가기 [위키의 dev노트 보러가기 😗](https://github.com/wanted-freeOnBoarding-8/1-1_assignment/wiki/Dev-%EB%85%B8%ED%8A%B8)

## ✨ 주요 기능

<img width="500" src="https://user-images.githubusercontent.com/107469939/198880685-1069d460-fc6d-4192-9d05-7c6e7bba2cb0.JPG"/>

1. 이슈 목록 화면

- 이슈 목록 화면 기능 구현(이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수)
- open 상태의 이슈 중 코멘트 수가 많은 순으로 정렬
- Context API를 활용한 API 연동
- 다섯번째 셀에 광고 이미지 출력
  - 이미지 클릭 시 https://www.wanted.co.kr/ 로 이동
- 데이터 요청 중 로딩 표시
- 에러 화면 구현
- 반응형 웹 구현
- 공통 헤더 공유
  </br>

<img width="500" src="https://user-images.githubusercontent.com/107469939/198880655-01bff986-14c0-4096-922c-cc572e704580.JPG"/>

2. 이슈 상세 화면

- 이슈 상세 화면 기능 구현(이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문)
- Context API를 활용한 API 연동
- 데이터 요청 중 로딩 표시
- 에러 화면 구현
- 반응형 웹 구현
- 공통 헤더 공유

</br>

3. 기능 데모 영상

- 페이지 이동
  <img src="https://user-images.githubusercontent.com/93697790/198881444-74b5b296-3daf-463e-85b9-3a03c032b0a3.gif"
  width="600px">
  </br>

- 메인 페이지 반응형
  <img src="https://user-images.githubusercontent.com/93697790/198881506-9a40a5d4-73b9-43b5-81ee-73d34b8a8b77.gif"
  width="600px">
  <br>

- 무한스크롤 기능 구현
  <img src="https://user-images.githubusercontent.com/93697790/198881566-fd562e4b-5eb4-4587-b8f2-eeecf25cc93f.gif"
  width="600px">
  <br>

- 디테일 페이지 반응형
  <img src="https://user-images.githubusercontent.com/93697790/198881136-64855524-44ba-4715-96ca-8af369315e1b.gif"
  width="600px">
  <br>

- Detail 페이지에서 Home으로 가기
  <img src="https://user-images.githubusercontent.com/93697790/198881230-e3652277-8aef-4c47-a323-fd1dd48cc40a.gif"
  width="600px">
  <br>

- 404 페이지
  <img src="https://user-images.githubusercontent.com/93697790/198881263-e41a5046-1c6a-43d4-be62-dd7f21b1df36.gif"
  width="600px">
  <br>

- notFound 페이지
  <img src="https://user-images.githubusercontent.com/93697790/198881342-b03ad0e7-086a-48bd-a90a-c6cd595b1a3d.gif"
  width="600px">
  <br>
