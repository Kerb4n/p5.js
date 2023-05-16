class karta{
  
  constructor(x,y,id,karta){
 
    this.karta=karta;
    this.id=id;
    this.pokaz=false;
    
    this.x = x;
    this.y = y;
    
    
  }
  
  sprawdzx(){
    if(mouseX>this.x && mouseX<this.x+175 && mouseY>this.y && mouseY<this.y+150){
    return true;
    }
  }
  
  display(){
      if(!this.pokaz){
        fill("black");
        rect(this.x,this.y,150,175);
        if(mouseIsPressed && !klik && this.sprawdzx() && moz && tab[0][0] !==this.id && tab[0][1] !==this.id){          
          wpisz(this.id,this.karta);
          
        }        
      }
      else{
        
        image(this.karta,this.x,this.y,150,175);
        
      }
  }
  
  
  
}
