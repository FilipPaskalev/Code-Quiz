// TODO add JSDoc description of the file - what contains, what is the purpose of the file and so on

// TODO - add description of the function
function renderScores() {
  let scores =
    JSON.parse(localStorage.getItem(quizSettings.highScoresListName)) || [];

  scores.forEach((userDetails) => {
    let elementLi = document.createElement("li");
    elementLi.textContent = userDetails.name + " " + userDetails.score;
    highScoresOl.appendChild(elementLi);
  });
}

// TODO - add description of the function
function clearScores() {
  localStorage.removeItem(quizSettings.highScoresListName);
}

renderScores();

clearHighScoresBtn.addEventListener("click", clearScores);
