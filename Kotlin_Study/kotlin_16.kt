/*
Map 객체는 키와 값으로 이루어진 데이터이다.
Pair 객체나 키 to 값 형태로 이용할 수 있다.
*/

fun main() {
    var map = mapOf<String, String>(Pair("one", "hello"), "two" to "world")
    println(
        """
    map size: ${map.size}
    map data: ${map.get("one")}, ${map.get("two")}
    """
    )
}