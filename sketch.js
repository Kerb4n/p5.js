let clockFont;


function setup() {
  createCanvas(windowWidth, windowHeight);
  clockFont = loadFont("digital-7.ttf");
}



function draw() {
  background(0);
clock();
}

function clock()
{
 fill("orange");
  textFont(clockFont);
  textAlign(CENTER, CENTER);
  textSize(width/4.25);
  let Hour = hour();
  let min = minute();
  let secs = second()
  if(min < 10)
    min = "0"+min
  Hour%=12
  text(Hour+":"+min+":"+secs, width/2, height/2); 
}