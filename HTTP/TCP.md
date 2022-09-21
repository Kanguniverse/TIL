# TCP

### TCP 뜻

- TCP : 전송 제어 프로토콜

### TCP 특징

1. 연결지향 - TCP 3 way handshake(가상연결)

   1. 클라이언트에서 서버로 SYN(접속요청) 메세지를 보낸다.

   2. 서버에 전달되면 서버는 클라이언트에게 SYN과 ACK(요청 수락) 메세지를 보낸다.

   3. 클라이언트에게 전달되면 ACK를 서버에게 보낸다.

   4. 보내고자하는 데이터를 전송한다.(요즘은 3번에 함께 데이터를 보낸다.)

2. 데이터 전달 보증

   - 데이터 전송 완료 후 데이터 잘 받았다는 메세지를 받는다.

3. 순서 보장

   - 순서 잘못 도착 시 정보 재요청

- 신뢰 할 수 있는 프로토콜

- 현재는 대부분 TCP 사용

## TCP의 단점

- 전송 속도가 느리고, 크기가 크다.