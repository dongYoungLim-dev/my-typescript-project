interface interfacePerson {
  name: string;
  age: number;
}

type typePerson = {
  name: string;
  age: number;
}


var seho: interfacePerson = { // 정의한 인터페이스를 가르키게 된다 ctrl 누른채 마우스를 올리면 인터페이스의 정의를 볼 수 있다.
  name: '세호',
  age: 20
}

var seho1: typePerson = { // 타입별칭은 확장이 불가능 하다.
  name: '세로',
  age: 21
}


// 타입별칭을 사용하면 타입의 모양을 바로 확인 가능하고, 인터페이스를 사용하였을 경우 인터페이스의 구조를 바로 알 수 없다. 
// ?최신 버전의 typescript 에서는 타입별칭도 확장이 가능하다.