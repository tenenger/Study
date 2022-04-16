// 표현식과 연산자

// 리터럴 표현식
10

// 식별자 표현식
sum

//  연산자 표현식
10 + 20

// 함수/메소드 호출 표현식
square()

// 식별자 표현식과 숫자 리털러과 연산자의 조
var x = 10;
x + 30;

// statement 표현식
// 변수 선언문
const = x;

// 할당문
x = 5;

// 함수 선언문
function foo () {};

// 조건문
if (x > 5){....};

// 반복문
for (var i = 0; i < 10; i++){}


// 할당문을 값처럼 변수에 할당도 가능하다.
var foo = x = 100;
console.log(foo);     // 100

//연산자
//이항 산술 연산자
5+2
5-2
5*2
5/2
5%2

//단항 산술 연산자의
++
--
+
-

var x = 5, result;    //x에 5를 할당하고, result변수를 선언한다.

// 선대입 후증가
result = x++;
console.log(result, x);   //5 6

result = ++x;
console.log(result, x);   // 7 7

// +단항 연산자는 숫자타입이 아닌 피연산자에 사용하면 숫자타입으로 변환한다.
+10 // 10
+'10' // 10
+true // 1
+false // 0

// -단항 연산자도 마찬가지이다.
-10 // -10
-'10' // -10
-true // -1
-false // -0

// 문자열 연결 연산자
'1' + '2'     //'12'
'1' + 2       //'12'

// 산술 연산자
1 + 2         // 3
1 + true      // 2
1 + false     // 1
true + false  // 1
1 + null      // 1
1 + undefined // NaN

// 할당연산자
var x;
x = 10;
x += 5;
x -= 5;
x *= 5;
x /= 5;
x %= 5;

var str = "Hi";
str += 'World';       // 'Hi World'

// 연쇄 할당
var x, y;
x = y = 5;


// 비교 연산자
// 동등 비교
5 == 5;     //true
// 타입은 다르지만 암묵적 타입 변환을 통해 타입을 이치시키면 같은 값을 가진다.
5 == '5';   //true
5 == 8;     //false
// 단 ==은 예측하기 힘들기떄문에 ===을 사용한다.
5 ==='5'    //false

// 이러한 이유로 불일치 비교 연산자도 !==를 사용하는게 권장된다.

// 대소 관계 비교 연산자
// 대소 관계 비교
5 >0
5 > 5
5 > 8
5 >= 5
5 >= 7

// 삼항 조건 연산자
var x = 2;
var result = x % 2 ? '홀수' : '짝수';
console.log(result);

// 논리 연산자
// || && ! 는 or and not 과 연관이 있다.

true || true    //true
true || false   //true

false && true   //false
true && true    //true

!true           //false
!0              //true

// 쉼표 연산자
// 쉼표 연산자는 왼쪽부터 오른쪽까지 평가하고 마지막 피연산자의 평가가 끝나면 그 피연산자의 값을 반환한다.
var x, y, z;
x = 1, y = 2, z = 3;      //3

//그룹연산자
// ()안에 있는 표현식을 최우선으로 한다는 것이다.
(10+2)*6

// typeof 연산자
// typeof 연산자 뒤의 데이터 타입을 문자열로 반환한다.
typeof ''     //'string'
typeof 1      //'number'
typeof a()    //'function'
