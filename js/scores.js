/**
 * Renders high scores in an ordered list on the page.
 * Retrieves high scores from local storage, creates list elements,
 * and appends them to the ordered list element.
 * @function
 */
function renderScores() {
  let scores = JSON.parse(localStorage.getItem(highScoresKey)) || [];

  highScoresOl.innerHTML = "";

  scores.forEach((userDetails) => {
    let elementLi = document.createElement("li");
    elementLi.textContent = userDetails.name + " " + userDetails.score;
    highScoresOl.appendChild(elementLi);
  });
}

/**
 * Clears all high scores from local storage.
 * @function
 */
function clearScores() {
  localStorage.removeItem(highScoresKey);
}

renderScores();

clearHighScoresBtn.addEventListener("click", clearScores);
