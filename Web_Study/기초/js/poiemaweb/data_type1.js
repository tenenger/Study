// 원시 타입(primitive data type)
boolean
null
undefined
number
string
symbol

// 객체 타입(object/reference type)
object

// 원시타입의 값은 변경 불가능한 값이다.
var integer = 10;
var double = 10.12
var nagative = -20;
var binary = 0b01000001;
var octal = 0o101;
var hex = 0x41;
// 위의 값은 자바스크립트에서 실수처리한다.

console.log(1 === 1.0); // true

// 추가적으로 3가지 특별한 값들도 표현가능하다.

var pInf = 10 / 0;
console.log(pInf);  // 양의 무한대가 출력된다.

var nInf = 10 / -0;
console.log(nInf);    // 음의 무한대가 출력된다.

var nan = 1 * 'string';
console.log(nan);   // NaN
