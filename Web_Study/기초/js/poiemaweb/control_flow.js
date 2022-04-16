// 제어문은 주어진 조건에 따라 코드 블록을 실행하거나 반복 실행할때 사용한다.
// 코드는 위에서 아래방향으로 순차적으로 실행된다.

// 블록문은 0개 이상의 문들을 중괄호로 묶은 것으로 코드 블록 또는 블록이라 부른다.
// 문의 긑에는 세미콜론을 붙이지만 블록문은 안붙인다.

// 블록문
{
  var foo = 10;
  console.log(foo);
}

// 제어문
var x = 0;
while (x < 10) {
  x++;
}
console.log(x);

// 함수 선언문
function sum(x, y) {
  return x + y;
}
console.log(sum(1,2));

// 조건문은 주어진 조건식의 평가 결과에 따라 코드 블럭의 실행을 결정한다.
//if else문
var num = 2;
var kind;

if (num > 0) {
  kind = '양수';
}
else if (num == 0) {
  kind = '0';
}
else{
  kind = '음수';
}
console.log(kind);

// switch 문
// switch 문은 그 값과 일치하는 case문으로 실행 순서를 이동시킨다.
// case 문은 상황을 의미하는 표현식을 지정하고 콜론으로 마친다.
var month = 11;
var monthName;

switch(month) {
  case 1:
    monthName = 'January';
    break;
  case 2:
    monthName = 'February';
    break;
  case 3:
    monthName = 'March';
    break;
  case 4:
    monthName = 'April';
    break;
  case 5:
    monthName = 'May';
    break;
  case 6:
    monthName = 'June';
    break;
  case 7:
    monthName = 'July';
    break;
  case 8:
    monthName = 'August';
    break;
  case 9:
    monthName = 'September';
    break;
  case 10:
    monthName = 'October';
    break;
  case 11:
    monthName = 'November';
    break;
  case 12:
    monthName = 'December';
    break;
  default:
    monthName = 'Invalid month';
}
  console.log(monthName); // Invalid month

var year = 2000;
var month = 2;
var days = 0;

switch (month) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    days = 31;
    break;
  case 4: case 6: case 9: case 11:
    days = 30;
  case 2:
    days = (year % 4 === 0 && year % 100 !== 0) ||  (year % 4 === 0 && year % 400 === 0);
    break;
  default:
    console.log('Invalid month');
}

console.log(days);

// 반복문
// for 문
for (var i = 0; i < 10; i++){
  console.log(i);
}
// for 반복문에 아무것도 안적으면 무한루프가 된다.
for (;;) {}

// for 반복문안에 for 반복문을 중첩할 수 있다.
for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++){
    if (i + j === 6) {
      console.log('[${i}, ${j}]')
    }
  }
}
// $는 파이선의 f와 format함수 사용할때와 비슷하다.

// while 반복문
var count = 0;

while (count < 3) {
  console.log(count);
  count++;
}

// for 반복문처럼 무한루프가 가능하다.
while (true) {}

// 무한 루프를 빠져나올려면 break를 걸어서 나올 수 있다.
var count = 0;
while (true) {
  console.log(count);
  count++
  if (count > 10) {
    break;
  }
}

// do while 반복문
// while 반복문과 다르게 한번은 무조건 실행하고 조건이 들어간다는 차이점이 있다.
var count = 0;

do {
  console.log(count);
  count++;
} while (count < 3);

// break문
// break는 반복문, switch문 레이블 문 이외에 사용하면 문법에러가 발생한다.(syntaxError)
if (true) {
  break;
}// Uncaught SyntaxError: Illegal break statement

// 여기서 레이블 문이란 변수처럼 맨 앞에 식별자가 붙은것을 의미한다.
foo: console.log('HI');
console.log(foo);       // HI
// 레이블은 혼란을 야기할 수 있기에 잘 사용하지 않는다.

var string = 'Hello World';
var index;

for (var i = 0; i <string.length; i++){
  if (string[i] === l){
    index = i;
    break;
  }
}

console.log(index);
// 또는 밑의 코드로도 인덱스값을 얻을 수 있다.
console.log(string.indexOf('l'));

//continue 문
// 코드 블록 실행을 현지점에서 중단하고 반복문의 증감식으로 이동한다. break 문처럼 반복문을 탈출하지는 않는다.
var string = 'Hello World';
var count = 0;

for (var i = 0; i < string.length; i++){
  if (string[i] !== 'l') {
    continue;
    count++;
  }
}
console.log(count);
// 또는 밑의 코드로도 찾을 수 있다.
console.log(string.match(/l/gi).length);
//g : 완전일치(발생할 모든 pattern에 대한 전역 검색)
// i : 대/소문자 무시
// gi : 대/소문자 무시하고 완전 일치
