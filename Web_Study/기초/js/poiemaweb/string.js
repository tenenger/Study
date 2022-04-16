// string타입은 텍스트 데이터를 나타내는데 사용한다.
// 문자열은 ''나 ""안에 텍스트를 넣어 생성한다.
// 일반적으로는 ''를 사용한다.

var str = 'string';
str = 'string'
str = `string`    // 1 백틱은 python의 """와 같이 줄바꿈할때 용이하게 쓰인다.

str = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열이다.";
str = '작은 따옴표로 감싼 문자열 내의 "큰 따옴표"는 문자열이다.';

// 자바스크립트 문자열은 원시 타입이며 변경 불가능이다.
var str = 'Hello';
str = 'World';
// str이 Hello에서 World로 바뀐것은 str의 값이 변경된것이 아니라 World라는 문자열을 가리킨다. 즉 Hello와 World는 메모리 안에 존재한다.

var str = 'string';

for (var i = 0; i < str.length; i ++) {
  console.log(str[i])
}

// 문자열을 변경할 수 없다.
str[0] = 'S';
console.log(str);     // string

// 그러나 값 자체를 변경하는 것이 아니라 재할당한다면 변경이 가능하다.

var str = 'string';
console.log(str);   // string

str = 'String';
console.log(str);   //String;

str += ' test';
console.log(str);   //String test

// 슬라이싱
str = str.substring(0, 3);
console.log(str);   //Str

// 소문자를 대문자로
str = str.toUpperCase();
console.log(str);   //STR
