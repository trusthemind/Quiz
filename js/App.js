let SCORE = 0;
let index = 0;

let p = document.getElementById("question");
p.style.fontSize = "26px";
p.style.fontStyle = "italic";
let div = document.getElementById("container");

ClearQuestion = () => {div.innerHTML = "";};

function AnswerChecker(button, answer) {
    let btn_temp = button.id.slice(3, button.id.length);
    let answ_temp = answer.id.slice(6, answer.id.length);

    if (btn_temp === answ_temp) {
        if (Array[index].select[answ_temp] === Array[index].answer) {
            console.log(Array[index].select[answ_temp], Array[index].answer)
            SCORE++;
        }
    }
}

function GetResult() {

    div.innerHTML = "";
    div.style.flexDirection = "row";
    div.style.justifyContent = "center";
    div.style.fontSize = "30px";
    div.style.paddingTop = "100px";
    div.style.gap = "15px";
    div.innerHTML = `Your score is <span id="span">${SCORE}</span>`;

    span = document.getElementById("span");
    span.style.margin = "0 10px";

    let body = document.getElementsByTagName("body")[0];
    body.style.display = "flex";
    body.style.flexDirection = "column";
    body.style.alignItems = "center";

    if (SCORE >= 3) {
        span.style.color = "green";
        body.innerHTML += "<h2>Win</h2>";
    } else {
        span.style.color = "#d90429";
        body.innerHTML += "<h2>Loose</h2>";
    }
    body.innerHTML += "<button id='reload'>Reload</button>";
    let reload = document.getElementById("reload");
    reload.style.padding = "20px 35px";
    reload.style.borderRadius = "5px";
    reload.style.backgroundColor = "#8d99ae";
    reload.style.border = "none";
    reload.style.textTransform = "uppercase";

    reload.addEventListener("click", () => {
        location.reload();
    })
}

function CreateQuestion() {

    for (let j = 0; j < Array[index].select.length; j++) {
        p.innerText = Array[index].text;

        let btn = document.createElement("button");
        btn.innerText = "Select Answer".toUpperCase();
        btn.id = "btn" + j.toString();
        btn.style.padding = "15px 20px";
        btn.style.border = "none";
        btn.style.borderRadius = "5px";
        btn.style.fontSize = "14px";
        btn.style.backgroundColor = "#8d99ae";

        let answ = document.createElement("p");
        answ.id = "answer" + j.toString();
        answ.style.fontSize = "22px";
        answ.innerText = Array[index].select[j];
        console.log(Array[j]);

        div.appendChild(answ)
        div.appendChild(btn)

        btn.addEventListener("click", () => {
            ClearQuestion();
            AnswerChecker(btn, answ);


            div.appendChild(p)

            CreateQuestion();
            index++;
            if (index >= Array.length - 1) GetResult();
        })

    }
}

window.addEventListener("DOMContentLoaded", () => {
    CreateQuestion();
})
