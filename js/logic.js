// TODO - add description of the variable and where is used
let timer;

// TODO - add description of the variable and where is used
const questionInterval = 3;

// TODO - add description of the variable and where is used
let time = quizQuestionsData.length * questionInterval;

// TODO - add description of the variable and where is used
let questionIndex = 0;

// TODO - add description of the variable and where is used
let score = 0;

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
    choiceBtn.textContent = currentQuestions[i];
    choiceBtn.addEventListener("click", checkAnswer());
    choicesEl.appendChild(choiceBtn);
  }
}

function renderNextQuestion() {
  // if smaller than last index of arr question continue
  // else endQuiz
}

function renderFeedback() {}

// TODO - add description of the function
function checkAnswer(event) {
  const userSelection = event.target.textContent;
  const correctAnswer = quizQuestionsData[questionIndex].correctAnswer;

  if (userSelection === correctAnswer) {
    return feedback.correctMsg;
  } else {
    return feedback.incorrectMsg;
  }

  questionIndex++;

  renderNextQuestion();
}

function endQuiz() {
  clearInterval(timer);
  questionsEl.setAttribute("class", "hide");
  endScrnEl.removeAttribute("class");
}

startBtn.onclick = startQuiz;
