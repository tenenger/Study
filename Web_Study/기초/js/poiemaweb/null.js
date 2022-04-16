// null 타입의 값은 null이 유일하다. 자바스크립트는 대소문자를 구별하므로 null이어야한다.
// null은 의도적으로 변수에 값이 없다는 것을 명시할 때 사용한다.

var bar = null;
console.log(typeof bar);   //object
//typeof 연산자가 아닌 일치연산자를 사용해야한다.
console.log(bar === null);

// 또는 함수가 호출되었으나 유효한 값을 반환 못할경우 null이 반환된다.
var bar = document.querySelector('.class');
console.log(bar);   //null
