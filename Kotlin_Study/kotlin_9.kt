/*
Unit 타입으로 선언한 변수에는 Unit객체만 넣을 수 있다.
그리고 함수에서 반환문이 없다는 것을 명시적으로 나타낼 때 Unit을 사용한다.
 */
fun sum(): Unit {
    println(10 + 2)
}

fun sum(): {
    println(10 + 2)     // 반환타입을 생략할 경우 Unit이 적용된다.
}