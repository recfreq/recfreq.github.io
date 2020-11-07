document.getElementById("M4").addEventListener("mouseover", function(event){
  // text to animate and time to type single char.
  var dataText = "Subsume Maria.";
  var typeTime = 150;

  // keeps calling itself until the text is finished.
  function typeWriter(text, i) {
    if(i < text.length) {
      // add next character with cursor "_".
      document.querySelector("#M4").innerHTML = text.substring(0, i+1) +'_<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character.
      setTimeout(function() {
        typeWriter(text, i + 1);
      }, typeTime);
    }
  }
  // start the text animation.
  typeWriter(dataText, 0);
  // return to normal afterwards.
  setTimeout(function() {
    document.querySelector("#M4").innerHTML = dataText;
  }, typeTime*(dataText.length+1));
});