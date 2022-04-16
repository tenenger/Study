/*
함수 선언시 fun 키워드를 사용한다
fun 함수명(매개변수명: 타입): 반환타입 {....함수 내용....}
*/
fun some(data1: Int): Int {
    return data1 * 10               // 1. some 함수를 선언한다. 2. 매개변수는 1개로 정수타입이다. 3. 중괄호를 시행한다.
                                    // 4. 반환시 Int로 반환한다.
}

fun some(data1: Int) {              // 매개변수는 val로 고정되어 중괄호 안에서 매개변수를 지정할 수 없으나 맨 처음에 지정가능
    data1 = 20                      // 오류 발생
                                    // 그리고 함수에 반환타입을 적지 않으면 Unit이 자동 적용된다.
}

fun main() {
    fun some(data1: Int, data2: Int = 10): Int {
        return data1 * data2
    }
    println(some(10))               // 첫번째 매개변수에 대입되어 200이 나온다.
    println(some(10, 20))           // 각각 매개변수에 대입되어 200이 나온다.
    println(some(data2 = 20, data1 = 10)) // 매개변수를 지정하여 값을 대입할 수 있다. 이는 명명된 매개변수라고 한다.
}

