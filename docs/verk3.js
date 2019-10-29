MAINBODY = document.getElementById("container");
QUESTIONINCR = 1

let Questionnaire = function(question, number) {
    let q = this;

    q.quest = question;
    q.number = number;
    q.answers = [];

    //check every argument passed to the function, 
    //every argument after the first is treated as an answer.
    for (let i = 2; i < arguments.length; i++) {
        //set answer as argumet, the color is set to blue
        q.answers.push({text: arguments[i], color: "green", truthy: false});
        
        //the last answer is always set as the correct answer
        if (i == arguments.length-1) {
            q.answers[i - 2] = {text: arguments[i], color: "green", truthy: true};
        }
    }

}

Questionnaire.prototype.show = function () {
    //insert into main body the question number
    MAINBODY.innerHTML += ("<h1>" + this.number + "</h1>");

    let quesElem = document.createElement("h2");
    let quesText = document.createTextNode(this.quest);
    quesElem.appendChild(quesText);

    MAINBODY.appendChild(quesElem);
    

    for (let i = 0; i < this.answers.length; i++) {
        q = this;
        let ansButn = document.createElement("button");
        ansButn.setAttribute("style", "background-color: "+this.answers[i].color);
        if (this.answers[i].truthy) {
            ansButn.setAttribute("id", "true");
        }

        ansButn.addEventListener("click", () => {q.checkTruth(i);});

        let ansButnText = document.createTextNode(this.answers[i].text);
        ansButn.appendChild(ansButnText);

        MAINBODY.appendChild(ansButn);
    }

}

Questionnaire.prototype.checkTruth = function (ansNum) {
    if (this.answers[ansNum].truthy) {
        thing = document.getElementById("true");

        thing.setAttribute("style", "background-color: blue");
        setTimeout(() => {
            QUESTIONINCR++;
        }, 5000);
        setTimeout(() => {
            ShowQuestion();
        }, 6000);

    }
    else{
        MAINBODY.innerHTML = '<h1>WRONG</h1>';
        setTimeout(() => {
            ShowQuestion();
        }, 1000);
    }
}

function ShowQuestion() {
    switch (QUESTIONINCR) {
        case 1:
            MAINBODY.innerHTML = '';
            questnaire1.show();
            break;
        case 2:
            MAINBODY.innerHTML = '';
            questnaire2.show();
            break;
        case 3:
            MAINBODY.innerHTML = '';
            questnaire3.show();
            break;
    
        case 4:
        MAINBODY.innerHTML = '<h1>YOU WIN</h1>';
            break;
    }
} 



let questnaire1 = new Questionnaire("Which of these is not a quark type", 1, "Up", "Bottom", "Charm", "Left");
let questnaire2 = new Questionnaire("What do I have in my pocket", 2, "Stupid Hobbits's", "Fat Hobbits's", "A Ring");
let questnaire3 = new Questionnaire("Gollum winns in the end", 3, "False", "True");

ShowQuestion();
