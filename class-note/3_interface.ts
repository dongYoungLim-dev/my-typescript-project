interface User {
  name: string;
  age: number;
}

// 변수에 인터페이스 활용 - 인터페이스로 정의한 필수속성을 반드시 모두 사용하여 변수에 할당 해야 한다.
var seho: User = {
  name: 'seho',
  age: 22
}



// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}

const capt = {
  name: 'capt',
  age: 21
}
const capt2 = {
  name: 'capt2'
}
getUser(capt); // name, age 속성이 모두 있는 변수를 인자로 넘기는 경우 에러 X
getUser(capt2); // name 속성만있는 객체를 인자로 넘기면 에러 발생



// 함수의 구조를 정의하는 인터페이스
interface SumFunction {
  (a: number, b: number): number // 함수의 기본적인 모양을 정의하여 약속하여 사용.
}

let sum: SumFunction;
sum = function(a: number, b: number): number {
  return a + b
}

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: 'js file' // 정규 표현식만 사용이 가능하고 다른 속성은 사용이 불가능 하다.
}

// 인터페이스 확장
interface Person {
   name: string;
   age: number;
}

interface Developer extends Person {
  language: string;
}

let captain: Developer = { // Developer 인터페이스가 Person 인테페이스의 속성을 상속 받아 확장하여 사용
  language: 'ts',
  age: 100,
  name: '캡틴'
}

