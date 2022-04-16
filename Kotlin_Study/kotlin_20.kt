/*
클래스는 class 키워드로 선언한다.
class User {} 에서 class User는 선언부, {}는 본문이다.
본문에 쓸 내용이 없다면 생략도 가능하다

클래스안에는 또다른 클래스를 선언할 수 있다
*/

class User {
    var name = "kkang"
    constructor(name: String) {             
        this.name = name
    }
    fun somefun() {
        println("name: $name")
    }
    class SomeClass {}
}