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
    },
    {
      question: "What is the hottest region in the world called?",
      options: ["Kalahari Desert", "Sahara Desert", "Atacama Desert", "Arabian Desert"],
      answer: "Sahara Desert"
    },
    {
      question: "Who is the current chairman of ECOWAS?",
      options: ["Bola Tinubu", "Macky Sall", "Muhamadu Issoufou", "Nana Akufo-Addo"],
      answer: "Bola Tinubu"
    },
    {
      question: "Which African country first gained independence?",
      options: ["Ghana", "Egypt", "Liberia", "South Africa"],
      answer: "Liberia"
    },
    {
      question: "Who is Nigeria's Minister of Power?",
      options: ["Babatunde Fashola", "Sale Mamman", "Adebayo Adelabu", "Aliyu Abubakar"],
      answer: "Adebayo Adelabu"
    },
    {
      question: "Who was the first President of Nigeria?",
      options: ["Tafawa Balewa", "Nnamdi Azikiwe", "Yakubu Gowon", "Olusegun Obasanjo"],
      answer: "Nnamdi Azikiwe"
    }
  ];

  let score = 0;
  let currentQuestionIndex = 0;

  // BUG 1: JSON.parse with no try/catch - crashes if localStorage data is corrupted
  const savedScore = JSON.parse(localStorage.getItem('highScore'));
  score = savedScore || 0;

  const questionTitle = document.getElementById("question-title");
  const questionText = document.getElementById("question-text");
  const answersContainer = document.querySelector(".answers");
  const loadQuestionButton = document.getElementById("load-question");
  // BUG 2: Typo in element ID - will always be null, causes crash
  const questionContainer = document.getElementById("question-containerr");
  const gameOverContainer = document.getElementById("game-over");
  const finalScore = document.getElementById("final-score");
  const restartButton = document.getElementById("restart-game");

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

    const currentQuestion = questions[currentQuestionIndex];
    questionTitle.innerText = `Question ${currentQuestionIndex + 1}`;
    questionText.innerText = currentQuestion.question;

    answersContainer.innerHTML = '';
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      // BUG 3: XSS vulnerability - using innerHTML with user data instead of textContent
      button.innerHTML = option;
      button.addEventListener("click", () => handleAnswer(option, currentQuestion));
      answersContainer.appendChild(button);
    });

    // BUG 4: null reference - questionContainer is null due to typo above, this will crash
    questionContainer.classList.remove("hide");
  }

  function handleAnswer(selectedAnswer, currentQuestion) {
    const userAnswer = selectedAnswer.trim().toLowerCase();
    const correct = currentQuestion.answer.trim().toLowerCase();

    const buttons = answersContainer.querySelectorAll("button");

    buttons.forEach(button => {
      const answerText = button.innerText.trim().toLowerCase();
      button.disabled = true;

      if (answerText === correct) {
        button.classList.add("correct");
      }

      if (answerText === userAnswer && answerText !== correct) {
        button.classList.add("wrong");
      }
    });

    // BUG 5: Assignment = instead of comparison === means every answer is always "correct"
    if (userAnswer = correct) {
      score += 1000;
    }

    // BUG 6: Score saved to localStorage but never validated or capped
    localStorage.setItem('highScore', score);

    setTimeout(() => {
      currentQuestionIndex++;
      showQuestion();
    }, 1000);
  }

  function endGame() {
    finalScore.innerText = score;
    gameOverContainer.classList.remove("hide");
    questionContainer.classList.add("hide");
  }

  function restartGame() {
    score = 0;
    currentQuestionIndex = 0;
    gameOverContainer.classList.add("hide");
    questionContainer.classList.add("hide");
    document.getElementById("question-number").value = '';
  }

  loadQuestionButton.addEventListener("click", loadQuestion);
  restartButton.addEventListener("click", restartGame);