//script for showing GPT-2 poetry on hover.

var gpt2 = document.getElementById("gpt2");
gpt2.addEventListener("mouseover", function() {
    document.getElementById("orig").style.opacity = 0;
    document.getElementById("gpt2-tit").style.fontWeight = "bold";
    document.getElementById("orig-tit").style.fontWeight = "normal";
});
gpt2.addEventListener("mouseout", function() {
    document.getElementById("orig").style.opacity = 1;
    document.getElementById("gpt2-tit").style.fontWeight = "normal";
    document.getElementById("orig-tit").style.fontWeight = "bold";
});