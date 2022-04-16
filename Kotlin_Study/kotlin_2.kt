/*
코틀린에서 변수선언시 val, var 키워드를 사용한다
var은 variable의 약자로 초기값 할당 후 바꿀수 있고, val은 value의 약자로 초기값 할당 후 바꿀 수 없다.

val(var) 변수명 : 타입 = 값
타입을 안적어도 유추할 수 있으면 생략가능하다
*/

val data1 = 10
var data2 = 10

fun main() {
    data1 = 20  // 변수가 val이어서 초기값을 변동할 수 없어 오류가 나온다.
    data2 = 20
}