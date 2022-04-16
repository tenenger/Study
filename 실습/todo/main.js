const inputText = document.querySelector(".input_text");
const addBtn = document.querySelector(".add_btn");
const list = document.querySelector(".list");
const like = document.querySelectorAll(".like");

const addItem = () => {
    // empty
    if (inputText.value.trim() === "") {
        inputText.value = "";
        return;
    }

    // like
    const like = document.createElement("span");
    const likeIcon = document.createElement("i");
    like.classList.add("like");
    likeIcon.classList.add("material-icons");
    likeIcon.innerText = "favorite_border";
    like.appendChild(likeIcon);

    // item
    const item = document.createElement("span");
    item.classList.add("item");
    item.innerText = inputText.value;
    inputText.value = "";
    inputText.focus();

    // manage
    const manage = document.createElement("span");
    manage.classList.add("manage");

    const checkIcon = document.createElement("i");
    checkIcon.classList.add("material-icons");
    checkIcon.classList.add("check");
    checkIcon.innerText = "check";
    manage.appendChild(checkIcon);

    const clearIcon = document.createElement("i");
    clearIcon.classList.add("material-icons");
    clearIcon.classList.add("clear");
    clearIcon.innerText = "clear";
    manage.appendChild(clearIcon);

    // event
    like.addEventListener("click", (e) => {
        const target = e.target;
        target.innerText === "favorite"
            ? (target.innerText = "favorite_border")
            : (target.innerText = "favorite");
    });
    checkIcon.addEventListener("click", (e) => {
        const target = e.target.parentNode.parentNode;
        console.log(target);
        target.classList.add("done");
    });
    clearIcon.addEventListener("click", (e) => {
        const target = e.target.parentNode.parentNode;
        list.removeChild(target);
    });

    // li
    const li = document.createElement("li");
    li.appendChild(like);
    li.appendChild(item);
    li.appendChild(manage);

    list.append(li);
};

inputText.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        addItem();
    }
});

addBtn.addEventListener("click", addItem);
