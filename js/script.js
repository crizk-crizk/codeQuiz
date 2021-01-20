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

var timerCountDown = 60;
var countdown = "";

var questions = [
  {
    q: "What is your favorite color?",
    a: ["Red", "Blue", "Yellow", "Rainbow"],
    c: 0,
  },
  {
    q: "What is your favorite food",
    a: ["Cake", "Steak", "Rice", "Fish"],
    c: 2,
  },
  {
    q: "What is your favorite city",
    a: ["London", "Paris", "New York", "Dubai"],
    c: 1,
  },
  {
    q: "What is your favorite animal",
    a: ["bird", "dog", "cat", "rat"],
    c: 3,
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

  countdown = setInterval(function () {
    document.getElementById("timer").innerHTML =
      "<h2>" + timerCountDown + "</h2>";
    timerCountDown--;
  }, 1000);
}

function check_answer(questionNumber, answerIndex) {
  //prompt(questionNumber + " " + answerIndex);
  // For the incoming question number, see if the correct answerIndex was clicked.
  var current_q = questions[questionNumber];

  if (current_q.c === answerIndex) {
    console.log("correct");
    document.getElementById("message").innerHTML =
      "<h2>Correct! Good job!</h2>";

    // Play sound
    // Show correct
  } else {
    // play sound
    // show "Wrong!"
    document.getElementById("message").innerHTML = "<h2>Wrong! Try again</h2>";

    // subtract some time from the timer....
  }

  // Proceed to and display the next question... (but was this the last question?)
  if (questions.length > questionNumber + 1) {
    showQuestion(questionNumber + 1);
  } else {
    console.log("no more questions");
    clearInterval(countdown);
    endQuiz();
  }
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

function endQuiz() {
  var html = "";
  html += `<h2>You have reached the end of the quiz!</h2>
  <h4>Your Initials:</h4>
  <input id="initials" type="text">
  <button onclick="submit_score()">Submit</button>
`;

  document.getElementById("quiz").innerHTML = html;
}

function submit_score() {
  console.log("inside score");
  // set item on localstorage

  var userInitial = document.getElementById("initials").value;

  var userScore = timerCountDown;
  //ensure that JSON.parse never gets undefined
  var allData = localStorage.getItem('allData') || "[]";
  allData = JSON.parse(allData);
  // put all records into one variable
  allData.push( {
    [userInitial]: userScore,
  }
  );

  localStorage.setItem("allData", JSON.stringify(allData));

  // location.href = "./scores.html";
}

initialize();
