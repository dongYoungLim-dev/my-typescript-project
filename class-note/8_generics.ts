function logText<T>(text: T): T {
  console.log(text);
  return text;
}

let a = logText<string>("test"); // 제네릭이란 함수를 호출하는 시점에 타입을 결정하게 된다.
let b = logText<number>(123);

a.toUpperCase(); // 함수를 호출하는 시점에 타입을 정의하기 때문에 string API 에서 제공 되는 메소드를 사용할 수 있다.
b.toString();

interface Dropdown<T> { // 인터페이스도 제네릭 타입을 정의 할 수 있고, 
  value: T;
  selected: boolean;
}


let obj: Dropdown<string> = { // 인터페이스 타입을 사용할때 타입을 전달하면 해당 타입을 인터페이스 내부에서 사용 가능하다.
  value: "test",
  selected: false
}


interface DropdownItem<T> { // 인터페이스에 제네릭 타입을 사용하면 중복되는 인터페이스 정의를 막고, 유지보수성을 높일 수 있다.
  value: T;
  selected: boolean;
}


const emails: DropdownItem<string>[] = [
  { value: "naver.com", selected: false },
  { value: "gmail.com", selected: true },
  { value: "kakao.com", selected: false }
]

const numberToProducts: DropdownItem<number>[] = [
  { value: 1, selected: false },
  { value: 2, selected: true },
  { value: 3, selected: false }
]

function createDropdownItem(item: DropdownItem<string> | DropdownItem<number>) {
  const option = document.createElement("option");
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// 제네릭 타입은 함수에 인자를 전달하는 방식 처럼 타입을 인자처럼 전달하여 전달된 타입을 사용하는 방식. 

// 제네릭 타입 제안 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

// 제네릭 타입 제안 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
// keyof 키워드를 사용하면 인터페이스로 정의한 타입의 키값 중 하나를 타입으로 사용할 수 있다.
function getShoppingItemOption<T extends keyof ShoppingItem>(item: T): T {
  return item;
}
getShoppingItemOption("name");

// `keyof` 키워드는 특정 타입 T의 모든 공용 프로퍼티 이름(키)들의 문자열 또는 심볼 리터럴 유니온 타입을 생성합니다.
// 예를 들어, `ShoppingItem` 타입에 `keyof`를 적용하면 `"name" | "price" | "stock"` 타입이 됩니다.
// 이는 단순히 문자열이 아니라, 해당 타입의 실제 존재하는 키들로 이루어진 구체적인 타입입니다.

// 이 함수는 어떤 객체(T)와 그 객체의 키(K)를 받아서, 해당 키에 해당하는 값을 반환합니다.
// 제네릭 `T`는 객체의 타입을 나타내고, `K`는 `T`의 키 타입을 나타냅니다.
// `K extends keyof T`는 K가 반드시 T 타입의 키 중 하나여야 함을 강제합니다.
// 이렇게 함으로써, 존재하지 않는 키를 전달하는 실수를 컴파일 시점에 방지할 수 있습니다.
// 예를 들어, `getShoppingItemOption("invalidKey")`와 같이 잘못된 키를 사용하면 타입 에러가 발생합니다.
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  // `T[K]`는 인덱스드 액세스 타입(Indexed Access Type)으로,
  // `T` 타입에서 `K` 키에 해당하는 값의 타입을 의미합니다.
  // 예를 들어, `T`가 `ShoppingItem`이고 `K`가 `"name"`이면 `T[K]`는 `string` 타입이 됩니다.
  // 이를 통해 함수의 반환 타입이 매우 구체적이고 타입 안전하게 정의됩니다.
  // 즉, `getProperty(myItem, "name")`의 결과는 `string` 타입으로 추론되고,
  // `getProperty(myItem, "price")`의 결과는 `number` 타입으로 추론됩니다.
  return obj[key];
}

const myItem: ShoppingItem = {
  name: "Keyboard",
  price: 80,
  stock: 100,
};

// `getProperty` 함수를 사용할 때, 두 번째 인자(`key`)는 첫 번째 인자(`obj`)의 키 중에서만 선택할 수 있도록 타입 체크가 됩니다.
const itemName = getProperty(myItem, "name"); // itemName의 타입은 string
const itemPrice = getProperty(myItem, "price"); // itemPrice의 타입은 number
// const itemInvalid = getProperty(myItem, "invalidKey"); // 컴파일 에러 발생: "'invalidKey'는 'ShoppingItem'의 속성이 아닙니다."

// `keyof`는 주로 다음과 같은 상황에서 유용하게 사용됩니다:
// 1. 객체의 프로퍼티 이름을 안전하게 참조하거나 접근하는 함수를 만들 때 (위의 `getProperty` 예시처럼).
// 2. 객체의 특정 프로퍼티를 인자로 받는 함수를 만들 때, 해당 프로퍼티가 해당 객체에 실제로 존재하는지 보장할 때.
// 3. 특정 인터페이스의 키들을 기반으로 새로운 타입을 정의하거나, 유니온 타입을 생성할 때.
