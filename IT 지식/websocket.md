# Websocket

## 서버와 유저가 데이터 주고 받는 방식

- http 요청
  - 유저가 데이터를 요청하는 서버가 데이터를 주는 방식
  - 서버가 먼저 데이터를 건네주는 것은 없다
  - 요청 종류
    - 읽기(GET)
    - 쓰기(POST)
      - 댓글 작성
      - 블로그 포스트 작성
    - 수정(PUT)
    - 삭제(DELETE)
- Websocket

  - TCP 연결 기반 양방향 통신가능
  - Websocket 연결방법
    1. 일단 유저가 http 요청(웹소켓)
    2. 서버가 받아들이면 웹소켓으로 업그레이드
