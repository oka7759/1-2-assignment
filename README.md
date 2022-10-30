# 원티드 프리온보딩 프론트엔드 - Week 1-2

원티드 프리온보딩 **프론트엔드 8팀**의 ```팔팔한 형제들```입니다.<br>

## 📅 프로젝트 기간

기간 : 2022년 10월 29일 ~ 2022년 10월 31일

## 팔팔한 형제들 팀 소개
### FE
<table>
  <tr>
    <td>
        <a href="https://github.com/CodyMan0">            
	    <img src="https://avatars.githubusercontent.com/u/93697790?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/shimeeuisuk">
            <img src="https://avatars.githubusercontent.com/u/104304569?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/jangth0655"> 
            <img src="https://avatars.githubusercontent.com/u/83333409?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/choi2021">
	    <img src="https://avatars.githubusercontent.com/u/80830981?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/strongsongky">
	    <img src="https://avatars.githubusercontent.com/u/102295416?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/KellyPark96">
	    <img src="https://avatars.githubusercontent.com/u/96809147?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/gywn9708">
	    <img src="https://avatars.githubusercontent.com/u/107469939?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/YongHyunKwon">
	    <img src="https://avatars.githubusercontent.com/u/13326980?v=4" width="100px" />
        </a>
    </td>
  </tr>
  <tr>
    <td><b>이주영(팀장)</b></td>
    <td><b>심의석(부팀장)</b></td>
    <td><b>장태희</b></td>
    <td><b>최영준</b></td>
    <td><b>송경용(공지)</b></td>
    <td><b>박경은(서기)</b></td>
    <td><b>강효주</b></td>
    <td><b>권용현</b></td>
  </tr>
  <tr>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
  </tr>
</table>


## 🛠 기술 스택

<div align=left> 
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> 
  <br>
  
  <img src="https://img.shields.io/badge/vs_code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
  <img src="https://img.shields.io/badge/react_router_dom-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
  <br>
  
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white">
  <br>
</div>




## 🏁 프로젝트 실행 방법

1. root폴더에 .env 파일을 생성합니다.
```
  REACT_APP_TOKEN={자신의 github에서 Developer-setting 에서 발행한 access-token 사용}
```
2. 의존성 패키지를 설치합니다.
```zsh
$ npm install
```
3. 리눅스와 윈도우 husky 충돌 방지 후 사용을 위해 설치합니다. 
```zsh
$ chmod ug+x .husky/* 
```
4. 프로젝트를 실행합니다.
```zsh
$ npm start
```


## 🔗 위키 링크

[위키 링크 보러가기](https://github.com/wanted-freeOnBoarding-8/1-1_assignment/wiki)
- 저희들의 코드컨벤션, 커밋메시지컨벤션, 1주차 1차 프로젝트를 통해 토론한 Action-Point를 정리해두었습니다.😁


## 🔗 배포 링크

[베포 링크 보러가기]()

- 해당 프로젝트는 를 AWS S3통해 배포하였습니다.



## 📦 디렉토리 구조

<details>
<summary> 구조</summary>
<div markdown="1">

```
📦src
 ┣ 📂components
 ┃ ┃ ┣ 📂issueItem
 ┃ ┃ ┃ ┣ 📜IssueItem.jsx
 ┃ ┃ ┃ ┗  📜style.js
 ┃ ┃ ┣ 📂AdBox
 ┃ ┃ ┃ ┣ 📜AbBox.jsx
 ┃ ┃ ┃ ┗  📜style.js
 ┃ ┃ ┣ 📂errorContent
 ┃ ┃ ┃ ┣ 📜ErrorContent.jsx
 ┃ ┃ ┃ ┗  📜style.js
 ┃ ┃ ┣ 📂header
 ┃ ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┃ ┗  📜style.js
 ┃ ┃ ┣ 📂issueContent
 ┃ ┃ ┃ ┣ 📜IssueContent.jsx
 ┃ ┃ ┃ ┗  📜style.js
 ┃ ┃ ┣ 📂issueList
 ┃ ┃ ┃ ┣ 📜IssueList.jsx
 ┃ ┃ ┃ ┗  📜style.js
 ┃ ┃ ┣ 📂layout
 ┃ ┃ ┃ ┣ 📜Layout.jsx
 ┃ ┃ ┃ ┗  📜style.js
 ┃ ┃ ┣ 📂loader
 ┃ ┃ ┃ ┣ 📜Loader.jsx
 ┃ ┃ ┃ ┗  📜style.js
 ┣ 📂context
 ┃ ┗ 📜ListContext.jsx
 ┣ 📂hooks
 ┃ ┣ 📜useFetch.jsx
 ┃ ┗ 📜useObservation.jsx
 ┣ 📂network
 ┃ ┗ 📜httpError.js
 ┣ 📂context
 ┃ ┗ 📜LoginContext.jsx
 ┣ 📂page
 ┃ ┃ ┣ 📂Notfound
 ┃ ┃ ┃ ┣ 📜Notfound.jsx
 ┃ ┃ ┃ ┗ 📜styles.js
 ┃ ┣ 📜Detail.jsx
 ┃ ┗ 📜Home.jsx
 ┣ 📂style
 ┃ ┗ 📜GlobalStyle.js
 ┣ 📜App.js
 ┣ 📜index.js
 ┗ 📜router.js
  ```
</div>
</details>



## 👍 Best Practice 선정 이유

- 



## ✏️ 개선 부분

 하루동안 함께 시행착오를 한 기록을 담았습니다!
 
두개 였던 API 하나로 사용한 이유 : 디테일로 들어가든 홈으로 가든 받아오는 List는 하나이기에 라우터 설정(리다이랙트)
무한 API 호출 문제 해결!!  상세 페이지에서 메인으로 가도 상태 그대로를 가지고 있다. 공통 헤더는 레이아웃을 하나 만들어쓰면 편하다. 

무한 스크롤 쓰면서 성능을 신경썼다!? 그래서 배열이 아닌 객체 자료구조를 선택하여 만들었다. 만약 해당 id값을 넣어서 가진 객체를 찾아라라고 한다면 배열은 처음부터 끝까지 찾아야하지만 객체는 key만 넣어주면 바로 가져올 수 있다. 시간 복잡도 측면에서는 객체가 배열보다 유리하다. 

네티워크 통신을 위해 오브젝트 사용(데이터베이스 역할?)  (얕은 복사)-> 중복 제거,  시간 복잡도, 캐쉬, 성능 최적화
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

















