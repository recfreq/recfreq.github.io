var canvas;
var xpos = 0, ypos = 0, rad = 0;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('display', 'block');
	canvas.style('z-index', '1');
	noFill();
	stroke(254,255,237);
	strokeWeight(2);
}

function draw() {
	if(xpos != 0 && ypos != 0) {
		ellipse(xpos, ypos, rad, rad);
	}
}

function mousePressed() {
	clear();
	xpos = mouseX;
	ypos = mouseY;
	rad = random(5, 20);
	print(xpos + ', ' + ypos + ': ' + rad);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}