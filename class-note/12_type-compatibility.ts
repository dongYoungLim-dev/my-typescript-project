// 타입 호환


interface TestDeveloper {
  testSkill: string;
  testName: string;
}


interface TestPerson {
  testName: string;
}

let testDeveloper: TestDeveloper;
let testPerson: TestPerson;

testDeveloper = testPerson; // 구조적으로 작은 타입을 구조가 큰 타입과는 호환이 되지 않는다.
testPerson = testDeveloper; // 구조적으로 큰 타입은 구조가 작은 타입과 호환이 된다.

// 함수 호환
let add = (a: number) => {
  // ...
}


let  sum = (a: number, b: number) => {
  // ...
}

add = sum; // 구조가 작은 add 함수에 구조가 큰 sum 함수를 넣으려고 하면 호환이 되지 않고, 
sum = add; // 구조가 큰 sum 함수에 구조가 작은 add 함수를 넣으려고 하면 호환이 된다. 판단 할 수 있다.

// 제네릭 호환
interface Empty<T> {
}

let empty1: Empty<string>;
let empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1; // 인자로 전달된 함수가 내부 속성에 할당이 되었는지 판단하여 호환 여부를 판단. Empty는 내부 속성에 할당되지 않았기 때문에 호환 가능

interface NotEmpty<T> {
  data: T;
}

let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;


notempty1 = notempty2;
notempty2 = notempry1; // NotEmpty 인터페이스는 전달되는 타입인자를 내부 속성에 할당하고 있기때문에 호환 불가능하다. 