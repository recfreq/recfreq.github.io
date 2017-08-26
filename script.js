var particles = [];

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('animation');
	angleMode(DEGREES);
}

function draw() {
	background(255);
	particles.push(new Particle());

	for(var i=0; i<particles.length; i++) {
		particles[i].update();
		particles[i].display();
		if(particles[i].pos.y>windowHeight) {
			particles.pop(i);
		}
		for(var j=0; j<particles.length; j++) {
			stroke(255, particles[i].pos.y, 0, particles[i].fade);
			if(dist(particles[i].pos.x, particles[i].pos.y, 
				particles[j].pos.x, particles[j].pos.y) < 30) {
				line(particles[i].pos.x, particles[i].pos.y, 
					particles[j].pos.x, particles[j].pos.y);
			}
		}
	}
}