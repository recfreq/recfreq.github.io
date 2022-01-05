$(document).ready(function(){
  let n = 4;
  const colors = ["#acb6aa", "#C0C9D0", "#FDF4E3", "#DDD5D3"];

  let r = Math.floor((Math.random() * n));
  $("#frameContainer img").attr("src", "Img/frame"+r+".png");
  $("body").css("background-color", colors[r]);
});