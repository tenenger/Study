/*
클래스는 생성자를 주 생성자와 보조 생성자로 구분한다
한 클래스 안에 주생성자만 선언할 수 있고, 보조 생성자만 선언할 수 있다, 물론 둘다 선언도 가능하다

주 생성자 키워드는 constructor 키워드로 클래스 선언부에 선언한다, 한 클래스에 하나 가능하다
*/

class User constructor() {          
}

class User() {              // 주 생성자 선언시 constructor() 생략가능하다
}

// 만약 주 생성자를 선언 안하면 자동으로 매개변수가 없는 주 생성자를 선언해준다
class User {
}

// 주 생성자를 선언시 필요에 따라 매개변수를 선언할 수 있다
class User(name: String, count: Int) {
}
// 위의 User 클래스는 매개변수를 2개를 요구했기때문에 클래스 호출시 이를 정확히 적어야한다
var user = User("kkang", 10)

