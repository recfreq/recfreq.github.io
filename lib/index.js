$(function() {
	var count = 0;

    $(".draggable").draggable({
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

var $grid = $('.grid').isotope({
  itemSelector: '.draggable',
  //layoutMode: 'fitRows',
  masonry: {},  //stamp only works with masonry.
  stamp: '.stamp'  //keeps a div from being moved or filtered.
});

$('.filters-select').on('change', function() {
  var filterValue = this.value;
  $grid.isotope({ filter: filterValue });
});

$grid.isotope({ filter: ".featured" });