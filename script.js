/*
-Create templates for HTML, JS, and CSS -- DONE!
-Start Button
-Create data structure that holds questions and asnwers
-Timer 
-Score display - data structure to keep track of highscores 
-Process to show questions and allow selection of answers
-End or Repeat Game button
*/
// Data structure for Q&A
// Question, possible answers, indication of correct answer

var questions = [
  {
    q: "What is your favorite color?",
    a: ["Red", "Blue", "Yellow", "Rainbow"],
    c: 1,
  },
  {
    q: "What is your favorite food",
    a: ["Cake", "Steak", "Rice", "Fish"],
    c: 1,
  },
  {
    q: "What is your favorite city",
    a: ["London", "Paris", "New York", "Dubai"],
    c: 1,
  },
];

function initialize() {
  document.getElementById("quiz").innerHTML =
    "<button onclick='start();'>Start Code Quiz</button>";
}

function start() {
  // loop to show the questions and answers
  var i = 0; // start with the first question
  showQuestion(i);
  // start timer
  // .....
}

function check_answer(questionNumber, answerIndex) {
  //prompt(questionNumber + " " + answerIndex);
  // For the incoming question number, see if the correct answerIndex was clicked.
  var current_q = questions[questionNumber];
  if (current_q.c === answerIndex) {
    // Play sound
    // Show correct
  } else {
    // play sound
    // show "Wrong!"
    // subtract some time from the timer....
  }

  // Proceed to and display the next question... (but was this the last question?)
  showQuestion(questionNumber + 1);
}

function showQuestion(i) {
  var html = "";
  var current_q = questions[i];
  html += `<h2>${current_q.q}</h2>`;
  // add the answers (as buttons) buttons need listener...
  for (b = 0; b < current_q.a.length; b++) {
    html += `<button onclick="check_answer(${i},${b})">${current_q.a[b]}</button>`;
  }
  // display in the quiz div
  document.getElementById("quiz").innerHTML = html;
}

initialize();
