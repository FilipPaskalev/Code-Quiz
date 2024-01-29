// TODO add JSDoc description of the file - what contains, what is the purpose of the file and so on

// TODO - add description of the function
function renderScores() {}

// TODO - add description of the function
function clearScores() {
  localStorage.removeItem(quizSettings.highScoresListName);
}

renderScores();

clearHighScoresBtn.addEventListener("click", clearScores);
