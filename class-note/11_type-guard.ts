// 타입 가드
interface Developer {
  name: string,
  skill: string,
}

interface Person {
  name: string,
  age: number,
}

function introduce(): Developer | Person {
  return { name: 'age', age: 20, skill: 'figma'}
}

let tony = introduce();

console.log(tony.skill); // 유니언 타입을 사용하여 타입을 정의했기 때문에 공통으로 존해하는 내용만 사용가능하다.
// 이 경우 skill을 가져오게 하기 위해서 타입 단언을 사용할 수 있지만 복잡하기 때문에 타입 가드 기술을 사용한다.


// 타입 단언을 이용하는 방법
// 타입 단언을 중복으로 이용하게 되는 좋지 않은 모양이 된다.
if ((tony as Developer).skill) {
  let skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  let age = (tony as Person).age;
  console.log(age);
}


// 타입 가드를 이용하는 방법
function isDeveloper(target: Developer | Person): target is Developer {
  // 반환 타입을 target is Developer 를 사용하여 return 값이 true 혹은 false 이냐에 따라 type script에게 true 면 Developer 타입으로 취급해 라고 이야기 하는 것과 같음
  return (target as Developer).skill !== undefined; // true / false 반환
  // 타입 단언을 이용하여 속성이 있는지를 판단하여 boolean 값을 반환
}

if(isDeveloper(tony)) {
  console.log(tony.skill); // isDeveloper 함수에서 반환된 값이 true 면 타입이 Developer라는 소리이고 따라서 skill 에 접근이 가능하다.
} else {
  console.log(tony.age); // isDeveloper 함수가 false를 반환하면 타입은 Person리고, 따라서 age에 접근이 가능하다.
}
