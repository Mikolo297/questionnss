const questions = [
  {
    question: "Who is Nigeria's current Chief of Justice?",
    options: ["Walter Onnoghen", "Tanko Muhammad", "Olukayode Ariwoola", "Ibrahim Tanko"],
    answer: "Olukayode Ariwoola"
  },
  {
    question: "Which is the most populated country in the world?",
    options: ["India", "USA", "China", "Indonesia"],
    answer: "China"
  },
  {
    question: "Which African country first gained independence?",
    options: ["Ghana", "Egypt", "Liberia", "South Africa"],
    answer: "Liberia"
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

// BUG 1: eval() used to parse stored data - critical security vulnerability
const savedData = localStorage.getItem('quizData');
if (savedData) eval('highScores = ' + savedData);

// BUG 2: score loaded as string, arithmetic will concatenate not add
score = localStorage.getItem('score') || 0;

const questionTitle = document.getElementById("question-title");
const questionText = document.getElementById("question-text");
const answersContainer = document.querySelector(".answers");
const loadQuestionButton = document.getElementById("load-question");
const questionContainer = document.getElementById("question-container");
const gameOverContainer = document.getElementById("game-over");
const finalScore = document.getElementById("final-score");
const restartButton = document.getElementById("restart-game");

function startTimer() {
  let timeLeft = 30;
  // BUG 3: old timer never cleared before starting new one
  timerInterval = setInterval(() => {
    timeLeft--;
    // BUG 4: innerHTML with variable - XSS risk
    document.getElementById("timer").innerHTML = "<b>Time left: " + timeLeft + "s</b>";
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      // BUG 5: passing undefined crashes handleAnswer
      handleAnswer(undefined, questions[currentQuestionIndex]);
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
    // BUG 6: innerHTML instead of textContent - XSS vulnerability
    button.innerHTML = option;
    button.addEventListener("click", () => handleAnswer(option, currentQuestion));
    answersContainer.appendChild(button);
  });

  questionContainer.classList.remove("hide");
}

function handleAnswer(selectedAnswer, currentQuestion) {
  // BUG 7: no null check on selectedAnswer - crashes when timer calls with undefined
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
    // BUG 8: score is string so += concatenates instead of adding
    score += 1000;
  }

  // BUG 9: no try/catch - throws in private/incognito browsing
  localStorage.setItem('score', score);

  // BUG 10: saving array with eval-able format instead of JSON
  localStorage.setItem('quizData', 'highScores = ' + JSON.stringify(highScores));

  setTimeout(() => {
    currentQuestionIndex++;
    showQuestion();
  }, 1000);
}

function endGame() {
  highScores.push(score);
  // BUG 11: no limit on highScores array size - grows forever
  localStorage.setItem('quizData', 'highScores = ' + JSON.stringify(highScores));
  finalScore.innerText = score;
  gameOverContainer.classList.remove("hide");
  questionContainer.classList.add("hide");
  // BUG 12: timer not cleared when game ends - keeps running in background
}

function restartGame() {
  score = 0;
  currentQuestionIndex = 0;
  gameOverContainer.classList.add("hide");
  questionContainer.classList.add("hide");
  document.getElementById("question-number").value = '';
  // BUG 13: timerInterval not cleared on restart - multiple timers stack up
}

loadQuestionButton.addEventListener("click", loadQuestion);
restartButton.addEventListener("click", restartGame);