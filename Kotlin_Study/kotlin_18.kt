/*
if~else문 이외에 when 조건문을 작성할 수 있다
*/

fun main() {
    var data = 10
    when (data) {
        10 -> println("data = 10")
        20 -> println("data = 20")
        else ->{
            println("data is not valid data")
        }
    }
}

// when 조건문은 정수말고 다른 타입의 데이터를 지정할 수도 있다

fun main() {
    var data = "hello"
    when (data) {
        "hello" -> println("data is hello")
        "world" -> println("data is World")
        else -> {
            println("data is not valid data")
        }
    }
}

// when 조건문으로 범위도 지정가능하다

fun main() {
    var data: Any= 10
    when (data) {
        is String -> println("data is String")          // data가 문자열이면
        20, 30 -> println("data is 20 or 30")
        is 1..10 -> println("data is 1..10")            // data가 1~10의 값이면
        else -> println("data is not valid")
    }
}
// is는 타입을 확인하는 연산자이며, in은 범위지정 연산자이다.
// 지금까지 when 조건문사용시 바로 데이터를 명시했는데 조건에 명시해도 된다.

fun main() {
    var data = 10
    when {
        data <=10 -> println("data is <= 10")
        data > 10 -> println("data is >10")
        else -> println("data is not valid")
    }
}

// when은 if문과 마찬가지로 표현식 사용가능하다.(변수에 값을 넣을 수 있다는 얘기)

fun main() {
    var data = 10
    var result = when {
        data <= 0 -> "data is <= 0"
        data > 100 -> "data is > 100"
        else -> "data is not valid"
    }
    println(result)
}