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


    //add the question to site
    let quesElem = document.createElement("h2");
    let quesText = document.createTextNode(this.quest);
    quesElem.appendChild(quesText);

    MAINBODY.appendChild(quesElem);
    
    //add the buttons to the site
    for (let i = 0; i < this.answers.length; i++) {
        //define this for addEventListener
        q = this;

        //add button with color
        let ansButn = document.createElement("button");
        ansButn.setAttribute("style", "background-color: "+this.answers[i].color);

        //if button is the right one give special id to change text in checkTruth()
        if (this.answers[i].truthy) {
            ansButn.setAttribute("id", "true");
        }

        //make button do its thing
        ansButn.addEventListener("click", () => {q.checkTruth(i);});

        //give the button text
        let ansButnText = document.createTextNode(this.answers[i].text);
        ansButn.appendChild(ansButnText);

        //add button
        MAINBODY.appendChild(ansButn);
    }

}

//check if given answer is true
Questionnaire.prototype.checkTruth = function (ansNum) {
    //check if true
    if (this.answers[ansNum].truthy) {
        //get true element
        thing = document.getElementById("true");

        //change color
        thing.setAttribute("style", "background-color: blue");

        //set nect question
        QUESTIONINCR++;

        //show new question after player has seen their new pretty button
        setTimeout(() => {
            ShowQuestion();
        }, 6000);

    }
    //if player is wrong
    else{
        //tell them
        MAINBODY.innerHTML = '<h1>WRONG</h1>';
        //try again
        setTimeout(() => {
            ShowQuestion();
        }, 1000);
    }
}

//check what question to show and show it
function ShowQuestion() {
    switch (QUESTIONINCR) {
        //in each case: clear body and show new question
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
    
            //you win
        case 4:
        MAINBODY.innerHTML = '<h1>YOU WIN</h1>';
            break;
    }
} 


//define all the questions
let questnaire1 = new Questionnaire("Which of these is not a quark type", 1, "Up", "Bottom", "Charm", "Left");
let questnaire2 = new Questionnaire("What do I have in my pocket", 2, "Stupid Hobbits's", "Fat Hobbits's", "A Ring");
let questnaire3 = new Questionnaire("Gollum winns in the end", 3, "False", "True");

//show first question
ShowQuestion();
