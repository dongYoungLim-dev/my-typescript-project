var a = 10;

console.log(typeof(a)); // 타입 추론에 의해 a 의 타입은 number로 설정된다.


function getB(b: number): string { 
  // 타입 추론에 의해서 타입을 정의하지 않으면 전달되는 값을 typescript language server 가 확인하고 해당 타입으로 설정하는 방식을 타입 추론이라 하고
  // javascript 에서 number + string 을 계산하게 되면 타입 변환이 일어나 number -> string으로 변하게 되어
  // 10 + '10' 을 하게 되면 '1010' 이 된다.  
  let c = '10';
  return b + c; 
}

getB(10);




interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailDropdownItem<K> extends Dropdown<K> { 
  // interface 연장하여 사용했을때 연장하는 인터페이즈도 제네릭 타입을 선언했다면, 
  // 기본이 되는 인터페이지에 선언한 제네릭 타입으로 전달되는 타입을 확장하기 위해 연결한 인터페이스에 전달 할 수 있다.
  // 변수 : 인터페이스<타입> -> 인터페이스<타입> -> 확장 인터페이스<타입>  이렇게 전달이 가능하다.
  disctiption: K;
  name1: string;
}

let detailDropdownItem: DetailDropdownItem<string> = {
  title: 'age',
  name1: 'dk',
  value: 'aksd',
  disctiption: 'dkdk',
}


// Bast Common Type

let arr = [1, 2, false]; // typescript 에서 타입을 추론하는 알고리즘, 작성한 변수 처럼 여러 타입이 있다면 type script는 변수의 타입을 유니언 타입으러 정의하여 묶어 나간다.