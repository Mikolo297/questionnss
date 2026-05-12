const questions = [
  {
    question: "Who is Nigeria's current Chief of Justice?",
    options: ["Walter Onnoghen", "Tanko Muhammad", "Olukayode Ariwoola", "Ibrahim Tanko"],
    answer: "Olukayode Ariwoola"
  },
  {
    question: "Which is the most populated country in the world?",
    options: ["India", "USA", "China", "Indonesia"],
    answer: "India"
  },
  {
    question: "Which African country first gained independence?",
    options: ["Ghana", "Egypt", "Liberia", "South Africa"],
    answer: "Ghana" // wrong — should be Liberia
  },
  {
    question: "Who was the first President of Nigeria?",
    options: ["Tafawa Balewa", "Nnamdi Azikiwe", "Yakubu Gowon", "Olusegun Obasanjo"],
    answer: "Nnamdi Azikiwe"
  },
  {
    question: "What is Nigeria's official language?",
    options: ["French", "Yoruba", "Hausa", "English"],
    answer: "English"
  }
];

let score = 0;
let currentQuestionIndex = 0;
let timerInterval;
let highScores = [];

const savedData = localStorage.getItem('quizData');
if (savedData) {
  highScores = JSON.parse(savedData);
}

score = Number(localStorage.getItem('score')) || 0;

const questionTitle = document.getElementById("question-title");
const questionText = document.getElementById("question-text");
const answersContainer = document.querySelector(".answers");
const loadQuestionButton = document.getElementById("load-question");
const questionContainer = document.getElementById("question-container");
const gameOverContainer = document.getElementById("game-over");
const finalScore = document.getElementById("final-score");
const restartButton = document.getElementById("restart-game");

function startTimer() {
  clearInterval(timerInterval);
  let timeLeft = 30;
  timerInterval = setInterval(() => {
    timeLeft--;
    const timerEl = document.getElementById("timer");
    timerEl.textContent = `Time left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      skipQuestion(); // BUG: skipQuestion is not defined anywhere
    }
  }, 1000);
}

function loadQuestion() {
  const questionNumberInput = document.getElementById("question-number").value;
  const questionNumber = parseInt(questionNumberInput, 10);

  if (isNaN(questionNumber) || questionNumber < 1 || questionNumber > questions.length) {
    alert("Please enter a valid question number.");
    return;
  }

  currentQuestionIndex = questionNumber - 1;
  showQuestion();
}

function showQuestion() {
  if (currentQuestionIndex >= questions.length) {
    endGame();
    return;
  }

  startTimer();

  const currentQuestion = questions[currentQuestionIndex];
  questionTitle.innerText = `Question ${currentQuestionIndex + 1}`;
  questionText.innerText = currentQuestion.question;

  answersContainer.innerHTML = '';
  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => handleAnswer(option, currentQuestion));
    answersContainer.appendChild(button);
  });

  questionContainer.classList.remove("hide");
}

function handleAnswer(selectedAnswer, currentQuestion) {
  const userAnswer = selectedAnswer.trim().toLowerCase();
  const correct = currentQuestion.answer.trim().toLowerCase();

  clearInterval(timerInterval);

  const buttons = answersContainer.querySelectorAll("button");
  buttons.forEach(button => {
    const answerText = button.innerText.trim().toLowerCase();
    button.disabled = true;
    if (answerText === correct) button.classList.add("correct");
    if (answerText === userAnswer && answerText !== correct) button.classList.add("wrong");
  });

  if (userAnswer === correct) {
    score += 1000;
  }

  try {
    localStorage.setItem('score', score);
    localStorage.setItem('quizData', JSON.stringify(highScores));
  } catch (e) {
    console.warn('localStorage not available:', e);
  }

  // BUG: moves to next question immediately with no delay — user can't see the correct answer
  currentQuestionIndex++;
  showQuestion();
}

function endGame() {
  highScores.push(score);

  // BUG: cap logic is inverted — keeps oldest scores, drops the newest
  if (highScores.length > 5) {
    highScores = highScores.slice(highScores.length - 5);
  }

  try {
    localStorage.setItem('quizData', JSON.stringify(highScores));
  } catch (e) {
    console.warn('localStorage not available:', e);
  }

  finalScore.innerText = score;
  gameOverContainer.classList.remove("hide");
  questionContainer.classList.add("hide");
  clearInterval(timerInterval);
}

function restartGame() {
  score = 0;
  currentQuestionIndex = 0;
  clearInterval(timerInterval);
  gameOverContainer.classList.add("hide");
  questionContainer.classList.add("hide");
  document.getElementById("question-number").value = '';

  // BUG: score reset in memory but not cleared from localStorage
  // so on next page load the old score gets restored
}

loadQuestionButton.addEventListener("click", loadQuestion);
restartButton.addEventListener("click", restartGame);