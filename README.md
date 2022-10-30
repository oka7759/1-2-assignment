# 원티드 프리온보딩 프론트엔드 - Week 1-2 
	
## 10팀 맴버 구성

<br/>

<div align=center>
	
| <img src="https://avatars.githubusercontent.com/u/26901045?v=4" width="130" height="130" />  | <img src="https://avatars.githubusercontent.com/u/105492051?v=4" width="130" height="130" /> | <img src="https://avatars.githubusercontent.com/u/92094314?v=4" width="130" height="130"/> | <img src="https://avatars.githubusercontent.com/u/101456751?v=4" width="130" height="130"/> |
| :-----------------------------------------------------------------------------------------:  | :-----------------------------------------------------------------------------------------:  | :----------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------:  |
|                                    :full_moon: 오지수                                         |                                :last_quarter_moon: 정억화                                    |                                           송완준                                            |                                            김미성                                            |
|                [:globe_with_meridians:silviaoh](https://github.com/silviaoh)                 |                 [:globe_with_meridians:oka7759](https://github.com/oka7759)                  |            [:globe_with_meridians:natural-nine](https://github.com/natural-nine)           |                  [:globe_with_meridians:kimitt](https://github.com/kimitt)                  |

| <img src="https://avatars.githubusercontent.com/u/83964261?v=4" width="130" height="130" /> | <img src="https://avatars.githubusercontent.com/u/103277726?v=4" width="130" height="130" /> | <img src="https://avatars.githubusercontent.com/u/93189402?v=4"  width="130" height="130" /> | <img src="https://avatars.githubusercontent.com/u/109638284?v=4" width="130" height="130"/> |
| :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------:  | :------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------:  |
|                                           이학성                                             |                                           김숙영                                             |                                            김인표                                             |                                           박민규                                             |
|             [:globe_with_meridians:Hakseong-Lee](https://github.com/Hakseong-Lee)           |                [:globe_with_meridians:Maiowol](https://github.com/Maiowol)                   |                    [:globe_with_meridians:kiminpyo](https://github.com/kiminpyo)             |             [:globe_with_meridians:kyle970320](https://github.com/kyle970320)               |

</div>

<br/>

## 프로젝트 요약

### 📆 기간

#### 22년 10월 29일 ~ 22년 10월 31일

### 🔧 기술 스택

<div align=center> 
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>   
  <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/><br/>
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"/>
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"/> <img src="https://img.shields.io/badge/react_router_dom-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"/> 
 <img src=" https://img.shields.io/badge/Octokit-007ACC?style=for-the-badge&logo=octokit&logoColor=white"/> 
</div>

### 💻 실행 방법

 1. src상단에 .env 파일을 생성합니다.

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

<br/> 

### 배포 링크

[배포링크 바로가기](www.naver.com)

<br/> 

## 프로젝트 설명

### 📂 디렉토리 구조

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

### ⚙️ 구현기능

1.  공통헤더

```
organization name 과 repository name이 포함된 헤더가 모든 페이지의 상단에 위치해 있도록 구현
```

2.  GitHub 이슈 목록 화면

```
- 데이터 찾지 못할 시 Error Page 구현
- 데이터 요청 중 Loading 기능 구현
- Context API를 활용하여 GitHub 이슈 리스트를 저장하고 무한 스크롤 구현
- GitHub 이슈 목록 open 상태일 때 코멘트가 많은 순으로 정렬
```

3.  Github 이슈 상세 화면

```
- 이슈 상세 내용 표시 - 이슈 번호, 이슈 제목, 작성자, 작성일, 코멘트 수 표시
```

<br/>

### 10팀의 Best Practice 선정 내용

<br/>

### 📝 Meeting Log

[회의록 바로가기](https://www.notion.so/Meeting-log-3eff6566fd844052b7a98702ebab8c5b?p=1e14e81a8e4a4deda8d067c61beb76ab&pm=s)
