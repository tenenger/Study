// ~문은 무조건 ;(세미콜론)으로 끝나야 한다.
var x = 5;
var x = function(){console.log('d');};
var y = 5 + 6;

// 문은 코드블록으로 그룹화 할수 있다.
// 함수
function myFunction(a,b){
  return a + b;
};

// if ans
var x = 2;
if (x > 0){
  console.log('x는 0보다 큽니다.');
};

// for 문
for (var i = 0; i < 5; i++;){
  console.log('간편하게 for문을 반복할 수 있습니다.', i);
};


//문들은 위에서 아래로 읽는 흐름제어를 통해 실행된다.
var time = 10;
var greeting;

if (time < 10){
  greeting = 'Good Morning';
}
else if (time < 20){
  greeting = 'Good Day';
}
else{
  greeting = 'Good Evening';
}

console.log(greeting);
