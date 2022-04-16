/*
초기화 미루기
kotlin_3.kt에서 초기값을 안넣으면 오류가 발생한다.
나중에 넣겠다는 키워드를 사용하면 이를 해결할 수 있다.
lateinit, lazy 키워드가 있다.
*/
lateinit var data1: Int         // lateinit은 Int, Long, Short, Double, Float, Boolean, Byte에 사용불가
lateinit val data2: String      // lateinit은 var 키워드로 선언한 변수에만 사용가능
lateinit var data3: String

val data4 : Int by lazy {
    println("in lazy....")
    10                          // data4에 바로 값이 할당되지 않으나, 일단 값을 넣어야 오류가 안나온다.
}

fun main() {
    println("in main......")
    println(data4 + 10)         // data4가 처음으로 사용됬을때 lazy의 중괄호에 있는 내용이 한번     
                                // 실행되고, 변수에 값이 넣어진다.
    println(data4 + 10)
}

