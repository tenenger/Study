/*
Int와 String은 파이썬에서는 기초 데이터 타입이지만, 코틀린에서는 클래스이다.
그래서 Int에 null을 넣을 수 있다.
*/

fun someFun2() {
    var data1: Int = 10
    var data10: Int? = null      // Int에 null 입력 가능

    data1 = data1 + 10
    data1 = data1.plus(10)      // 객체에 매서드 호출 가능

}