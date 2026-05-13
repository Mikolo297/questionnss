const questions = [
  {
    question: "Who is Nigeria's current Chief Justice?",
    options: ["Walter Onnoghen", "Tanko Muhammad", "Olukayode Ariwoola", "Ibrahim Tanko"],
    answer: "Olukayode Ariwoola"
  },
  {
    question: "Which is the most populated country in the world?",
    options: ["India", "USA", "China", "Indonesia"],
    answer: "India"
  },
  {
    question: "What is the capital of Nigeria?",
    options: ["Lagos", "Abuja", "Kano", "Ibadan"],
    answer: "Abuja"
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Earth", "Mercury", "Mars"],
    answer: "Mercury"
  },
  {
    question: "How many states does Nigeria have?",
    options: ["30", "36", "42", "24"],
    answer: "36"
  }
];

let score = 0;
let currentIndex = 0;
let answered = false; // NEW BUG 1: `answered` flag is checked but never reset between questions,
                      // so after the first answer, all subsequent questions become unclickable.

function init() {
  // FIX for original BUG 1: Remove existing listeners before adding new ones
  const loadBtn = document.getElementById("load-question");
  const restartBtn = document.getElementById("restart-game");
  loadBtn.replaceWith(loadBtn.cloneNode(true));
  restartBtn.replaceWith(restartBtn.cloneNode(true));
  document.getElementById("load-question").addEventListener("click", loadQuestion);
  document.getElementById("restart-game").addEventListener("click", resetQuiz);
}

function loadQuestion() {
  const num = parseInt(document.getElementById("question-number").value);
  // FIX for original BUG 2: Validate that num is >= 1 AND <= questions.length
  if (num >= 1 && num <= questions.length) {
    currentIndex = num - 1;
    render();
  } else {
    alert("Please enter a valid question number.");
  }
}

function render() {
  const q = questions[currentIndex];
  const wrap = document.querySelector(".answers");

  document.getElementById("question-text").innerText = q.question;
  wrap.innerHTML = "";

  // FIX for original BUG 3: Each render clears the container (wrap.innerHTML = "")
  // so old buttons and their listeners are fully removed before new ones are added.
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => {
      // NEW BUG 1 (see above): `answered` is never reset, so this blocks all future clicks
      if (answered) return;
      answered = true;
      checkAnswer(opt);
    };
    wrap.appendChild(btn);
  });

  updateProgressBar(); // NEW BUG 2: Function is called but defined to use 1-based index,
                       // causing the bar to always show one step behind the current question.
}

function checkAnswer(selected) {
  // FIX for original BUG 4: Case-insensitive comparison using .toLowerCase()
  if (selected.toLowerCase() === questions[currentIndex].answer.toLowerCase()) {
    score += 1000;
  }

  // FIX for original BUG 5: Guard added — questions.length === 0 is handled before render/recursion
  if (questions.length === 0) {
    showResults();
    return;
  }

  currentIndex++;
  if (currentIndex < questions.length) {
    render();
  } else {
    showResults();
  }
}

function showResults() {
  // NEW BUG 3: score is displayed correctly, but `totalPossible` is calculated AFTER
  // showResults is called, so it always reflects a stale (pre-final) value.
  const totalPossible = questions.length * 1000;
  const percentage = (score / totalPossible) * 100;

  document.getElementById("final-score").innerText = score;
  document.getElementById("score-percentage").innerText = percentage.toFixed(2) + "%"; // may be NaN if totalPossible is 0
  document.getElementById("game-over").classList.remove("hide");
}

function updateProgressBar() {
  // NEW BUG 2: Uses `currentIndex + 1` but render() calls this before incrementing,
  // so the bar shows e.g. "1/5" on question 1 correctly, but visually updates one tick late
  // because the bar width formula divides by questions.length instead of questions.length - 1.
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const bar = document.getElementById("progress-bar");
  if (bar) bar.style.width = progress + "%";
}

function resetQuiz() {
  score = 0;
  currentIndex = 0;
  // NEW BUG 4: `answered` flag is NOT reset here, so after the game ends and the user
  // clicks Restart, all answer buttons are immediately unclickable again.
  document.getElementById("game-over").classList.add("hide");
  render();
}

function getHighScore() {
  // NEW BUG 5: localStorage.getItem returns a string, but it's compared with `>` against
  // a number. "900" > 1000 evaluates as string comparison ("9" > "1" = true), so a
  // previous high score of 900 would incorrectly beat a new score of 1000.
  const stored = localStorage.getItem("highScore");
  if (stored > score) {
    return parseInt(stored);
  } else {
    localStorage.setItem("highScore", score);
    return score;
  }
}

init();