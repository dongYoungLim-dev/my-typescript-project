// 타입 단언
let a;
a = 10; 
a = 'a';
let b = a as string;  // type script 에게 a의 타입은 string이라고 단언하는 코드


// DOM API 조작
let div = document.querySelector("#app") as HTMLDivElement // type script에게 내가 설정한 타입으로 고정 해줘 라고 알려주는 속성 
// 타입 추론 혹은 설정되어있는 타입을 사용하지 않고, 개발자가 단언한 타입으로 타입을 사용한다.
// dom api 사용하는 경우 사용하는 시점에 html이 존재가 없을 수 있기 때문에 개발자는 타입 단언을 통하여 타입을 정의한다.

