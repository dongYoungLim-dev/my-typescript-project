// js
var str = 'hello'; // js string type


// ts
let str1: string = 'hello'; // ts string type
let num: number = 1; // ts number type

// ts 배열
let arr: Array<number> = [1, 2, 3]; // number만 허용되는 배열 타입
let items: number[] = [1, 2, 3,] // number만 허용되는 배열 타입 

let arr2: Array<string> = ['1', '2', '3']; //string만 허용되는 배열 타입,
let arr3: string[] = ['1', '2', '3'] // string만 허용되는 배역 타입


// ts 튜플
let address: [string, number] = ['gangnam', 100];


// ts 객체
let obj: object = {};

let person: { name:string, age: number } = {
	name: 'thor',
	age: 1000
}

// ts 진위값
let lsShow: boolean = true;