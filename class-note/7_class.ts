// type script Class 문법
class Persion {
  // 접근 제한자
  private name: string; // type script 에서는 클래스를 생성하는 과정에서 사용하는 
  public age: number; // 변수를 선언하고 constructor에서 초기화 한다.

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

