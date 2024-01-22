var timerInterval;
var time = questions.length * 1;
var questionIndex = 0;

function startQuiz() {
  startScreenElement.setAttribute("class", "hide");
  questionsElement.removeAttribute("class");

  timerInterval = setInterval(() => {
    time = time - 1;
    timeElement.textContent = time;
    if (time <= 0) {
      endQuiz();
    }
  }, 1000);

  renderQuestion();
}

function renderQuestion() {
  var currentQuestion = questions[questionIndex];
  // Set title
  questionTitleEl.textContent = currentQuestion.question;

  questionsElement.appendChild()
  console.log("🚀 ~ renderQuestion ~ currentQuestion:", currentQuestion);
}

function endQuiz() {
  clearInterval(timerInterval);
  questionsElement.setAttribute("class", "hide");
  endScreenElement.removeAttribute("class");
}

function generateRandomQuestion() {
  var randomQuestion = {};
  var randomIndex = (randomQuestion =
    questions[keys[(keys.length * Math.random()) << 0]]);
  deleteElementFromArrayByIndex(randomIndex);
  return randomQuestion;
}

function deleteElementFromArrayByIndex(index) {
  delete questions[index];
}

function checkAnswer(answer, userChoice) {
  if (userChoice === answer) {
    return "Correct!";
  } else {
    return "Wrong!";
  }
}

function startTiming() {
  if (parseInt(time.textContent) < 75) {
    time.textContent = parseInt(time.textContent) + 1;
    console.log(time.textContent);
  } else {
    console.log("clear interval");
    clearInterval();
  }
}

startBtn.onclick = startQuiz;

setInterval(startTiming, 1000);
