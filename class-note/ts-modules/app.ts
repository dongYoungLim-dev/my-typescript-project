import { Todo } from './types' // 해당 경로 파일에 정의한 Todo interface 를 import로 가져 와서 해당 파일 내부에서 사용 이런 방식을 modules 방식이라고 한다. export, import 키워드를 사용한다. 

let item: Todo = {
  title: '할 일 1',
  checked: false,
}