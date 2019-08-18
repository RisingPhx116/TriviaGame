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
    counterStarted = true;
    counter = setInterval(function() {
      if (seconds >= stop) {
        span = document.getElementById("time");
        span.innerHTML = seconds;
        //document.getElementById("#timer").innerHTML = seconds;
        seconds--;
        console.log(seconds);
      }
      else {
        clearInterval(counter);
        counterStarted = false;
        seconds = 60;
        }
      },1000)
    }
  }

$("#triviaBox").on("click", function () {
  myTimer();
});

$('input[type="checkbox"]').on('change', function() {
    $('input[name="' + this.name + '"]').not(this).prop('checked', false);
});

});