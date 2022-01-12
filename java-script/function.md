# function

## function

- 계속 반복해서 사용할 수 있는 코드 조각
- 코드를 캡슐화해서 실행을 여러번 하게 해줌

> function 작성방법

```js
function sayHello(){
    const.log("Hello my name is");
}
```

> function 실행방법

- nameOfFunc()
- () : 실행한다는 뜻

> argument(인수)

- function에게 어떤 정보를 보내는 방법
- 예) sayHello("argument");
- ()안에 보내고 싶은 데이터를 적으면 된다.

> function이 데이터를 받는 방법

- function sayHello(variable)
- 예) sayHello("john");이라고 입력하면 john이라는 데이터가 variable로 간다

> return

- function 안에서 무언가를 return하면 누군가가 function을 실행할 때 그것을 대체한다.

```js
const weight = 50;
function gainWeight(weightOfPerson) {
  return weightOfPerson + 2;
}

const ww = gainWeight(weight);

console.log(ww);
```

: 실행결과 = 52
