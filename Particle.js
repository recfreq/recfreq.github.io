function Particle() {
  this.pos = createVector(random(0, width), 0);
  this.vel = createVector(random(-0.5, 0.5), 1);
  this.acc = createVector(0, 0.05);
  this.rad = 10;
  this.fade = 150;

  this.update =  function() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.fade -= 0.8;
  }

  this.display = function() {
    noStroke();
    fill(255, this.pos.y, 0, this.fade);
    ellipse(this.pos.x, this.pos.y, this.rad, this.rad);
  }
}