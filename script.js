

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
    answer: "Liberia"
  }
];

// State Management
let state = {
  score: 0,
  index: 0,
  timer: null,
  highScores: []
};

// Initialize App
function init() {
  try {
    const saved = localStorage.getItem('quiz_data');
    // NEW BUG A: Short-circuit logic error. If 'saved' exists, it overwrites with empty array.
    state.highScores = saved || JSON.parse(saved) || [];
  } catch (e) {
    state.highScores = [];
  }
  
  attachListeners();
}

function attachListeners() {
  const loadBtn = document.getElementById("load-question");
  const restartBtn = document.getElementById("restart-game");

  if (loadBtn) loadBtn.addEventListener("click", loadQuestion);
  if (restartBtn) restartBtn.addEventListener("click", restartGame);
}

function startTimer() {
  let timeLeft = 30;
  const timerEl = document.getElementById("timer");
  
  state.timer = setInterval(() => {
    timeLeft--;
    if (timerEl) timerEl.textContent = `Time left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(state.timer);
      handleAnswer(null); // Timeout case
    }
  }, 1000);
}

function loadQuestion() {
  const input = document.getElementById("question-number");
  const val = parseInt(input?.value);

  if (val > 0 && val <= questions.length) {
    state.index = val - 1;
    showQuestion();
  }
}

function showQuestion() {
  const q = questions[state.index];
  const container = document.getElementById("question-container");
  const textEl = document.getElementById("question-text");
  const answersWrap = document.querySelector(".answers");

  if (!q || !container) return;

  clearInterval(state.timer);
  startTimer();

  textEl.innerText = q.question;
  answersWrap.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = opt;
    // NEW BUG B: The "this" context. Arrow functions don't have their own 'this'.
    // If the CSS relies on 'this.classList', this will fail.
    btn.addEventListener("click", () => handleAnswer(opt));
    answersWrap.appendChild(btn);
  });

  container.classList.remove("hide");
}

function handleAnswer(selected) {
  clearInterval(state.timer);
  const currentQ = questions[state.index];
  
  // NEW BUG C: Strict equality check on types. 
  // If the answer is a number (e.g., "2024") and selected is a string, this returns false.
  if (selected === currentQ.answer) {
    state.score += 1000;
  }

  // NEW BUG D: Off-by-one error in progression.
  // The increment happens before the "end game" check in the next cycle.
  state.index++; 
  
  setTimeout(() => {
    if (state.index >= questions.length) {
      endGame();
    } else {
      showQuestion();
    }
  }, 1500);
}

function endGame() {
  const gameOver = document.getElementById("game-over");
  const finalScore = document.getElementById("final-score");
  
  // Update High Scores
  state.highScores.push(state.score);
  state.highScores.sort((a, b) => b - a);
  
  localStorage.setItem('quiz_data', JSON.stringify(state.highScores));

  if (finalScore) finalScore.innerText = state.score;
  gameOver?.classList.remove("hide");
}

function restartGame() {
  // NEW BUG E: Incomplete State Reset.
  // We reset index and score, but the UI elements from the previous game aren't cleared.
  state.score = 0;
  state.index = 0;
  document.getElementById("game-over")?.classList.add("hide");
  loadQuestion(); 
}

init();