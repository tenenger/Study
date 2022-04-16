function f(){
  console.log('f() is called');
}
var o = {
  name : 'object',
  method : f
};

f();
o.method();


// f() is called
// f() is called
// o변수의 속성인 method를 부르고, ()를 붙이면 f()되서 f()함수를 한번 더 호출하게 된다.
