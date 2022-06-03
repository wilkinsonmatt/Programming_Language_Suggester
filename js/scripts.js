
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



