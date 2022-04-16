/*
Array<Int> 대신 IntArray 클래스를 이용할 수 있다.
마찬가지로 String, Boolean, Char, Double, Byte, Float, Long, Short도 가능하다.
*/

val data1: IntArray = IntArray(3, {0})                      // 기초타입 Array 사용시 뒤에도 같은거로 적어야한다.
val data2: BooleanArray = BooleanArray(3, {false})

// arrayO(대문자 O이다)f()함수를 사용하면 배열선언과 동시에 값을 할당할 수 있다
fun main() {
    val data1 = arrayOf<Int>(10,20,30)                      // 크기가 3이고, 10,20,30 데이터를 포함한다.
    println(
        """
    array size : ${data1.size}
    array data : ${data1[0]}, ${data1[1]}, ${data1.get(2)}
    """
    )
}

// 기초타입 array와 마찬가지로 arrayOf도 intArrayOf() 사용가능하다.

val data1 = intArrayOf(10,20,30)
val data2 = booleanArrayOf(true, false, true)