/*
Nothing은 null이나 예외를 반환하는 함수이다.
그래서 Nothing으로 선언한 변수에는 null을 넣는다.
*/

val data1: Nothing? = null      //?를 붙이면 null을 허용한다는 뜻이다.

fun some1(): Nothing? {
    return null
}

fun some2(): Nothing {
    throw Exception()           // Nothing 함수를 이용해 Exception()함수를 던진다(throw)
}