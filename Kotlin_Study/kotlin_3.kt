/*
초기값 할당시 선언과 동시에 할당해야한다.
단, 함수안에 변수나 클래스를 선언시 바로 초기값을 할당하지 않아도 된다.
*/

val data_1 : Int    //타입만 적고 값을 안적을경우 오류가 나온다.
val data_2 = 10

fun someFun() {
    val data_3 : Int
    println("data3 : $data_3")      // 변수에 초기값을 할당안해서 오류발생
    data_3 = 10
    println("data_3 : $data_3")
}

class User {
    val data_4: Int     // 초기값을 바로 할당안해도 된다고 했지, 이대로 마무리 하면 오류가 나온다.
    val data_5 : Int = 20
}