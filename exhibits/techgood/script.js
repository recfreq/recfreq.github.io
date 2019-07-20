$(function() {
  $(".drag").draggable();
});
$(function() {
  $(".resize").resizable();
});

var title = ["SHAMIMA: MEMORY IN MY HEART, BY RAY LC, FABEHA MONIR, ANIKA ULLAH",
"AGAIN AGAIN, BY ANDREW YOON",
"METABOLISM II, BY BOLOR AMGALAN",
"LIFE IN UNDERGROUND, BY FABEHA MONIR",
"HEALING DESTINATIONS, BY JONAH BRUCKNER-COHEN",
"THE UNSPOKEN MONUMENT, BY JUNE LEE",
"SELF PORTRAIT, BY KAT ZHANG",
"UNTITLED, BY KE DING, SARA BRYN BIRCHARD",
"PHOENIX LAMENT, BY MORRISON GONG",
"PORTAL TO MIAMI, BY PILI LOPEZ",
"WHITE TERROR, BY RICKY CAI",
"IMMERSIVE REFUGEE VR EXPERIENCE, BY RAY LC, FABEHA MONIR, ANIKA ULLAH",
"THE FUTURE OF REPRODUCTIVE LABOR, BY JUNE LEE"];

//Vegas plugin for JQuery: http://vegas.jaysalvat.com/documentation/settings/
//http://vegas.jaysalvat.com/documentation/transitions/
$("body").vegas({
	timer: false,
	delay: 5000,
	transition: 'blur',
    transitionDuration: 1000,
    slides: [
        { src: "images/RayLCFabehaMonirAnikaUllah01Shamima.jpg" },
        { src: "images/AndrewYoon01AgainAgain.jpg" },
        { src: "images/BolorAmgalan01MetabolismII.jpg" },
        { src: "images/FabehaMonir01LifeInUnderground.jpg" },
        { src: "images/JonahBrucknerCohen01HealingDestinations.jpg" },
        { src: "images/JuneLee01UnspokenMonument.jpg" },
        { src: "images/KatZhang01SelfPortrait.jpg" },
        { src: "images/KeDingSaraBrynBirchard01Untitled.jpg" },
        { src: "images/MorrisonGong01PhoenixLament.jpg" },        
        { src: "images/PiliLopez01PortalAMiMiami.jpg" },
        { src: "images/RickyCai01WhiteTerror.jpg" },
        { src: "images/RayLCFabehaMonirAnikaUllah02Rohingya.jpg" },
        { src: "images/JuneLee02FutureOfReproductiveLabor.jpg" }
    ],
    overlay: 'lib/vegas/overlays/02.png',
    animation: 'random',
    animationDuration: 6000,
    walk: function (index, slideSettings) {
        console.log("Slide index " + index + " image " + slideSettings.src);
        document.getElementById("label").innerHTML = title[index];
    }
});