let timer;
let time = quizQuestionsData.length * 5;
let questionIndex = 0;
let score = 0;

function startTimer() {
  timer = setInterval(() => {
    time--;
    timeEl.textContent = time;
    if (time <= 0) {
      endQuiz();
    }
  }, 1000);
}

function startQuiz() {
  startScrnEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  startTimer();
  renderQuestion();
}

function shuffleArr(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function renderQuestion() {
  const data = quizQuestionsData[questionIndex];
  let currentQuestions = [data.correct_answer];
  currentQuestions.push(...data.incorrect_answers);
  console.log(currentQuestions);
  currentQuestions = shuffleArr(currentQuestions);
  console.log(currentQuestions);
  questionTitleEl.textContent = data.questionTitle;
}

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
