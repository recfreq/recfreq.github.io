var canvas;
var circx = [], circy = [], circr = [];
var posx = 0, posy = 0;
var lenx = 0, leny = 0;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('display', 'block');
	canvas.style('z-index', '1');
}

function draw() {
	noFill();
	stroke(254,255,237);
	strokeWeight(2);
	if(circx.length != 0 && circy.length != 0) {
		for(var k = 0; k < circx.length; k++) {
			ellipse(circx[k], circy[k], 2*circr[k], 2*circr[k]);
		}
	}
	if(posx < circx[0]+lenx) {
		posx++;
		line(circx[0]+circr[0], circy[0], posx, posy);
	} else if(circx.length < 2) {
		circr[1] = random(3, 10);
		circx[1] = posx+circr[1]; circy[1] = circy[0];
		posx = circx[1];
		posy = circy[1]+circr[1];
	} else if(posy < circy[0]+leny) {
		posy++;
		line(circx[1], circy[1]+circr[1], posx, posy);
	} else if(circx.length < 3) {
		circr[2] = random(3, 10);
		circx[2] = circx[1]; circy[2] = posy+circr[2];
	}
}

function mousePressed() {
	clear();
	circx = []; circy = []; circr = [];
	circx[0] = mouseX;	circy[0] = mouseY;
	circr[0] = random(3, 10);
	lenx = random(50, 300); leny = random(50, 150);
	posx = circx[0]+circr[0];
	posy = circy[0];
	print(circx[0] + ', ' + circy[0] + ': ' + circr[0]);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}