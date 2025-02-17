//based on wordfall.js
// $(document).ready(function(){
//   $("#L1").wordFall();
// });

$("#L1").hover(function() {
  $("#L1").wordFall();
});
$("#L2").hover(function() {
  $("#L2").wordFall();
});
$("#L3").hover(function() {
  $("#L3").wordFall();
});
$("#L4").hover(function() {
  $("#L4").wordFall();
});
$("#L5").hover(function() {
  $("#L5").wordFall();
});
$("#L6").hover(function() {
  $("#L6").wordFall();
});
$("#L7").hover(function() {
  $("#L7").wordFall();
});
$("#L8").hover(function() {
  $("#L8").wordFall();
});
$("#L9").hover(function() {
  $("#L9").wordFall();
});
$("#L10").hover(function() {
  $("#L10").wordFall();
});
$("#L11").hover(function() {
  $("#L11").wordFall();
});
$("#L12").hover(function() {
  $("#L12").wordFall();
});
$("#L13").hover(function() {
  $("#L13").wordFall();
});
$("#L14").hover(function() {
  $("#L14").wordFall();
});
$("#L15").hover(function() {
  $("#L15").wordFall();
});
$("#L16").hover(function() {
  $("#L16").wordFall();
});
$("#L17").hover(function() {
  $("#L17").wordFall();
});

var anim = false;  //currently animating or not.

function divideTextInSpans(text){
   return $.map(text.split(" "), function(word){
      return "<span class='word'>"+word+"</span>";
   }).join(" ");
}

function setAnimation(elem, count) {
  $(elem).css("position", "absolute");
  $(elem)[0].style[Modernizr.prefixed('animation')] = "wordfall"+count+" 1s";
  $(elem)[0].style[Modernizr.prefixed('animation-fill-mode')] = "forwards";
}

function stopAnimation(elem) {
  $(elem)[0].style["position"] = "relative";
  $(elem)[0].style[Modernizr.prefixed('animation')] = "none";
}

(function ($) {
  $.fn.wordFall = function(options) {
    var settings = $.extend({
      'paddingRight': 0,
      'paddingBottom': 0,
      'fallIntervalSecs': 0.5
    }, options);
    /* Internal settings */
    var multiplier = 360;
    var adder = 720;

    var style = document.documentElement.appendChild(document.createElement("style"));
    return this.each(function(){
      if(anim) return;  //currently animating, don't change.
      anim = true;
      var origInnerHtml = $(this).text();
      console.log(origInnerHtml);
      var newInnerHtml = divideTextInSpans(origInnerHtml);
      $(this).html(newInnerHtml);
      $(this).children().each(function(count){
        var rotateDegree = Math.random()*multiplier + adder;
        var index = Modernizr._prefixes.length;
        var rule = "";
        var elem = $(this);
        var offset = $(elem).offset();
        console.log(offset);
        var targetTop = $(document).height() -
                          offset.top -
                          settings.paddingBottom;
        var targetLeft = offset.left + settings.paddingRight;

        while(index--){
          rule="@"+Modernizr._prefixes[index]+"keyframes wordfall"+count+"\
          { from{ \
            top:"+offset.top+"px; \
            left:"+offset.left/3+"px; \
            } \
            to{ \
            top:"+targetTop+"px; \
            left:"+targetLeft/3+"px; \
            -webkit-transform:rotate("+rotateDegree+"deg); \
            -moz-transform:rotate("+rotateDegree+"deg); \
            -transform:rotate("+rotateDegree+"deg); \
            } \
          } ";
          try {
            style.sheet.insertRule(rule);
          } catch(err){}
        }
        var interval = (count * settings.fallIntervalSecs) * 1000;
        setTimeout(function(){
          setAnimation(elem, count);
        },interval);
        setTimeout(function(){
          stopAnimation(elem);
        },6000); //strict wait of 6 sec to terminate animation.
      });
      setTimeout(function(){
        anim = false;
      },($(this).children().length)*500);  //0.5*1000 as above, wait for last interval
    });
  };
})(jQuery);
