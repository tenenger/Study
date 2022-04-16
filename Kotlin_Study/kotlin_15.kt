/*
List, Set, Map은 컬렉션 인터페이스를 타입으로 표현한 클래스이다.
List: 순서가 있는 데이터 집합, 중복허용
Set: 순서가 없고, 중복을 허용하지 않음
Map: 키와 값으로 이루어진 데이터 집합으로 순서가 없고, 중복을 허용하지 않음

컬렉션 타입 클래스는 가변과 불변 클래스로 나뉘고
불변 클래스는 List, Set, Map이고
가변 클래스는 MutableList. MutableSet, MutalbeMap이다.
불변 클래스는 size, get()함수만 사용가능하나
가변 클래스는 size, get(), add(), set() 함수를 사용할 수 있다.
배열과 마찬가지로 listOf(), mutalbeListOf() 함수를 사용가능하다
*/

fun main() {
    var list = listOf<Int>(10,20,30)
    println(
        """
    list size: ${list.size}
    list data: ${list[0]}, ${list[1]}, ${list.get(2)}
    """
    )
}

// add()함수는 배열 크기및 추가할때, set()함수는 데이터 바꿀때 사용한다.

fun main() {
    var mutableList = mutableListOf<Int>(10,20,30)
    mutableList.add(3, 40)
    mutableList.set(0, 50)

    println(
        """
    list size: ${mutableList.size}
    list data: ${mutableList[0]}, ${mutableList[1]}, ${mutableList.get(2)}, ${mutableList.get(3)}
    """
    )
}

