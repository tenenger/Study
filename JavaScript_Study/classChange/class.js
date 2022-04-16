//html
<ul>
    <li>
        <span>국어</span>
    </li>
    <li>
        <span>수학</span>
    </li>
    <li>
        <span>사회</span>
    </li>
    <li>
        <span>과학</span>
    </li>
    <li>
        <span>체육</span>
    </li>
</ul>;

// 클래스 값 지정
// className 속성값 바꾸기
javascript;
document.querySelector("ul li:nth-child(3)").className = "highlighted";

javascript;
document.querySelector("ul li:nth-child(3)").className = "important";

javascript;
document.querySelector("ul li:nth-child(3)").className =
    "highlighted important";

// 클래스 추가 / 제거
// `classList`의 `add`, `remove` 사용
javascript;
document.querySelector("ul li:nth-child(4)").classList.add("highlighted");
document.querySelector("ul li:nth-child(4)").classList.add("important");

// 이미 있는 클래스는 추가되지 않음
document.querySelector("ul li:nth-child(4)").classList.add("important");

document.querySelector("ul li:nth-child(3)").classList.remove("important");
