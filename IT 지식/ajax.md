# AJAX(Asynchronous JavaScript And XML)

- 서버와 비동기적으로 데이터 주고 받는 자바스크립트 기술

## 서버

- 데이터 요구하면 데이터 보내주는 프로그램
- 서버한테 데이터를 요구할 때 특정한 양식이 필요하다
  - 원하는 데이터 URL
  - 해당 URL로 GET 요청
    - 브라우저에 해당 URL 직접 입력
    - 버튼으로 GET 요청
    - AJAX로 GET 요청
      - 새로고침 없이 서버에게 GET요청하는 JS코드

## AJAX의 장점

- 새로고침이 없으니 웹페이지 전환이 부드러워짐

## JavaScript로 AJAX GET요청 방법

- 과거 방식

```javascript
var ajax = new XMLHttpRequest();
ajax.onreadystatechange = function () {
  if (this.readystate == 4 && this.status == 200) {
    console.log(ajax.responseText);
  }
};
ajax.open("GET", "https://codingapple1.github.io/price.json", true);
ajax.send();
```

- 최신 방식

```javascript
fetch("https://codingapple1.github.io/price.json")
  .then((respons) => {
    if (!response.ok) {
      throw new Error("400 아니면 500 에러남");
    }
    return response.json();
  })
  .then((결과) => {
    console.log(결과);
  })
  .catch(() => {
    console.log("에러남");
  });
```
