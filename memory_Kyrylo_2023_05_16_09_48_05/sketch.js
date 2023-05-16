let zdj1,zdj2,zdj3,klik,karty_zdj
let moz = true;
let tab = [0,0]
let karty = [0,0,0,0,]
let punkty=0;


function setup() {
  createCanvas(600, 500);
  
  do{
    x = floor(random(0,3));
  }while(karty_zdj[x][1] == 0)
    
  karty_zdj[x][1]--;
  
  karty[0]=new karta(25,12.5,0,karty_zdj[x][0]);
  
  do{
    x = floor(random(0,3));
  }while(karty_zdj[x][1] == 0)
    
  karty_zdj[x][1]--;
  
  karty[1]=new karta(225,12.5,1,karty_zdj[x][0]);
  
  do{
    x = floor(random(0,3));
  }while(karty_zdj[x][1] == 0)
    
  karty_zdj[x][1]--;
  
  karty[2]=new karta(25,212.5,2,karty_zdj[x][0]);
  
  do{
    x = floor(random(0,3));
  }while(karty_zdj[x][1] == 0)
    
  karty_zdj[x][1]--;
  
  karty[3]=new karta(225,212.5,3,karty_zdj[x][0]);
  
  do{
    x = floor(random(0,3));
  }while(karty_zdj[x][1] == 0)
    
  karty_zdj[x][1]--;
  
  karty[4]=new karta(425,12.5,4,karty_zdj[x][0]);
  
  do{
    x = floor(random(0,3));
  }while(karty_zdj[x][1] == 0)
    
  karty_zdj[x][1]--;
  
  karty[5]=new karta(425,212.5,5,karty_zdj[x][0]);
}


function preload(){
  zdj1= loadImage("c.jpg")
  zdj2= loadImage("t.jpg")
  zdj3= loadImage("dc.jpg")
  karty_zdj = [[zdj1,2],[zdj2,2],[zdj3,2]];
}

function draw() {
  background(50);
  if(punkty<3){
  for(let y in karty){
    karty[y].display()
  }
  if(mouseIsPressed){
    klik = true;
  }
  else{
    klik = false;
  }
  textSize(125);
  textAlign(CENTER,CENTER,CENTER);
  fill(255);
  stroke(0)
  text(punkty,width/2,50);
  }else{
  textSize(80);
  textAlign(CENTER,CENTER);
  fill(255);
  stroke(0);
  strokeWeight(6)
    background("red")
  text("Wygrana",width/2,height/2);
  }
}

function wpisz(w1,w2){
  if(tab[0] == 0){
    tab[0] = [w1,w2]
    karty[w1].pokaz = true;
  }else if(tab[1] == 0){
    tab[1] = [w1,w2]
    karty[w1].pokaz = true;
  }
  if(tab[1] !== 0){
  
    moz = false;
    setTimeout(() =>{
      
      moz = true;
      
      if(tab[0][1] !== tab[1][1]){
        karty[tab[0][0]].pokaz = false;
        karty[tab[1][0]].pokaz = false;
      }else{
        punkty++;
      }
      
      tab = [0,0]
      
    },1000);
  }
}