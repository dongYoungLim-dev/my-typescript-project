function logMassage(value: string | number) { // 유니언 타입 정의, string or number 만 허용 한다는 의미
  console.log(value);

  if (typeof value === 'number') {
    value.toLocaleString() // 타입 겁사를 통해 미리 변수에 할당되는 값을 추론하여 type api가 제공하는 속성들을 vscode 가 제공 해준다.
  }
  if (typeof value === 'string') {
    value.toString() 
  }

  // 지정한 타입외 다른 타입이 들어오면 그에 대한 에러 메시지를 출력 할 수 있다.
  throw new TypeError('value의 타입은 number 또는 string 만 입력 가능합니다.')
}

logMassage(100); // number 전달 
logMassage('문자열'); // string 전달


interface Developer1 {
  name: string;
  skill: string;
}

interface Person1 {
  name: string;
  age: number;
}


function askSomeone(someone: Developer1 | Person1) {
  someone.name // 인터페이스의 Union type은 각 속성의 교집합 되는 부분만 접근이 가능하고 나머지는 속성은 타입 가드상태로 접근이 안된다.
  someone.age
  someone.skill
}