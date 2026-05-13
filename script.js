const questions = [
  {
    question: "What is the capital of Lagos State?",
    options: ["Ikeja", "Victoria Island", "Lekki", "Surulere"],
    answer: "Ikeja"
  },
  {
    question: "Which year did Nigeria gain independence?",
    options: ["1957", "1960", "1963", "1965"],
    answer: "1960"
  },
  {
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
    answer: "Mitochondria"
  },
  {
    question: "Which programming language runs in the browser natively?",
    options: ["Python", "Java", "JavaScript", "Ruby"],
    answer: "JavaScript"
  },
  {
    question: "What does HTTP stand for?",
    options: [
      "HyperText Transfer Protocol",
      "High Transfer Text Protocol",
      "HyperText Transmission Process",
      "Hosted Text Transfer Protocol"
    ],
    answer: "HyperText Transfer Protocol"
  }
];

let currentIndex = 0;
let score = 0;
let answered = false; // BUG 1: Never reset between questions — after first answer, all buttons stop working

function init() {
  const loadBtn = document.getElementById("load-question");
  const restartBtn = document.getElementById("restart-game");

  // Prevent duplicate listeners on re-init
  loadBtn.replaceWith(loadBtn.cloneNode(true));
  restartBtn.replaceWith(restartBtn.cloneNode(true));

  document.getElementById("load-question").addEventListener("click", loadQuestion);
  document.getElementById("restart-game").addEventListener("click", resetQuiz);
}

function loadQuestion() {
  const raw = document.getElementById("question-number").value;
  const num = parseInt(raw);

  if (isNaN(num) || num < 1 || num > questions.length) {
    alert(`Please enter a number between 1 and ${questions.length}.`);
    return;
  }

  currentIndex = num - 1;
  render();
}

function render() {
  const q = questions[currentIndex];
  const wrap = document.querySelector(".answers");

  document.getElementById("question-text").innerText = q.question;
  wrap.innerHTML = "";

  updateProgressBar();

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => {
      if (answered) return; // BUG 1 bites here — never resets so this always returns after Q1
      answered = true;
      checkAnswer(opt);
    };
    wrap.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentIndex].answer;

  // Case-insensitive comparison
  if (selected.trim().toLowerCase() === correct.trim().toLowerCase()) {
    score += 1000;
  }

  currentIndex++;

  if (currentIndex < questions.length) {
    render();
  } else {
    showResults();
  }
}

function showResults() {
  const totalPossible = questions.length * 1000;

  // BUG 2: Division produces NaN when totalPossible is 0 (empty questions array)
  // No guard clause here
  const percentage = (score / totalPossible) * 100;

  document.getElementById("final-score").innerText = score;
  document.getElementById("score-percentage").innerText = percentage.toFixed(2) + "%";
  document.getElementById("game-over").classList.remove("hide");
}

function updateProgressBar() {
  // BUG 3: Divides by questions.length instead of questions.length - 1
  // Progress bar hits 100% one question too early (on the second-to-last question)
  const progress = (currentIndex / questions.length) * 100;
  const bar = document.getElementById("progress-bar");
  if (bar) bar.style.width = progress + "%";
}

function resetQuiz() {
  score = 0;
  currentIndex = 0;
  // BUG 1 consequence: answered is not reset here, so restarting the game
  // leaves all buttons permanently disabled
  document.getElementById("game-over").classList.add("hide");
  render();
}

function saveHighScore() {
  // BUG 4: localStorage returns strings — "900" > 1000 is true due to
  // JS coercing to string comparison, so stale high scores can never be beaten
  const stored = localStorage.getItem("highScore");
  if (stored > score) {
    return parseInt(stored);
  }
  localStorage.setItem("highScore", score);
  return score;
}

function formatTime(seconds) {
  // BUG 5: Pads minutes correctly but uses wrong variable for seconds display
  // Should be seconds % 60 but uses raw `seconds`, so "1:75" instead of "1:15"
  const mins = Math.floor(seconds / 60);
  const secs = seconds; // should be: seconds % 60
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

init();