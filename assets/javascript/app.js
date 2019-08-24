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
        //console.log(seconds);
      }
      else {
        clearInterval(counter);
        counterStarted = false;
        seconds = 60;
        }
      },1000)
    }
  };

//function for submitting answers
function myButton() {
  //grab the line item that is correct
  //look for attribute of correct
  //if the attribute of that line item is correct, you need to add to the correct answer count

/*   $("input").each(function(i) {
    console.log("Value of first condition: " + $(this).attr("data-correct"))
    console.log("First condition: " + $("li").data("data-correct") === "true");
    console.log("Second condition: " + $('input[type="checkbox"]').prop("checked"));
    if (($("input").attr("data-correct") === "true" && ($('input[type="checkbox"]').prop("checked")))) {
    //if (this.data-correct === "true") {
      correct = $("input:checked").length;
      console.log("Correct: " + correct);
    }
    else {
       wrong = 6 - correct;
       console.log("Wrong: " + wrong);
    }
  }); */
/*   right = $("input:checkbox").length;
  $("#correct").text(right); */
  //if ($("#checkbox").is(":checked")) {
  //if ($("#checkbox").prop("checked")) {
  //for (var i = 0; i <=6; i++)
  //if (document.getElementById("#correct").checked) {
  // correct = $("#correct").length;
  //correct++;
  //console.log("You have " + correct + "right");
  // else wrong++;
  //console.log("You have " + wrong + "wrong");
  //console.log(right);
  clearInterval(counter);
  counterStarted = false;
  seconds = 60;

};

$("#questions").on("click", function () {
  myTimer();
});

$('input[type="checkbox"]').on('change', function() {
    $('input[name="' + this.name + '"]').not(this).prop('checked', false);
});

$("#button").on("click", function() {
  myButton();
});

});