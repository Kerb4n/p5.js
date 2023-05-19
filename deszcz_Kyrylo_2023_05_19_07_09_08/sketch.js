kordyx = [];
kordyy = [];
let speedy=6;

function setup() {
  createCanvas(400, 400);
  for(i=0;i<20;i++){
    kordyx.push(random(0,400));
    kordyy.push(random(-60,400))
  }
}

function draw() {
    background(9,5,20);
  deszcz();
  
}
function deszcz(){
  for(i=0;i<kordyx.length;i++){
  fill("grey");
  noStroke();
  circle(kordyx[i],kordyy[i],10);
  kordyy[i]=kordyy[i]+10;
    kordyx[i]=kordyx[i]-1;
  if(kordyy[i]>405)
  {
    kordyy[i] = 0;
    x = random(0,400);
  }
  if(kordyy[i]<25)
    {
      speedy = 4;
    }
  if(kordyx[i]<=-5){
    kordyx[i]=405;
  }
  }
}