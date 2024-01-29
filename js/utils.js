// TODO add JSDoc description of the file

// Elements
const timeEl = document.getElementById("time");
const feedbackEl = document.getElementById("feedback");
const startScrnEl = document.getElementById("start-screen");
const endScrnEl = document.getElementById("end-screen");
const questionsEl = document.getElementById("questions");
const questionTitleEl = document.getElementById("question-title");
const choicesEl = document.getElementById("choices");
const finalScoreEl = document.getElementById("final-score");

// Sounds
const incorrectSound = new Audio("assets/sfx/incorrect.wav");
const correctSound = new Audio("assets/sfx/correct.wav");

// Lists
const highScoresLi = document.getElementById("highscores");

// Buttons
const submitBtn = document.getElementById("submit");
const startBtn = document.getElementById("start");
const clearBtn = document.getElementById("clear");
