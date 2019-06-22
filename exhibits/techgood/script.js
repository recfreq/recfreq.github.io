$(function() {
  $(".drag").draggable();
});
$(function() {
  $(".resize").resizable();
});

//Vegas plugin for JQuery: http://vegas.jaysalvat.com/documentation/settings/
//http://vegas.jaysalvat.com/documentation/transitions/
$("body").vegas({
	timer: false,
	delay: 5000,
	transition: 'blur',
    transitionDuration: 1000,
    slides: [
        { src: "images/techgood01.jpg" },
        { src: "images/techgood02.jpg" },
        { src: "images/techgood03.jpg" },
        { src: "images/techgood04.jpg" },
        { src: "images/techgood05.jpg" },
        { src: "images/techgood06.jpg" },
        { src: "images/techgood07.jpg" },
        { src: "images/techgood08.jpg" }
    ],
    overlay: 'lib/vegas/overlays/02.png'
});