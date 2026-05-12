const questions = [
  {
    question: "Who is Nigeria's current Chief of Justice?",
    options: ["Walter Onnoghen", "Tanko Muhammad", "Olukayode Ariwoola", "Ibrahim Tanko"],
    answer: "Olukayode Ariwoola"
  },
  {
    question: "Which is the most populated country in the world?",
    options: ["India", "USA", "China", "Indonesia"],
    answer: "India" // BUG 1: Wrong answer - correct is China
  },
  {
    question: "Which African country first gained independence?",
    options: ["Ghana", "Egypt", "Liberia", "South Africa"],
    answer: "Ghana" // BUG 2: Wrong answer - correct is Liberia
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

// BUG 3: JSON.parse with no try/catch - crashes if localStorage data is corrupted
const savedData = localStorage.getItem('quizData');
if (savedData) {
  highScores = JSON.parse(savedData);
}

// BUG 4: No validation that parsed data is actually an array
score = Number(localStorage.getItem('score')) || 0;

const questionTitle = document.getElementById("question-title");
const questionText = document.getElementById("question-text");
const answersContainer = document.querySelector(".answers");
const loadQuestionButton = document.getElementById("load-question");
const questionContainer = document.getElementById("question-container");
const gameOverContainer = document.getElementById("game-over");
const finalScore = document.getElementById("final-score");
const restartButton = document.getElementById("restart-game");

// BUG 5: No null checks - if any element above doesn't exist, all subsequent code crashes
if (!questionTitle || !questionText || !answersContainer) {
  console.error("Required DOM elements not found");
  // BUG 6: logs the error but doesn't stop execution - code continues and crashes anyway
}

function startTimer() {
  clearInterval(timerInterval);
  let timeLeft = 30;
  timerInterval = setInterval(() => {
    timeLeft--;
    const timerEl = document.getElementById("timer");
    // BUG 7: no null check on timerEl - crashes if timer element doesn't exist in HTML
    timerEl.textContent = `Time left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      // BUG 8: skipQuestion() is not defined anywhere - ReferenceError crashes the app
      skipQuestion();
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

  // BUG 9: no setTimeout delay - moves to next question instantly
  // user cannot see which answer was correct or wrong
  currentQuestionIndex++;
  showQuestion();
}

function endGame() {
  highScores.push(score);

  // BUG 10: cap logic is inverted - drops newest scores, keeps oldest
  if (highScores.length > 5) {
    highScores = highScores.slice(highScores.length - 5);
  }

  // BUG 11: highScores not sorted - highest score is never actually shown first
  const bestScore = highScores[0];

  try {
    localStorage.setItem('quizData', JSON.stringify(highScores));
  } catch (e) {
    console.warn('localStorage not available:', e);
  }

  finalScore.innerText = score;
  // BUG 12: best score never displayed to user even though it was calculated
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

  // BUG 13: score reset in memory but old score not cleared from localStorage
  // next page load restores the old score silently
  
  // BUG 14: highScores array not reset - keeps growing across restarts with no limit
}

// BUG 15: event listeners added but never removed
// if restartGame() is called multiple times, duplicate listeners stack up
loadQuestionButton.addEventListener("click", loadQuestion);
restartButton.addEventListener("click", restartGame);