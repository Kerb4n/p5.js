let bubbles = [];
function setup() {
  createCanvas(400, 400);
  
}
function draw() {
  background(0);
  for (let i = 0; i<bubbles.length; i++){
    bubbles[i].show();
    bubbles[i].move();
  }
}
class Bubble{
  constructor(x ,y, alpha){
    this.x = x;
    this.y = y;
    this.alpha = 100;
  }
  show() {
    if (this.alpha > 0){
    noStroke();
    strokeWeight(4);
    fill(0,255,0,this.alpha);
    ellipse(this.x, this.y, 25, 25);
    this.alpha = this.alpha - 1;
    }
    else {
      
    }
  }
  move() {
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }
}
function mouseMoved() {
     bubbles.push(new Bubble(mouseX, mouseY));
}
