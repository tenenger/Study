/*
정수를 표현하는 Int, Short, Long
실수를 표현하는 Double, Float
2진수를 표현하는 Byte
true, false표현하는 Boolean이 있다.
*/
val a1: Byte = 0b00001011

val a2: Int = 123
val a3: Short= 123
val a4: Long= 10L

val a5: Double= 10.0
val a6: Float= 10.0f

val a7: Boolean = true

/*
문자를 나타내는 Chr, 문자열을 나타내는 String이 있다.
*/

val a: Char = 'a'         // a변수에는 문자 a가 있으므로 오류가 나온다.

fun main() {
    val str1 = "Hello \n World"         // """는 파이썬처럼 띄어쓰기, 탭 등 쓰여지는 만큼 반영된다.
    val str2 = """
        Hello
        World
    """                             // 안드로이드 스튜디오에는 닫는 삼중따옴표 뒤에 .trimIndent()함수가 추가되어
                                    // 문자열 앞의 공백을 제거해준다.

    println("str1: $str1")          // 큰 따옴표 안에 String 문자열를 포함한 변수를 넣어 앞에 $ 표시를 한다
    println("str2: $str2")          // 이를 문자열 템플릿 이라고 한다.
}