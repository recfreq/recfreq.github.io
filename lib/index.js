$(function() {
	var count = 0;
    $(".draggable").draggable({  //drag interactions on each element.
    	stop: function() {
    		$(this).css('opacity','1.0');
    	},
    	drag: function() {
    		count += 7;
            $(this).children("img").css('-webkit-transform', 'rotate(' + count + 'deg)');
    	},
    	//axis: "x",
    	opacity: 0.5  //while being dragged around.
    });
    $(document).tooltip({  //title for each project.
        position: {
            my: "center bottom-20",
            at: "center top"
        },
        track: true
    });
});

var $grid = $('.grid').isotope({  //using isotope to filter projects.
  itemSelector: '.draggable',
  //layoutMode: 'fitRows',
  masonry: {},  //stamp only works with masonry.
  stamp: '.stamp'  //keeps a div from being moved or filtered.
});

$('.filters-select').on('change', function() {  //select menu.
  var filterValue = this.value;
  $grid.isotope({ filter: filterValue });
});

$grid.isotope({ filter: ".featured" });  //initial filter.

//for mobile
function updateForMobile(x) {
  if (x.matches) { // If media query matches
    $grid.isotope({ filter: ".installation" });  //To get even number.
    var header = document.getElementById("header");
    header.style.padding = "1%";
    header.style.width = "35.5%";
    header.style.border = "1px solid rgba(0, 0, 0, 0.3)"; 
    header.innerHTML = "hold touch to hover";
    document.body.style.overflow = "visible";
  }
}
var x = window.matchMedia("(max-width: 500px)")
updateForMobile(x) // Call listener function at run time
x.addListener(updateForMobile) // Attach listener function on state changes
//for long hold as hover on mobile, but instead use .draggable:active css.
//document.addEventListener("touchstart", function(){}, true);
window.oncontextmenu = function(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};