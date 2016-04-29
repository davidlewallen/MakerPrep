function pattern(n) {
  var output = "";
  if(n === "1") {
    return n;
  } else {
    output = "1"
    for(var i = 1; i < Number(n); i++){
      for(var j = 0, j < Number(n) -1; j++) {
        output += "*"
      }
    }
    output += n;
  }
  return output;
}
