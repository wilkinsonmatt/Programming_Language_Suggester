
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
  $("form#-----").submit(function(event) {
    event.preventDefault();
    const answerOne = parseInt($("#answer1").val());
    const answerTwo = parseInt($("#answer2").val());
    const answerThree = parseInt($("#answer3").val());
    const answerFour = parseInt($("#answer4").val());
    const answerFive = parseInt($("#answer5").val());
    const result = logicBoard(answerOne, answerTwo, answerThree, answerFour, answerFive);
    $("#output").text(result);
  });
});