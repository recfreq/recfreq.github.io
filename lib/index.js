$(function() {
	var count = 0;

    $(".draggablex").draggable({
    	stop: function() {
    		$(this).css('opacity','1.0');
    	},
    	drag: function() {
    		count += 10;
    		$(this).children("img").css('-webkit-transform', 'rotate(' + count + 'deg)');
    	},
    	axis: "x",
    	opacity: 0.5
    });
    $(".draggabley").draggable({
    	stop: function() {
    		$(this).css('opacity','1.0');
    	},
    	drag: function() {
    		count += 10;
    		$(this).children("img").css('-webkit-transform', 'rotate(' + count + 'deg)');
    	},
    	axis: "y",
    	opacity: 0.5
    });
    $(document).tooltip({
        position: {
            my: "center bottom-20",
            at: "center top"
        },
        track: true
    });
});

$('.draggablex').mousedown(function() {
	$(this).css('opacity','0.5');
});
$('.draggablex').mouseup(function() {
	$(this).css('opacity','1.0');
});
$('.draggabley').mousedown(function() {
	$(this).css('opacity','0.5');
});
$('.draggabley').mouseup(function() {
	$(this).css('opacity','1.0');
});

var msgIX = 0
var msgs = new Array(
                "narrative designer",
                "neuro designer",
                "interaction designer",
                "intelligence designer",
                "speculative designer",
                "integrative designer",
                "creative designer");

function displayMessage(milliseconds) {
    if(msgIX < msgs.length){
        if(document.getElementById != null) {
            var heading = document.getElementById("logo-text-p");
            heading.firstChild.nodeValue = msgs[msgIX];
        }
        ++msgIX;
        if(msgIX >= msgs.length) {
            msgIX = 0;
        }
        window.setTimeout(function(){displayMessage(milliseconds);},milliseconds);
    }
}
