/*
여러개의 데이터를 표현하는 것을 컬렉션 타입이라고하며, Array, List, Set, Map이 있다.

Array클래스로 배열을 표현한다.
배열에 접근할때는 []이나, get() 또는 set()함수를 사용한다.
*/

val data1 : Array<int> = Array(3, {0})      // Array<타입> 타입에는 배열의 타입을 적는다.(String, Int 등)
                                            // Array(int, {int}) 첫번째 매개변수는 배열의 크기, 두번째는 초기값

fun main() {
    val data1 : Array<Int> = Array(3, {0})
    data1[0] = 10
    data1[1] = 20
    data1.set(2, 30)                        // 배열에서 2번째 데이터를 30으로 설정

    println(
        """
    array size : ${data1.size}
    array data : ${data1[0]}, ${data1[2]}, ${data1.get(2)}
    """
    )                                       // .size를 이용해 배열의 크기를 알 수 있다.
}                                           // .get()을 이용해 몇번째 인덱스의 데이터를 가져온다.