const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

function AddAnswer(){
  var a document.querySelector('.answerBox');
  var answer = document.createElement('button');
}
function goNext(qIdx){
  var q = document.querySelector("qBox");
  q.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a){
    addAnswer();
  }
}
function begin(){
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block"
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}
