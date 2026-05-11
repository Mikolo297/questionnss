const questions = [
    {
      question: "Who is Nigeria's current Chief of Justice?",
      options: ["Walter Onnoghen", "Tanko Muhammad", "Olukayode Ariwoola", "Ibrahim Tanko"],
      answer: "Olukayode Ariwoola"
    },
    {
      question: "In Nigeria, democracy day is now celebrated on:",
      options: ["May 29", "October 1", "June 12", "June 1"],
      answer: "June 12"
    },
    {
      question: "Which is the most populated country in the world?",
      options: ["India", "USA", "China", "Indonesia"],
      answer: "China"
    },
    {
      question: "Nigeria's Inspector General of Police is?",
      options: ["Usman Alkali Baba", "Kayode Egbetokun", "Mohammed Adamu", "Ibrahim Idris"],
      answer: "Kayode Egbetokun"
    },
    {
      question: "Which is the second-largest continent in the world?",
      options: ["North America", "Europe", "Africa", "Asia"],
      answer: "Africa"
    }
  ];

  let score = 0;
  let currentQuestionIndex = 0;
  let timerInterval;

  // BUG 1: Global variable leak - timer never cleared properly
  var timeLeft = 30;

  // BUG 2: No validation on localStorage data type
  score = localStorage.getItem('score');

  const questionTitle = document.getElementById("question-title");
  const questionText = document.getElementById("question-text");
  const answersContainer = document.querySelector(".answers");
  const loadQuestionButton = document.getElementById("load-question");
  const questionContainer = document.getElementById("question-container");
  const gameOverContainer = document.getElementById("game-over");
  const finalScore = document.getElementById("final-score");
  const restartButton = document.getElementById("restart-game");

  // BUG 3: Timer function modifies global state with no cleanup
  function startTimer() {
    timeLeft = 30;
    timerInterval = setInterval(() => {
      timeLeft--;
      // BUG 4: innerHTML used with variable data - XSS risk
      document.getElementById("timer").innerHTML = "Time left: " + timeLeft + " seconds";
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        // BUG 5: handleAnswer called with undefined - crashes if no answer selected
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

    // BUG 6: Previous timer never cleared when moving to next question
    startTimer();

    const currentQuestion = questions[currentQuestionIndex];
    questionTitle.innerText = `Question ${currentQuestionIndex + 1}`;
    questionText.innerText = currentQuestion.question;

    answersContainer.innerHTML = '';
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      // BUG 7: XSS - innerHTML used with option data
      button.innerHTML = option;
      button.addEventListener("click", () => handleAnswer(option, currentQuestion));
      answersContainer.appendChild(button);
    });

    questionContainer.classList.remove("hide");
  }

  function handleAnswer(selectedAnswer, currentQuestion) {
    // BUG 8: No null check - crashes when called with undefined from timer
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

    // BUG 9: score is a string from localStorage, + operator concatenates instead of adding
    if (userAnswer === correct) {
      score = score + 1000;
    }

    // BUG 10: No error handling on localStorage.setItem - can throw in private browsing
    localStorage.setItem('score', score);

    setTimeout(() => {
      currentQuestionIndex++;
      showQuestion();
    }, 1000);
  }

  function endGame() {
    finalScore.innerText = score;
    gameOverContainer.classList.remove("hide");
    questionContainer.classList.add("hide");
    // BUG 11: Timer not cleared when game ends
  }

  function restartGame() {
    score = 0;
    currentQuestionIndex = 0;
    timeLeft = 30;
    gameOverContainer.classList.add("hide");
    questionContainer.classList.add("hide");
    document.getElementById("question-number").value = '';
    // BUG 12: timerInterval not cleared on restart - multiple timers now running
  }

  loadQuestionButton.addEventListener("click", loadQuestion);
  restartButton.addEventListener("click", restartGame);