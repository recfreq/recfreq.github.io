let N = 31;
let W = 100;
let img = [];
//1-2-4-8-16 power of two hierarchy classification starting from me.
//sum to 31, a prime number; 31x16 is a perfect number.
let txt = ['me', 'creative', 'research',
'narrative', 'interactive', 'participatory', 'empirical',
'machines', 'data', 'communicative', 'performances',
'audience-center', 'subject-center', 'sociology', 'natural science',
'smart devices', 'biometric wearables', 'brain EEG', 'data viz',
'machine communication', 'multi-player games', 'cross discpline show', 'fashion show',
'universal design', 'vulnerable groups VR', 'workshops', 'teaching',
'behavioral psychology', 'user experience', 'neuroscience', 'computation'];

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let k = 0; k < N; k++) {
		img[k] = loadImage('images/' + k + '.png');
	}
	textSize(14);
	fill(127);
}

function draw() {
	background(255);
	let pos = (mouseX + mouseY)/(windowWidth + windowHeight);
	if (pos < 0.2) {
		image(img[0], windowWidth/2-W/2, windowHeight/2-W/2, W, W);
		text(txt[0], windowWidth/2-W/2, windowHeight/2+W/2, W, W);
	} else if (pos < 0.4) {
		image(img[1], windowWidth/3-W/2, windowHeight/3-W/2, W, W);
		text(txt[1], windowWidth/3-W/2, windowHeight/3+W/2, W, W);
		image(img[2], windowWidth*2/3-W/2, windowHeight*2/3-W/2, W, W);
		text(txt[2], windowWidth*2/3-W/2, windowHeight*2/3+W/2, W, W);
	} else if (pos < 0.6) {
		image(img[3], windowWidth*2/4-W/2, windowHeight*1/4-W/2, W, W);
		text(txt[3], windowWidth*2/4-W/2, windowHeight*1/4+W/2, W, W);
		image(img[4], windowWidth*1/4-W/2, windowHeight*2/4-W/2, W, W);
		text(txt[4], windowWidth*1/4-W/2, windowHeight*2/4+W/2, W, W);
		image(img[5], windowWidth*2/4-W/2, windowHeight*3/4-W/2, W, W);
		text(txt[5], windowWidth*2/4-W/2, windowHeight*3/4+W/2, W, W);
		image(img[6], windowWidth*3/4-W/2, windowHeight*2/4-W/2, W, W);
		text(txt[6], windowWidth*3/4-W/2, windowHeight*2/4+W/2, W, W);
	} else if (pos < 0.8) {
		image(img[7], windowWidth*1/5-W/2, windowHeight*1/5-W/2, W, W);
		text(txt[7], windowWidth*1/5-W/2, windowHeight*1/5+W/2, W, W);
		image(img[8], windowWidth*2/5-W/2, windowHeight*2/5-W/2, W, W);
		text(txt[8], windowWidth*2/5-W/2, windowHeight*2/5+W/2, W, W);
		image(img[9], windowWidth*2/5-W/2, windowHeight*3/5-W/2, W, W);
		text(txt[9], windowWidth*2/5-W/2, windowHeight*3/5+W/2, W, W);
		image(img[10], windowWidth*1/5-W/2, windowHeight*4/5-W/2, W, W);
		text(txt[10], windowWidth*1/5-W/2, windowHeight*4/5+W/2, W, W);
		image(img[11], windowWidth*3/5-W/2, windowHeight*3/5-W/2, W, W);
		text(txt[11], windowWidth*3/5-W/2, windowHeight*3/5+W/2, W, W);
		image(img[12], windowWidth*4/5-W/2, windowHeight*4/5-W/2, W, W);
		text(txt[12], windowWidth*4/5-W/2, windowHeight*4/5+W/2, W, W);
		image(img[13], windowWidth*3/5-W/2, windowHeight*2/5-W/2, W, W);
		text(txt[13], windowWidth*3/5-W/2, windowHeight*2/5+W/2, W, W);
		image(img[14], windowWidth*4/5-W/2, windowHeight*1/5-W/2, W, W);
		text(txt[14], windowWidth*4/5-W/2, windowHeight*1/5+W/2, W, W);
	} else {
		//index goes from 15 to 30.
		for (let k = 0; k < N-15; k++) {
			let w = k%4 + 1, h = ceil((k+1)/4);
			image(img[k+15], windowWidth*w/5-W/2, windowHeight*h/5-W/2, W, W);
			text(txt[k+15], windowWidth*w/5-W/2, windowHeight*h/5+W/2, W, W);		
		}
	}
}

function mousePressed() {

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}