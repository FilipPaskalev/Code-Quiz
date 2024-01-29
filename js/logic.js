// TODO - add description of the variable and where is used
let timer;

// TODO - add description of the variable and where is used
let questionIndex = 0;

// TODO - add description of the variable and where is used
let score = 0;

// TODO - add description of the variable and where is used
let time = quizQuestionsData.length * timePerQuestion;

// TODO - add description of the function
function startTimer() {
  timer = setInterval(() => {
    time--;
    timeEl.textContent = time;
    if (time <= 0) {
      endQuiz();
    }
  }, 1000);
}

// TODO - add description of the function
function startQuiz() {
  startScrnEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  startTimer();
  renderQuestion();
}

// TODO - add description of the function
function shuffleArr(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// TODO - add description of the function
function renderQuestion() {
  const data = quizQuestionsData[questionIndex];
  let currentQuestions = [data.correctAnswer];

  currentQuestions.push(...data.incorrectAnswers);

  currentQuestions = shuffleArr(currentQuestions);

  questionTitleEl.textContent = data.questionTitle;

  for (let i = 0; i < currentQuestions.length; i++) {
    const choiceBtn = document.createElement("button");
    choiceBtn.textContent = i + 1 + ". " + currentQuestions[i];
    choiceBtn.addEventListener("click", checkAnswer);
    choicesEl.appendChild(choiceBtn);
  }
}

// TODO - add description of the function
function renderNextQuestion() {
  if (questionIndex < quizQuestionsData.length) {
    choicesEl.innerHTML = null;
    renderQuestion();
  } else {
    endQuiz();
  }
}

// TODO - add description of the function
function renderFeedback(message) {
  feedbackEl.classList.remove("hide");
  feedbackEl.textContent = message;

  setTimeout(() => {
    feedbackEl.classList.add("hide");
  }, 1000);
}

// TODO - add description of the function
function checkAnswer(event) {
  const userSelection = event.target.textContent.substr(3);
  const correctAnswer = quizQuestionsData[questionIndex].correctAnswer;

  if (userSelection === correctAnswer) {
    time = time - timePerQuestion;
    score = score + quizQuestionsData[questionIndex].points;
    renderFeedback(correctMsg);
  } else {
    time = time - timePerQuestion;
    renderFeedback(wrongMsg);
  }

  questionIndex++;

  renderNextQuestion();
}

// TODO - add description of the function
function endQuiz() {
  clearInterval(timer);
  questionsEl.setAttribute("class", "hide");
  endScrnEl.removeAttribute("class");
  finalScoreEl.textContent = score;
}

function setHighScoreInLocaleStorage(arr) {
  localStorage.setItem(highScoresKey, JSON.stringify(arr));
}

function getHighScoresFromLocaleStorage() {
  return JSON.parse(localStorage.getItem("highScoresList")) || [];
}

function saveHighScoreList(userDetails) {
  let highScoresList = getHighScoresFromLocaleStorage();
  highScoresList.push(userDetails);
  highScoresList.sort((a, b) => b.score - a.score);
  setHighScoreInLocaleStorage(highScoresKey);
}

function submitScore() {
  const userInitials = initialsInput.value;
  let userDetails = {
    name: "N/A",
    score: 0,
  };

  if (userInitials !== "") userDetails.name = userInitials;

  userDetails.score = score;

  saveHighScoreList(userDetails);
}

startBtn.onclick = startQuiz;
submitScoreBtn.addEventListener("click", submitScore);
