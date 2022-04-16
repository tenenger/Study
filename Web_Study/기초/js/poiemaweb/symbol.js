// symbol은 객체의 키값을 정할때 충돌이 발생하지 않도록 하기위해 사용한다.

var name = symbol('나이');
console.log(typeof name);    // symbol

var obj = {};
obj[name] = 'value';
console.log(obj[name]);    //value
