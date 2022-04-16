function makeCounterFunction(initVal) {
  var count = initVal;
  function Increase() {
    count++;
    console.log(count);
  }
  return Increase;
}

var counter1 = makeCounterFunction(0);
var counter2 = makeCounterFunction(10);

counter1();
counter2();

// 1
// 11
// 그 이유는 함수에 선언된 변수가 각 저장되었기때문에 값이 따로 계산되어 나왔다.
