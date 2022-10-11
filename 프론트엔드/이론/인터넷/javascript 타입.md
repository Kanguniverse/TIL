# javascript 타입

## 원시 타입

- Number
  - 자바스크립트에서는 숫자 타입이 하나만 있다.
  - 양수, 음수, 소수를 다 포함한다.
  - 지수연산자 \*\*
  - NaN: Not a Number
    - 0/0 // NaN
    - 1+NaN //NaN
    - 숫자가 아닌 NaN으로 계산 하면 NaN이 나옴
- String
- Boolean
  - true(참) / false(거짓) 로 사용됌
- Null
- Undefined

## 변수 명명과 규칙

- 변수명을 지을 때 카멜케이스로 짓는다.
  - 한 단어 이상을 쓸 때 변수의 첫 단어를 제외한 각 단어의 첫 문자를 대문자로 쓴다.
  - 예시 : `let currentDate`
- 변수명을 잘 지어야 된다.
  - 변수명이 짧기보다는 의미 있는 변수 이름을 쓰는 편이 항상 더 낫다
  - 불리언 변수에는 is를 사용하는 걸 추천
    - 예시 : `let isGameOver = true`
