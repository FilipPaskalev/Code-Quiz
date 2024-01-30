/**
 * Description - Timer used for the quiz.
 * @type {number}
 */
let timer;

/**
 * Description - Index of the current question in the quiz.
 * @type {number}
 */
let questionIndex = 0;

/**
 * Description -
 * @type {number}
 */
let score = 0;

/**
 * Description -
 * @type {number}
 */
let time = quizQuestionsData.length * timePerQuestion;

/**
 * Description -
 */
function startTimer() {
  timer = setInterval(() => {
    time--;
    timeEl.textContent = time;
    if (time <= 0) {
      endQuiz();
    }
  }, 1000);
}

/**
 * Description -
 */
function startQuiz() {
  startScrnEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  startTimer();
  renderQuestion();
}

/**
 * Description -
 * @param {*} array
 * @returns {{}}
 */
function shuffleArr(array) {
  let arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

/**
 * Description -
 */
function renderQuestion() {
  const data = quizQuestionsData[questionIndex];
  let currentQuestions = [data.correctAnswer];

  currentQuestions.push(...data.incorrectAnswers);

  currentQuestions = shuffleArr(currentQuestions);

  questionTitleEl.textContent = data.questionTitle;

  for (let i = 0; i < currentQuestions.length; i++) {
    const btnText = i + 1 + ". " + currentQuestions[i];
    const choiceBtn = document.createElement("button");

    choiceBtn.textContent = btnText;
    choiceBtn.addEventListener("click", checkAnswer);
    choicesEl.appendChild(choiceBtn);
  }
}

/**
 * Description -
 */
function renderNextQuestion() {
  if (questionIndex < quizQuestionsData.length) {
    choicesEl.innerHTML = null;
    renderQuestion();
  } else {
    endQuiz();
  }
}

/**
 * Description -
 * @param {*} message
 */
function renderFeedback(message) {
  feedbackEl.classList.remove("hide");
  feedbackEl.textContent = message;

  setTimeout(() => {
    feedbackEl.classList.add("hide");
  }, 1000);
}

/**
 * Description -
 * @param {*} event
 */
function checkAnswer(event) {
  const userSelection = event.target.textContent.substr(3);
  const correctAnswer = quizQuestionsData[questionIndex].correctAnswer;

  //TODO add sounds
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

/**
 * Description -
 */
function endQuiz() {
  clearInterval(timer);
  questionsEl.setAttribute("class", "hide");
  endScrnEl.removeAttribute("class");
  finalScoreEl.textContent = score;
}

/**
 * Description -
 * @param {*} userDetails
 */
function saveHighScoreList(userDetails) {
  let highScoresList = JSON.parse(localStorage.getItem(highScoresKey)) || [];

  if (!Array.isArray(highScoresList)) {
    highScoresList = [];
  }

  highScoresList.push(userDetails);
  highScoresList.sort((a, b) => b.score - a.score);
  localStorage.setItem(highScoresKey, JSON.stringify(highScoresList));
}

/**
 * Description -
 */
function submitScore() {
  const userInitials = initialsInput.value;
  let userDetails = {
    name: "N/A",
    score: 0,
  };

  if (userInitials !== "") userDetails.name = userInitials;

  userDetails.score = score;
  saveHighScoreList(userDetails);
  window.location.href = "highscores.html";
}

startBtn.onclick = startQuiz;

submitScoreBtn.addEventListener("click", submitScore);
