let timer;
let time = questions.length * 10;
let questionIndex = 0;
let score = 0;

function startQuiz() {
  startScrnEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  startTimer();
  renderQuestion();
}

function startTimer() {
  timer = setInterval(() => {
    time = time - 1;
    timeEl.textContent = time;
    if (time <= 0) {
      endQuiz();
    }
  }, 1000);
}

// function renderQuestion() {
//   var currentQuestion = questions[questionIndex];
//   // Set title
//   questionTitleEl.textContent = currentQuestion.question;

//   questionsElement.appendChild();
//   console.log("🚀 ~ renderQuestion ~ currentQuestion:", currentQuestion);
// }

// function generateRandomQuestion() {
//   var randomQuestion = {};
//   var randomIndex = (randomQuestion =
//     questions[keys[(keys.length * Math.random()) << 0]]);
//   deleteElementFromArrayByIndex(randomIndex);
//   return randomQuestion;
// }

// function deleteElementFromArrayByIndex(index) {
//   delete questions[index];
// }

// function checkAnswer(answer, userChoice) {
//   if (userChoice === answer) {
//     return "Correct!";
//   } else {
//     return "Wrong!";
//   }
// }

// function startTiming() {
//   if (parseInt(time.textContent) < 75) {
//     time.textContent = parseInt(time.textContent) + 1;
//     console.log(time.textContent);
//   } else {
//     console.log("clear interval");
//     clearInterval();
//   }
// }

function endQuiz() {
  clearInterval(timer);
  questionsEl.setAttribute("class", "hide");
  endScrnEl.removeAttribute("class");
}

startBtn.onclick = startQuiz;
