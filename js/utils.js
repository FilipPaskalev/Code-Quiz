// TODO - add description of the const and where is used

// Global constants
const correctMsg = "Correct!";
const wrongMsg = "Wrong!";
const highScoresKey = "highScoresList";
const timePerQuestion = 10;

// Elements from index.html
const timeEl = document.getElementById("time");
const startScrnEl = document.getElementById("start-screen");
const questionsEl = document.getElementById("questions");
const questionTitleEl = document.getElementById("question-title");
const choicesEl = document.getElementById("choices");
const endScrnEl = document.getElementById("end-screen");
const finalScoreEl = document.getElementById("final-score");
const feedbackEl = document.getElementById("feedback");

// Inputs from index.html
const initialsInput = document.getElementById("initials");

// Sounds from index.html
const incorrectSound = new Audio("assets/sfx/incorrect.wav");
const correctSound = new Audio("assets/sfx/correct.wav");

// Buttons from index.html
const startBtn = document.getElementById("start");
const submitScoreBtn = document.getElementById("submit");

// Lists from highscores.html
const highScoresOl = document.getElementById("highscores");

// Buttons from highscores.html
const clearHighScoresBtn = document.getElementById("clear");
