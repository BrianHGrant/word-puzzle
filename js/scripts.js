$(document).ready(function(){
  $("#puzzleForm").submit(function(){
    var userInput = $("input#stringInput").val();
    var inputLetters = userInput.split("");
    alert(inputLetters);
    // debugger;
    for (var index = 0; index < inputLetters.length; index++) {
      var indexLetters = inputLetters[index];
      if (indexLetters === "a" || indexLetters ==="e" || indexLetters ==="i" || indexLetters ==="o" || indexLetters ==="u") {
        inputLetters[index] = '-';
        alert(inputLetters);
      }
    }

  });
});

//
//
