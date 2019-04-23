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
	delay: 6000,
	transition: 'blur',
    transitionDuration: 1000,
    slides: [
        { src: "images/background01.jpg" },
        { src: "images/background02.jpg" },
        { src: "images/background03.jpg" },
        { src: "images/background04.jpg" },
        { src: "images/background05.jpg" },
        { src: "images/background06.jpg" },
        { src: "images/background07.jpg" },
        { src: "images/background08.jpg" },
        { src: "images/background09.jpg" },
        { src: "images/background10.jpg" },
        { src: "images/background11.jpg", transition: 'flash' },
        { src: "images/background12.jpg", transition: 'flash' }
    ],
    overlay: 'lib/vegas/dist/overlays/04.png'
});