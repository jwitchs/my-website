$(document).ready(function() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  $("#submit").click(function() {
    const guess = $("#guess").val();
    if (guess == randomNumber) {
      $("#result").text("You won! The number was " + randomNumber);
    } else {
      $("#result").text("Sorry, try again");
    }
  });
});
