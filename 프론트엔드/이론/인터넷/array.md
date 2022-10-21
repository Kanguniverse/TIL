# array

## array란?

- 배열은 값의 집합
- 배열은 값의 순서 있는 집합이다

## array 선언

```javascript
// To make an empty array
let students = [];
```

## array methods

- push : add to end
  - 반환값은 새로 추가된 배열의 길이값을 반환

```javascript
movieLine = ["tom", "nancy", "pablo", "oliver", "eva"];
movieLine.push("harry");
```

- pop : remove from end
  - 반환 값은 pop된 값을 반환

```javascript
movieLine = ["tom", "nancy", "pablo", "oliver", "eva"];
movieLine.pop();
```

- shift : remove from start
  - 반환 값은 shift된 값을 반환
- unshift : add to start
  - 반환 값은 새로 추가된 배열의 길이값을 반환

## array other methods

- concat : 두 배열을 붙여줌
- include : 한 요소가 배열 안에 있는지 없는지 여부 파악
  - 반환 값은 있으면 true, 없으면 false
- indexOf :한 요소가 배열안에 있는 지 없는지 파악
  - 반환 값 : 있으면 해당 요소의 인덱스, 없으면 -1
- reverse : 배열을 뒤집어 버림
  - 원본을 뒤집어서 줌
- slice
- splice
- sort
