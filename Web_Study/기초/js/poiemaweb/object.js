// 자바스크립트는 객체 기반의 스크립트 언어이며 자바스크립트를 이루고 있는 거의 모든것이 객체이다.
// 자바스크립트 객체는 키와 값으로 구성된 프로퍼티의 집합니다.
// 프로퍼티의 값으로 자바스크립트에서 사용할 수 있는 모든 값을 사용할 수 있다. 즉 함수도 사용할 수 포함된다.
// 포로퍼티의 값이 함수일 경우 일반함수와 구분하기위해 메소드라고 부른다.

var person = {
  name : 'Lee',
  gender : 'male',
  sayHello : function(){
    console.log('Hi! My name is ' + this.name);
  }
};

console.log(typeof person);   // object
console.log(person);    // {name:'Lee', gender : 'male', sayHello:[fucntion: sayHello]}

person.sayHello(); // Hi! My name is Lee
