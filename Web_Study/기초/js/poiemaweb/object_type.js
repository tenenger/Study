// 객체는 데이터와 그 데이터에 관련한 동작을 모두 포함할 수 있는 개념적 존재이다.
// 이름과 값을 가지는 데이터를 의미하는 프로퍼티와 동작을 의미하는 메소드를 포함할 수 있는 독립적 주체이다.

// 변수는 var let const 키워드를 사용하여 선언하고 할당 연산자를 사용해 값을 할당한다.

var score;    // 변수의 선언
score = 80;   // 값의 할당
score = 90;   // 값의 재할당
score;        // 변수의 참조

// 변수의 선언과 할당
var average = (50 + 100) / 2;

// 변수의 선언, 변수를 이용하면 코드의 가동성 UP!
var circleArea = 3.141592653589793 * 2 * 2;
var cylinderVolume = circleArea * 5;
// 원주율은 Math.PI로 얻을 수 있다.

var PI = 3.141592653589793;
var radius = 2;
var circleArea = PI * radius * 2;
var cylinderHeight = 5;
var cylinderVolume = circleArea * cylinderHeight;

// 변수를 지정할때 위의 코드처럼 나중에 봐도 알아볼수 있게 적어야한다.
var x = 50;   //x
var score = 50; //O

// 변수명은 처음에 영문자, _ $ 로 시작해야한다.
// 2번째부터는 숫자를 포함하여 작성할 수 있다.

// 값을 할당하지 않은 변수와 선언하지 않은 변수를 접근시 오류발생
var x;
console.log(x);   //undefined
console.log(y);   //ReferenceError

// 변수는 값이 입력되는거에 따라 자동으로 타입이 결정되는데 이를 동적 타이핑이라 한다.
var foo;
foo = {};

foo = [];

foo = 1;

foo = 'string';

foo = 'a';

foo = true;

console.log(foo);

// var과 const, let의 차이
// var는 함수 레벨 스코프로 함수 내에서만 유효하다. 즉 함수 내부에서 선언한 변수는 지역변수이며 함수 외부에서 선언한 변수는 모두 전역 변수이다.
// const, let은 코드 블록 내에서 선언된 변수는 코드 블록 내에서만 유효하며 코드 블록 외부에서는 참조할 수 없다.
