"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Rebecca Mehling
      Date: 04/10/2023  

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
let timeID;

// and the node list for questions
let questionList = document.querySelectorAll("div#quiz input");

//Step 5: Add onclickevent handler to startQuiz object, running an anonymous function 
document.getElementById("startquiz").onclick = function() {
   overlay.className = "showquiz" // set class attribute of overla object to showquiz
   timeID = window.setInterval(countdown, 1000); // repeats countain function every 1 second, and stores the id of the timmed command in the global time ID variable 
}

//create countdown function 
function countdown() {
   if (timeLeft === 0) { // If there is 0 left on the timer.... 
      window.clearInterval(timeID); // clear the timer 
      let totalCorrect = checkAnswers(); // Declare totalCorrect varialbe and set = to value returned by checkAnswers
      if (totalCorrect === correctAnswers.length) { //if all answers are correct....
         alert("Congratulations! You got 100%!"); // alert window with this message 
      } else {
         alert("You got " + totalCorrect + " out of " + correctAnswers.length) // if not all answers are correct, then display alert window with this message
      }
      timeLeft = quizTime; //reset timer to display inital quiz time 
      quizClock.value = timeLeft; // set value of quiz clock to timeLeft
      document.getElementById("overlay").className = "hidequiz"; //hide the quiz from showing. 
   } else {
      timeLeft--; // decrease the timer by 1 
      quizClock.value = timeLeft //set value of quiz clock to timeLeft 
   }

}


/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

