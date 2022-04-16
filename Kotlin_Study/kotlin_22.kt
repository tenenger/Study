/*
주 생성자의 본문 --init 영역

init 키워드를 이용해 주 생성자의 본문을 구현 할 수 있다
단, 필수는 아니여서 필요할때만 사용하면 된다

보조 생성자도 본문을 구현가능하나 init 없이 {}으로 구현가능하다
*/

class User(name: String, count: Int) {
    init{
        println("i am init...")
    }
}
fun main() {
    val user = User("kkang", 10)            // main() 함수에서 User 클래스의 객체를 생성할떄 init영역도 같이 실행된다
}
