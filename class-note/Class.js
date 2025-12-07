function Person1(name, age) {
  this.name = name;
  this.age = age;
}

var seho1 = new Person1('세호1', 40);
console.log(seho1);

// 위 생성자 함수와 아래 class는 동일한 동작을 한다.
// 다만 class 문법을 사용하여 제공하게 된다. 

class Person {
  constructor(name, age) {
    console.log('생성되었습니다.')
    this.name = name;
    this.age = age;
  }
}
var seho = new Person('세호', 30);
console.log(seho);