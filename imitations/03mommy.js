document.getElementById("leave").style.transformOrigin = "0 0";

document.getElementById("end").addEventListener("mouseover", function(event) {
  var elem = document.getElementById("leave");
  var rot = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (rot > 20) {
      document.getElementById("light4").style.animation = "light4 2s linear infinite";
      clearInterval(id);
    } else {
      rot = rot + 0.5;
      elem.style.transform = "rotate("+ rot + "deg)";
    }
  }
});

document.getElementById("end").addEventListener("mouseout", function(event) {
  var elem = document.getElementById("leave");
  elem.style.transform = "rotate(0deg)";
  document.getElementById("light4").style.animation = "idle 2s linear infinite";
});