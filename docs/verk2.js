let mainBody = document.getElementById("container");

mainBody.innerHTML += "<h1> Torfi Þorgrímsson </h1>";

let questions = ["Afhverju er getElementById() fljótleglegasta aðferðin?", "Hvað er málið með auða hnúta (e. whitespace nodes) og DOM tréið?",
				"Hvað er static og live NodeList, hver er munurinn á NodeList og HTMLCollection?",
				"Hvað er event í eftirfarandi kóða og hvað er gert með því?", 
				"Af þremur leiðum til að binda event þá er AddEventListener() nýjust en afhverju er hún betri en hinar", 
				"Hver er munurinn á true og false í AddEventListener?", 
				"this vísar í Event listener á html element en ekki á object. Þú getur notað bind() til að breyta því, leystu eftirfarandi kóðadæmi með notkun á bind() til að birta í console 'My name is Sam' en ekki undefined."
				];
				
let answeres = ["Vegna þess að það hættir að leita um leið og það finnur eitthvað.", 
				"https://developer.mozilla.org seigir að ástæðan fyrir e. Whitespace nodes er svo að e. browser getur haldið 'e. formating' og til þess að 'white-space: pre', CSS setting sem ákveður það að line break stafir ('/n') eru sýndir á vefinum, virkar.", 
				"HTMLCollection er það sem er skilað ef kallað er á t.d. getElementsByClassName. HTMLCollection geymir í raun bara lista af e. live elements frá e. DOM-innu, sem hagar sér mjög líkt array. Live þíðir að um leið og element-ið breytist í DOM-inu, breytist breytan í kóðanum. Nodelist getur skilað öllum gerðum af DOM Object, sem er kallað Node. Nodelist getur verið static eða live, það fer eftir hvernig þú býr það til; T.d. Node.childNodes skilar live NodeList, og document.querySelectorAll() skilar static NodeList.",
				"event er reyndar ekki að kalla á function-ið, það er að kalla breytu í EventListener, preventDefault() kemur í veg fyrir það sem gerist vanalega, það eru til uncancelable event sem preventDefault() virkar ekki á. Það er hægt að gera event uncancelable með því að gera cancelable: false.",
				"AddEventListener getur léttilega breitt röðinni sem event gerast me 'useCapture' breytunni.",
				"true þíðir að event-ið er sett efst á run lista vefsíðunar, false er default og þíðir að event-ið er sett á bottninn á listanum.",
				"<code> let Person = {<br>name: 'Sam',<br>sayName: function(){<br>console.log('My name is '+ this.name);<br>}<br>};<br>buttonEl.addEventListener('click', Person.sayName.bind(Person));<br></code>" ];

//mainBody.innerHTML += "<ol id=listContainer><h2>Verkefni 5.1<h2/></ol>";

let subBody = document.createElement("ol")
subBody.setAttribute("id", "answers");

let subBodyTitle = document.createElement("h2");
let subBodyTitleText = document.createTextNode("Verkefni 5.1");
subBodyTitle.appendChild(subBodyTitleText);
subBody.appendChild(subBodyTitle);

mainBody.appendChild(subBody);

for (let i = 0; i < questions.length - 1; i++) {
    const q = questions[i];
    const a = answeres[i];

    let question = document.createElement("li");
    let questionText = document.createTextNode(q);
    question.appendChild(questionText);
    subBody.appendChild(question);

    let answer = document.createElement("li");
    answer.setAttribute("type", "i");
    let answerText = document.createTextNode(a);
    answer.appendChild(answerText);
    subBody.appendChild(answer);

    let BR = document.createElement("br");
    subBody.appendChild(BR);

}


let question = document.createElement("li");
let questionText = document.createTextNode(questions[questions.length-1]);
question.appendChild(questionText);
subBody.appendChild(question);

let answer = answeres[answeres.length-1];
subBody.innerHTML += answer;

