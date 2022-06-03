
function logicBoard(A, B, C, D, F) {
  if (A === 1) {
    if (B === 1) {
      return "Ruby";
    } else {
      return "swift";
    }
  } 
  else if (A === 2) {
    if (B === 1) {
      return "Go";
    } 
    else {
      return "Pyhon";
    }
  } 
  else {
    return "Rust";
  }
}



$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    const answerOne = parseInt($("#question1").val());
    const answerTwo = parseInt($("#question2").val());
    const answerThree = parseInt($("#question3").val());
    const answerFour = parseInt($("#question4").val());
    const answerFive = parseInt($("#question5").val());
    const result = logicBoard(answerOne, answerTwo, answerThree, answerFour, answerFive);
    $("#output").text(result);
  });
});