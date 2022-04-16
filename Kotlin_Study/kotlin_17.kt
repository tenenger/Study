/*
조건문 if~else와 표현식
*/

fun main() {
    var data = 10
    if (data>0) {
        println("data > 0")
    else {
        println("data <= 0")
    }
    }
}

// else if로 여러개 나열 가능하다.

fun main() {
    var data = 10
    if (data > 0) {
        println("data > 0")
    }
    else if (data < 0) {
        println("data < 0")
    }
    else {
        println("data = 0")
    }
}

// 다른 프로그래밍 언어와 다르게 결과값(true or false)을 반환하는 표현식으로도 사용할 수 있다.
// 결과값은 맨 마지막 줄에 나온다. 그리고 if나 else 단독으로 사용 불가이다.

fun main() {
    var data = 10
    val result = if (data > 0) {
        println("data > 0")
        true
    }
    else {
        println("data <= 0")
        false
    }
    println(result)
}