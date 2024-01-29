// TODO add JSDoc description of the file

// Elements
const timeEl = document.getElementById("time");
const startScrnEl = document.getElementById("start-screen");
const questionsEl = document.getElementById("questions");
const questionTitleEl = document.getElementById("question-title");
const choicesEl = document.getElementById("choices");
const endScrnEl = document.getElementById("end-screen");
const finalScoreEl = document.getElementById("final-score");
const feedbackEl = document.getElementById("feedback");

// Inputs
const initialsInput = document.getElementById("initials");

// Sounds
const incorrectSound = new Audio("assets/sfx/incorrect.wav");
const correctSound = new Audio("assets/sfx/correct.wav");

// Buttons
const startBtn = document.getElementById("start");
const submitBtn = document.getElementById("submit");
