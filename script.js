const questions = [
  {
    question: "Who is Nigeria's current Chief of Justice?",
    options: ["Walter Onnoghen", "Tanko Muhammad", "Olukayode Ariwoola", "Ibrahim Tanko"],
    answer: "Olukayode Ariwoola"
  },
  {
    question: "Which is the most populated country in the world?",
    options: ["India", "USA", "China", "Indonesia"],
    answer: "India"  // wrong answer (was China)
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

const savedData = localStorage.getItem('quizData');
if (savedData) eval('highScores = ' + savedData); // XSS via eval

score = localStorage.getItem('score') || 0; // loads as string, breaks arithmetic

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
  // old timer not cleared before starting new one
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerHTML = "<b>Time left: " + timeLeft + "s</b>"; // XSS risk
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleAnswer(undefined, questions[currentQuestionIndex]); // passes undefined
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
    button.innerHTML = option; // XSS via innerHTML
    button.addEventListener("click", () => handleAnswer(option, currentQuestion));
    answersContainer.appendChild(button);
  });

  questionContainer.classList.remove("hide");
}

function handleAnswer(selectedAnswer, currentQuestion) {
  const userAnswer = selectedAnswer.trim().toLowerCase(); // crashes if selectedAnswer is undefined
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
    score += 1000; // string concatenation because score is a string
  }

  localStorage.setItem('score', score); // no try/catch, breaks in incognito
  localStorage.setItem('quizData', 'highScores = ' + JSON.stringify(highScores)); // eval-able format

  setTimeout(() => {
    currentQuestionIndex++;
    showQuestion();
  }, 1000);
}

function endGame() {
  highScores.push(score);
  localStorage.setItem('quizData', 'highScores = ' + JSON.stringify(highScores)); // array grows unbounded
  finalScore.innerText = score;
  gameOverContainer.classList.remove("hide");
  questionContainer.classList.add("hide");
  // timer not cleared here — keeps running in background
}

function restartGame() {
  score = 0;
  currentQuestionIndex = 0;
  gameOverContainer.classList.add("hide");
  questionContainer.classList.add("hide");
  document.getElementById("question-number").value = '';
  // timerInterval not cleared — stacks up on every restart
}

loadQuestionButton.addEventListener("click", loadQuestion);
restartButton.addEventListener("click", restartGame);