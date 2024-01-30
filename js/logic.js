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
 * Description - Score for the user.
 * @type {number}
 */
let score = 0;

/**
 * Description - Total time available for the quiz. Is calculated based
 * on the number of questions and time per question.
 * @type {number}
 */
let time = quizQuestionsData.length * timePerQuestion;

/**
 * Description - Starts timer for quiz.
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
 * Description - Starts quiz by showing questions, and starting the timer.
 */
function startQuiz() {
  startScrnEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  startTimer();
  renderQuestion();
}

/**
 * Description - Take given array and returned it shuffled.
 * @param {*} array - The array to be shuffled.
 * @returns {{}} - The shuffled array.
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
 * Description - Update UI to render current question on the screen.
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
 * Description - Renders the next quiz question (recursive to renderQuestion()
 * function) and validate if the quiz needs to ne ended.
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
 * Description - Update UI to show feedback on the user's answer.
 * @param {*} message - The feedback message to be displayed.
 */
function renderFeedback(message) {
  feedbackEl.classList.remove("hide");
  feedbackEl.textContent = message;

  setTimeout(() => {
    feedbackEl.classList.add("hide");
  }, 1000);
}

/**
 * Description - Checks the user's answer, updates the score and time,
 * and renders feedback.
 * @param {*} event - The event object containing the user's selection
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
 * Description - Ends the quiz, clears the timer, and displays the end
 * screen with the final score.
 */
function endQuiz() {
  clearInterval(timer);
  questionsEl.setAttribute("class", "hide");
  endScrnEl.removeAttribute("class");
  finalScoreEl.textContent = score;
}

/**
 * Description - Saves the user's high score in the local storage.
 * @param {*} userDetails - The details of the user, including user name
 * and user score.
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
 * Description - Submits the user's score, including initials if provided
 * (if not set initials to N/A). Redirects to the highscores page (to avoid
 * submitting user score more than once).
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

  // Redirect to the highscores page
  window.location.href = "highscores.html";
}

startBtn.onclick = startQuiz;

submitScoreBtn.addEventListener("click", submitScore);
