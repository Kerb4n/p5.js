var buttonX = 200;
var buttonY = 200;
var distanceToButton = 0.0;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
 
  /*rect(100,165,220,50)
  textSize(30)
  fill(0,0,0)
  text("kliknij mnie",120,200)*/
  textSize(10)
  fill(0,0,0)
  text("Spróbuj kliknąć przycisk", 10,10)
  fill(0,255,68)
  distanceToButton = dist(buttonX,buttonY,mouseX,mouseY);
  ellipse(buttonX,buttonY,50,50);
  
  if(distanceToButton <50){  
		buttonX = random(width);
		buttonY = random(height);
    
    
    }
  if(mouseIsPressed == true  && mouseY>160 && mouseY<245 && mouseX>150 && mouseX<200){
    background("orange");
    textSize(20)
    fill(0,0,0)
    text("Bardzo dobrze",100,200)
    
  }
  
  
  
}