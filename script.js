/*

Create templates for HTML, JS, and CSS -- DONE!

Start Button

Create data structure that holds questions and asnwers

Timer 

Score display - data structure to keep track of highscores 

Process to show questions and allow selection of answers

End or Repeat Game button
*/

// Data structure for Q&A
// Question, possible answers, indication of correct answer

var questions = [
    {
        q: 'What is your favorite color?',
        a: ['Red','Blue','Yellow','Rainbow'],
        c: 1
    },
    {
        q: 'What is your favorite food',
        a: ['Cake','Steak','Rice','Fish'],
        c: 1
    },
];

function initialize() {

    document.getElementById("quiz").innerHTML = "<button onclick='start();'>Start Code Quiz</button>";

}

function start() {
    
    // loop to show the questions and answers
    var i = 0;
    //for(i =0; i < questions.length; i++) {
        var html = "";
        var current_q = questions[i];
        html += `<h2>${current_q.q}</h2>`;
        // add the answers (as buttons) buttons need listener...
        for(b = 0; b < current_q.a.length; b++) {
            html += `<button>${current_q.a[b]}</button>`;
        }
        // display in the quiz div
        document.getElementById('quiz').innerHTML = html;

    //}

    

}

initialize();