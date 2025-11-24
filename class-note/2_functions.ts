function sum1(a: number, b: number): number {
	return a + b
}


let result1 = sum1(20, 10);


// typescript를 사용하면 함수의 인자의 개수를 제한하고, 선언안 인자의 수 만큼만 받을 수 있다.
// js 

/** 
 * js
 * 
 * function a1(a, b) {
 * 	return a + b
 * }
 * 
 * a1(1, 2, 3, 4) 선언한 인자보다 많은 인자를 전달 해도 에러가 발생하지 않는다.
 * 
*/

function a2(a: number, b: number): number {
	return a + b;
}

a2(1, 2, 3,);  // ts에서 선언한 인자보다 많은 인자를 전달 하면, 에러가 발생한다.






function a3(a: number, b?: number): number {
	return b ? a + b : a
}



a3(1, 2);
a3(1); // ?를 사용한 인자는 옵셔널한 인자로 필수로 전달 하지 않아도 에러가 발생하지 않는다. 

