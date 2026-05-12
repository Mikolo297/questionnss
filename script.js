

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
  }
];

let score = 0;
let currentIndex = 0;

function init() {
  // BUG 1: Memory Leak / Multiple Listeners 
  // If init is called again (common in SPAs), listeners attach multiple times.
  document.getElementById("load-question").addEventListener("click", loadQuestion);
  document.getElementById("restart-game").addEventListener("click", resetQuiz);
}

function loadQuestion() {
  const num = parseInt(document.getElementById("question-number").value);
  // BUG 2: Boundary Error
  // If user enters '0', this passes the check but questions[currentIndex] becomes undefined.
  if (num <= questions.length) {
    currentIndex = num - 1;
    render();
  }
}

function render() {
  const q = questions[currentIndex];
  const wrap = document.querySelector(".answers");
  
  document.getElementById("question-text").innerText = q.question;
  wrap.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    // BUG 3: Closure / Scope Issue
    // Using a direct reference here without clearing previous intervals 
    // will cause the score to jump unexpectedly if the user clicks fast.
    btn.onclick = () => checkAnswer(opt);
    wrap.appendChild(btn);
  });
}

function checkAnswer(selected) {
  // BUG 4: Case Sensitivity Regression
  // If the answer in the array is "India" but the button text is "INDIA", this fails.
  if (selected === questions[currentIndex].answer) {
    score += 1000;
  }

  // BUG 5: Infinite Loop / Recursion Risk
  // This increments and renders immediately; if questions.length is 0, it crashes the stack.
  currentIndex++;
  if (currentIndex < questions.length) {
    render();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById("final-score").innerText = score;
  document.getElementById("game-over").classList.remove("hide");
}

function resetQuiz() {
  score = 0;
  currentIndex = 0;
  render();
}

init();