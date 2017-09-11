var song;
var amp;
var volhistory = [];
var buttonsize = 18;

function loaded() {
	song.play();  //Play when it has been loaded
}

function setup() {
	var canvas = createCanvas(150, 150);
	canvas.parent('aud-frame');
	song = loadSound('audio/livity.mp3', loaded);  //Run func when finished loading

	canvas.style("border-radius", "150px");
	angleMode(DEGREES);
	amp = new p5.Amplitude();
}

function draw() {
	background(126, 126, 126, 10);
	translate(width/2, height/2);

	var vol = amp.getLevel();
	volhistory.push(vol); 

	stroke(255);
	noFill();
	beginShape();
	for(var i = 0; i < 360; i++){
	  	var r = map(volhistory[i], 0, 1, 10, 150);
	  	var x = r * cos(i);
	  	var y = r * sin(i);
	  	vertex(x, y);
	}
	// for(var i = 0; i < volhistory.length; i++){
	//  	var y = map(volhistory[i], 0, 1, height, 0);
	//  	vertex(i, y);
	// }
	endShape();
	
	if(volhistory.length>360) {
		volhistory.splice(0, 1);
	}

	if(song.isPlaying()) {
		fill(40, 200, 120);
	} else {
		fill(200, 40, 120);
	}
	noStroke();
	ellipse(0, 0, buttonsize, buttonsize);
}

function mousePressed() {
	if (mouseX > width/2-buttonsize && mouseX < width/2+buttonsize
		&& mouseY > height/2-buttonsize && mouseY < height/2+buttonsize) {
		if(song.isPlaying()) {
	 		song.pause();
 		} else {
 			song.play();
 		}
 	}
}
