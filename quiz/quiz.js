const questions = [
  {
    question: "Which is largest animal in the world?",
    answers: [
      { text: "shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "giraffe", correct: false },
    ],
  },
  {
    question: "Which is capital of Qatar?",
    answers: [
      { text: "Dubai", correct: false },
      { text: "Delhi", correct: false },
      { text: "Doha", correct: true },
      { text: "Tanzania", correct: false },
    ],
  },
  {
    question: "Which is largest continent in the world?",
    answers: [
      { text: "Asia", correct: true },
      { text: "Africa", correct: false },
      { text: "Europe", correct: false },
      { text: "Australia", correct: false },
    ],
  },
  {
    question: "Which country fighting war against Russia?",
    answers: [
      { text: "Belarus", correct: false },
      { text: "Poland", correct: false },
      { text: "Mangolia", correct: false },
      { text: "Ukraine", correct: true },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionEle = document.getElementById("question");
const questionBtn = document.querySelector(".answer");
const nextBtn = document.getElementById("n-btn");

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetBtn();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionEle.innerText = questionNumber + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    questionBtn.append(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}

function resetBtn() {
  nextBtn.style.display = "none";
  while (questionBtn.firstChild) {
    questionBtn.removeChild(questionBtn.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("green");
    score++;
  } else {
    selectedBtn.classList.add("red");
  }

  Array.from(questionBtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("green");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

function showScore() {
  resetBtn();
  questionEle.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
