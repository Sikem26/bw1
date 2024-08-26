const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

// Dichiarare le variabili come gli elementi che mi servono
let button = document.getElementsByTagName("button");
let variableQuestion = document.getElementById("quiz-question");
let questBtn = document.querySelectorAll(".selectBtn");

let indexVerifica = 0
let indexQuestion = 0
let indexAnswer = 0
let indexCounter = 1
let punteggio = 0
let timer = 0
let intervalId
let elencoRisposte = []

// FUNZIONE per la generazione della domanda secondo l'indice domande

function question(index) {
  if(variableQuestion !== null){
  variableQuestion.innerHTML = `${questions[index].question}`;
  }else{
    console.log("no element in the page")
  }
}

function answer(index) {
  //FUNZIONE per la generazione delle risposte randomizzando la prima di posizione e piazzando le rimanenti sui i blocchi liberi
  let randomCorrect = randomAnswer();

  //GENERO UN NUMERO CAUSALE PER POSIZIONARE LA RISPOSTA ESATTA (AD OGNI REFRESH AVRA' POSIZIONE DIVERSA)
  if (button[randomCorrect]) {
    button[randomCorrect].innerHTML = questions[index].correct_answer;
  }

  let remainingButtons = [0, 1, 2, 3].filter(i => i !== randomCorrect);

  for (let i = 0; i < remainingButtons.length; i++) {
    if (button[remainingButtons[i]]) {
      button[remainingButtons[i]].innerHTML = questions[index].incorrect_answers[i];
    }
  }
}


question(0);
answer(0);

// function invioRisposta(risposta) {
//   let check = risposta;
//   let corretto;
//   if (check == button[0].value) {
//     corretto = button[0].value;
//   }
// }

function randomAnswer() {
  // FUNZIONE GENERA NUMERO CASUALE
  let num = Math.round(Math.random() * 3);
  return num;
}

for (let i = 0; i < questBtn.length; i++) {
  questBtn[i].addEventListener("click", function () {
    event.preventDefault();
    timerSeconds();
  
    // Salva la risposta selezionata
    let rispostaSelezionata = this.innerHTML;
    elencoRisposte[indexQuestion] = rispostaSelezionata;
  
    // Incrementa le domande
    indexQuestion++;
    question(indexQuestion);
  
    // Incrementa le risposte
    indexAnswer++;
    answer(indexAnswer);
  
    // Incrementa il counter
    indexCounter++;
    document.querySelector(".questionNumber").innerHTML = indexCounter;
    console.log(timerSeconds());
  });  
}

// Timer function

function timerSeconds() {
  let set = 30;
  const seconds = document.querySelector("#circle");

  if (intervalId) {
    clearInterval(intervalId);
  }

  const updateDisplay = () => {
    const offset = 450 - (set / 30) * 450;
    if (seconds) {
      seconds.style.strokeDashoffset = offset;
      seconds.style.transition = "stroke-dashoffset 0.9s linear";
    }
    
    let lastSec = set < 10 ? "0" + set : set;
    const secondsElement = document.querySelector(".seconds");
    if (secondsElement) {
      secondsElement.innerHTML = lastSec;
    }
  };

  updateDisplay();

  intervalId = setInterval(() => {
    set--;
    if (set < 0) {
      clearInterval(intervalId);
      timerSeconds();
  
    // Salva la risposta selezionata
    let rispostaSelezionata = this.innerHTML;
    elencoRisposte[indexQuestion] = rispostaSelezionata;
  
    // Incrementa le domande
    indexQuestion++;
    question(indexQuestion);
  
    // Incrementa le risposte
    indexAnswer++;
    answer(indexAnswer);
  
    // Incrementa il counter
    indexCounter++;
    document.querySelector(".questionNumber").innerHTML = indexCounter;
    console.log(timerSeconds());
      return;
    }
    updateDisplay();
  }, 1000);
}

timerSeconds();

// Reindirizza a pagina risultati

function resultPage() {
  if (indexQuestion >= questions.length) {
    const punteggio = verifica();
    console.log('Punteggio calcolato:', punteggio); // Debug: Verifica il punteggio calcolato
    localStorage.setItem('punteggio', punteggio);
    console.log('Punteggio salvato nel localStorage:', localStorage.getItem('punteggio')); // Debug: Verifica il valore salvato
    // Reindirizza alla pagina dei risultati
    window.location.href = "index-results.html";
  }
}

document.getElementById("answerOne").addEventListener("click", resultPage);
document.getElementById("answerTwo").addEventListener("click", resultPage);
document.getElementById("answerThree").addEventListener("click", resultPage);
document.getElementById("answerFour").addEventListener("click", resultPage);

//Calcola risultato
let punteggioFinale = 0

function verifica() {
  punteggioFinale = 0;
  for (let i = 0; i < questions.length; i++) {
    if (elencoRisposte[i] === questions[i].correct_answer) {
      punteggioFinale++;
    }
  }
  return punteggioFinale;
}


let answerResult = verifica(0)
console.log(answerResult)
//Risultato a schermo

let finalResult = document.getElementById("finalResult");
let result = answerResult

function pushNumber() {
  const finalResult = document.getElementById("finalResult");
  if (finalResult) {
    finalResult.innerHTML = verifica();
  } else {
    console.log("L'elemento non esiste");
  }
}

