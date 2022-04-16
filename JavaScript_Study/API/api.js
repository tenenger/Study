const wordsDOM = document.querySelector(".words");
const length_btn = document.querySelector(".length_btn");
const url = "https://random-word-api.herokuapp.com/word?number=10";
let words = [];

function element_generator(arr) {
    arr.map((item) => {
        const li = document.createElement("li");
        li.innerText = item;
        wordsDOM.appendChild(li);
    });
}

length_btn.addEventListener("click", () => {
    words.filter((word) => word.length < 5);
});

init();
// fetch
function init() {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            words = data;
            element_generator(words);
        });
}

// async, await
// async function init() {
//     const res = await fetch(url);
//     const data = await res.json();
//     words = data;
// }
