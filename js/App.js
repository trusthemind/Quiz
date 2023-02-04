let SCORE = 0;
let counter = 0;
let cases = [];
let buttons = [];

let p = document.getElementById("question");
p.style.fontSize = "26px";
p.style.fontStyle = "italic";
let div = document.getElementById("container");

window.addEventListener("DOMContentLoaded", () => {
  p.innerText = Array[counter].text;
 // p.appendChild(document.createTextNode(Array[counter].text));

  for (let c = 0; c < Array[counter].select.length; c++) {
    let btn = document.createElement("button");
    btn.innerText = "Select Answer".toUpperCase();
    btn.id = "btn" + c.toString();
    btn.style.padding = "15px 20px";
    btn.style.border = "none";
    btn.style.borderRadius = "5px";
    btn.style.fontSize = "14px";
    btn.style.backgroundColor = "#8d99ae";

    let cass = document.createElement("p");
    cass.id = "answer" + c.toString();
    cass.style.fontSize = "22px";
    cass.innerText = Array[counter].select[c];
    console.log(Array[c].select);
    cases.push(cass);
    buttons.push(btn);

    div.appendChild(cass);
    div.appendChild(btn);

    btn.addEventListener("click", () => {
      div.innerHTML = "";
      div.appendChild(p);
      
      
      // Answer checker
      let btn_temp = btn.id.slice(3, btn.id.length);
      let cass_temp = cass.id.slice(6, cass.id.length);

      if (btn_temp === cass_temp) {
        if (Array[counter].select[cass_temp] === Array[counter].answer) {
          SCORE++;
        }
        counter++;
      }

      cases = [];
      cases.push(cass);
      buttons = [];
      buttons.push(btn);
      console.log(buttons);
      
      //Adding all elements
      for (let b = 0; b < buttons.length; b++) {
        p.innerHTML = `${Array[counter].text}`;
        console.log(cases);
        div.appendChild(cases[b]);
        div.appendChild(buttons[b]);
      }

      if (counter >= Array.length) {
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
          span.style.color = "red";
          body.innerHTML += "<h2>Loose</h2>";
        }
      }

    });
  }
});
