// 타입 변환이란
// 자바스크립트가 자동으로 타입을 변환하는거 이외에 개발자에 의해 의도적으로 타입을 변환하는 것을 명시적 타입변환 또는 타입 캐스팅 이라고 한다.
var x = 10;

// 명시적 타입 변환
var str = x.toString();
console.log(typeof str)   // string

// 자바스크립트가 자동으로 타입을 변환하는 것을 암묵적 타입 변환 또는 타입 강제 변환 이라고 한다.
var x = 10;

// 암묵적 타입변환
// 숫자 타입 x의 값을 바탕으로 새로운 문자열 타입의 값을 생성해 표현식을 평가한다.
var str = x + '';
console.log(typeof str, str);   //string 10

// 표현식이 모두 문자열 타입이여야 하는 컨텍스트
'10' + 2      // 102

// 표현식이 모두 숫자 타입이여야 하는 컨텍스트
5 * '10'      // 50

// 표현식이 불리언 타입이여야 하는 컨텍스트
!0            // true

// 문자열 타입으로 변환
// (10).toString(), 10 +''을 하면 문자열 타입으로 변환이 된다.

// 숫자 타입으로 변환
// 앞에 +를 붙이면 된다.

// 불리언 타입으로 변환
if ('') {}
// 위의 코드처럼 알어서 변환된다.

// 문자열이 아닌 값을 문자열 타입으로 변환
// String()함수를 이용, toString() 메소드를 이용, ''문자열 붙이기
console.log(String(1));  // "1"
console.log((NaN)toString()); // "NaN"
console.log(10 + '')      // "10"

// 숫자 타입으로 변환
// Number()함수를 이용, parseInt() 또는 parseFloat()함수를 이용, +를 앞에붙이기, *를 이용해 숫자로 만들기
console.log(Number('0'));     // 0
console.log(parseInt('0'))    // 0
console.log(+'-1')            // -1
console.log(5 * '10')         // 50

// 불리언 타입으로 변환
// Boolean()함수를 이용, !!사용
console.log(Boolean('x'))     // true
console.log(!!0);             // false

// 단축 평가
'Cat' && 'Dog'                // Dog
// &&는 true인지 확인하는 것이고 마지막 평가를 Dog에서 마쳤으니 Dog가 출력된다.
true || anything	//true
false || anything	//anything
true && anything	//anything
false && anything	//false

// 이를 활용해 문자가 입력되지 않았을때 발생하는 에러를 방지할 수 있다.
function getStringLength(str) {
  str = str || '';
  return str.length;
}

getStringLength();     // 0
getStringLength('hi'); // 2
