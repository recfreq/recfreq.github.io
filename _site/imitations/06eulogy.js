var lines = document.getElementsByClassName("ref");  //overwriting bolded.
var typeTime = 80;
var anim = false;

for(k=0; k<lines.length; k++) {
  lines[k].addEventListener("mouseover", function(event) {
    if(anim) {
      return;
    } else {
      anim = true;
    }
    // text to animate
    var dataText = event.target.textContent;
    event.target.innerHTML = "";
    event.target.style.opacity = "1";
    // start the text animation.
    typeWriter(dataText, event.target, 0);
    // return to normal afterwards.
    setTimeout(function() {
      event.target.innerHTML = dataText;  //put old text back.
      event.target.style.opacity = "0";
      anim = false;
    }, typeTime*(dataText.length+4));
  });
}

// keeps calling itself until the text is finished.
function typeWriter(text, elem, i) {
  if(i < text.length) {
    // add next character.
    elem.innerHTML = text.substring(0, i+1);

    // wait for a while and call this function again for next character.
    setTimeout(function() {
      typeWriter(text, elem, i+1);
    }, typeTime);
  }
}
