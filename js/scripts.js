
/** Uses logic to see which programming lanuage the user should learn based on their answers */
function logicBoard(A, B, C, D, E) {
  if (A === 1) {
    if (B === 1) {
      return "Ruby";
    } else {
      return "Swift";
    }
  } 
  else if (A === 2) {
    if (B === 1) {
      return "Go";
    } 
    else {
      return "Python";
    }
  } 
  else {
    return "Rust";
  }
}

/** checks to see if user answered all the questions */
function allAnwersSubmittedCheck(A,B,C,D,E) {
  if (A === 0 || B === 0 || C === 0 || D === 0 || E === 0) {
    return false;
  } else {
    return true; 
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
    let result = allAnwersSubmittedCheck(answerOne, answerTwo, answerThree, answerFour, answerFive);
    
    if (result === true) {
      result = logicBoard(answerOne, answerTwo, answerThree, answerFour, answerFive);
      $("#output").text("Your programming language is " + result + "!");
    } else {
      $("#output").text("Please answer all questions before submitting!");
    }
  });
});

