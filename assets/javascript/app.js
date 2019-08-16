$(document).ready(function () {
//variables for timer
var seconds = 60;
var stop = 0;
var counterStarted = false;
var counter;

//variables for right or wrong guess total
var correct = 0;
var wrong = 0;

//function for counter
function myTimer() {
  if (counterStarted === false) {
    counterstarted = true;
    counter = setInterval(function() {
      if (seconds <= stop) {
        document.getElementById("#timer").innerHTML = seconds;
        seconds--;
      }
      else {
        clearInterval(counter);
        counterStarted = false;
        seconds = 60;
        }
      },1000)
    }
  }
});