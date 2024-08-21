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

// document.addEventListener("DOMContentLoaded", function() {
//   timerSeconds();
// });
timerSeconds();

function timerSeconds() {
  let set = 30;
  const seconds = document.querySelector("#circle");

  // Funzione per aggiornare il display e lo strokeDashoffset
  const updateDisplay = () => {
    // Aggiorna lo stokeDashoffset basato sui secondi rimanenti
    const offset = 450 - (set / 30) * 450;
    seconds.style.strokeDashoffset = offset;

    // Aggiorna il resto dei secondi, mantenendo il formato "00"
    let lastSec = set < 10 ? "0" + set : set;
    document.querySelector(".seconds").innerHTML = lastSec;
  };

  updateDisplay();

  // Imposta la transizione per lo strokeDashoffset
  seconds.style.transition = "stroke-dashoffset 0.9s linear";

  const intervalId = setInterval(() => {
    set--;

    if (set < 0) {
      clearInterval(intervalId); // Ferma il timer quando raggiunge 0
      return;
    }

    updateDisplay(); // Aggiorna il display e lo strokeDashoffset
  }, 1000); // Imposta l'intervallo a 1 secondo
}

// Dichiarare le variabili che ci servono
let button = document.getElementsByTagName("button");
let variableQuestion = document.getElementById("variabileDomanda");

// SIMONE GRECO
let indexQuestion = 0;
let punteggio = 0;

function Question(index) {
  /*
      FUNZIONE per la generazione della domanda secondo l'indice domande
      */
  let scritta = (variableQuestion.innerHTML = questions[index].question);
  document.getElementById("variabileDomanda").innerHTML = scritta;
}

function Answer(index) {
  /*
      FUNZIONE per la generazione delle risposte randomizzando la prima di posizione e piazzando le rimanenti sui i blocchi liberi
      */
  let RandomCorrect = NumeroCasuale(); //GENERO UN NUMERO CAUSALE PER POSIZIONARE LA RISPOSTA ESATTA (AD OGNI REFRESH AVRA' POSIZIONE DIVERSA)
  button[RandomCorrect].innerHTML = questions[index].correct_answer;

  switch (RandomCorrect) {
    case 0: {
      button[1].innerHTML = questions[index].incorrect_answers[0];
      button[2].innerHTML = questions[index].incorrect_answers[1];
      button[3].innerHTML = questions[index].incorrect_answers[2];
      break;
    }
    case 1: {
      button[0].innerHTML = questions[index].incorrect_answers[0];
      button[2].innerHTML = questions[index].incorrect_answers[1];
      button[3].innerHTML = questions[index].incorrect_answers[2];
      break;
    }
    case 2: {
      button[0].innerHTML = questions[index].incorrect_answers[0];
      button[1].innerHTML = questions[index].incorrect_answers[1];
      button[3].innerHTML = questions[index].incorrect_answers[2];
      break;
    }
    case 3: {
      button[0].innerHTML = questions[index].incorrect_answers[0];
      button[1].innerHTML = questions[index].incorrect_answers[1];
      button[2].innerHTML = questions[index].incorrect_answers[2];
      break;
    }
  }
  return (CorrectAnswer = RandomCorrect);
}

Question(0);
InvioRisposta(Answer(0));

function InvioRisposta(risposta) {
  let check = risposta;
  let corretto;
  if (check == button[0].value) {
    corretto = button[0].value;
  }
}

function NumeroCasuale() {
  /*
        FUNZIONE GENERA NUMERO CASUALE
      */
  let num = Math.round(Math.random() * 3);
  return num;
}

