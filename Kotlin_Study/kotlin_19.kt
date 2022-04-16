/*
반복문 for와 while

for 반복문은 제어 변숫값을 증감함으로써 특정 조건이 참일 때까지 구문을 반복실행한다. 주로 범위 연산자인 in을 사용
*/

fun main() {
    var sum: Int = 0
    for (i in 1..10) {          // i에 1~10까지 순서대로 집어넣는다.
        sum += 1
    }
    println(sum)                // 55
}

// i in 1..10 : 1부터 10까지 1씩 증가
// i in 1 until 10 : 1부터 9까지 1씩 증가
// i in 2..10 step 2 : 2부터 10까지 2씩 증가
// i in 10 downTo 1 : 10부터 1까지 1씩 감소
// 또한 증감을 숫자말고 컬렉션 타입의 데이터 수만큼 반복하게 .indices를 사용한다

fun main() {
    var data = arrayOf<Int>(10, 20, 30)
    for (i in data.indices) {           // 인덱스값인 0, 1, 2를 i에 대입한다
        println(data[i])
        if (i != data.size -1) print(",") // i가 data데이터크기(3) -인 2가 아닐경우 ,를 출력
    }                                       // 10,20,30
}

// 인덱스와 값을 동시에 가져오려면 .withIndex()함수를 이용한다

fun main() {
    var data = arrayOf<Int>(10,20,30)
    for ((index, value) in data.withIndex()) {
        print(value)
        if (index != data.size -1) println(",")
    }
}

// for 반복문 대신 while 반복문을 사용하기도 한다

fun main(args: Array<String) {
    var x = 0
    var sum1 = 0
    while (x < 10) {
        sum1 += ++x                 // x에 먼저 1을 더하고 sum1에 x를 더한다
    }
    println(sum1)                   // 55
}