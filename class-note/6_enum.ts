
// 숫자형 이넘, 숫자형에서 숫자를 지정하지 않으면 0 부터 1씩 증가 되는 값으로 초기화 된다.
// 숫자를 지정하면 이전 숫자의 +1 된 값이 다은 항목에 설정 된다.
enum Shoes { // enum 을 생성할때 값을 지정하지 않으면 기본으로 숫자형 이넘이 된다.
  Nike,
  Adidas
}

const myShoes = Shoes.Nike;
console.log(myShoes); // 0


// 문자형 이넘
enum Shoes1 {
  Nike = '나이키', 
  Adidas = '아디다스'
}

const myShoes1 = Shoes1.Adidas;
console.log(myShoes1); // '아디다스' 

// enum 활용 X
function askQuestion(answer: string) {
  if (answer === 'Y') {
    console.log('정답입니다.')
  }

  if (answer === 'N') {
    console.log('오답입니다.')
  }
}

// enum 을 사용하지 않으면  string 어떤 단어를 넣어도 에러가 발생하지 않는다.
askQuestion('Yes');
askQuestion('yes');
askQuestion('Y');


// enum 활용 O
enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion1(answer: Answer ) {
  if (answer === Answer.Yes) {
    console.log('정답입니다.')
  }

  if (answer === Answer.No) {
    console.log('오답입니다.');
  }
}

askQuestion1(Answer.Yes);
askQuestion1('Yes'); // enum 타입이 아닌 string값을 사용하는 경우 에러를 발생한다.
askQuestion1(Answer.No);
