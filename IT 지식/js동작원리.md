# javascript 동작원리

## 브라우저 동작 원리

- 자바스크립트를 실행해줌
- stack

  - 작성한 코드 실행해주는 곳(특징: 하나)
  - javascript는 보통 single threaded

- 대기실
  - setTimeout은 stack에서 처리하지 않음
  - 처리가 오래 걸리는 것은 스택에서 빼놓고 나머지 먼저 처리
  - 따로 대기실에 보내는 코드들
    - Ajax 요청 코드
    - 이벤트 리스너
    - setTimeout
      - 0초라도 대기실 보냄
- queue
  - 대기가 끝난 코드들을 줄을 세움
  - 순서 대로 stack으로 보냄
  - stack이 비어있을 때만 올려보냄

## 주의할 점

- for 반복문 쓸 때 오랜시간 걸리는 걸 쓰면 stack에서 처리함에 따라 그 동안 버튼 클릭, ajax 요청 후 코드 실행, setTimeout 등이 작동 안되게 된다.

- stack, queue를 바쁘게 하면 안된다.
- 자바스크립트는 기본적으로 동기적으로 처리
  - setTimeout, 이벤트리스너, ajax를 쓰면 비동기적인 처리가 가능
