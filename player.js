class Player{
    constructor(z){
       this.player;
       this.xdir = 15;
       this.ydir = 195;
       this.zdir = z

       this.playermodel = loadModel("objects/spaceCraft.obj",true);
    }

    jump(){
      if(this.ydir === 195)
      this.ydir -= 250;
    }

    fall(){
      if(this.ydir < 195 ){
        this.ydir += 5;
      }else if(this.ydir === 195){
        this.ydir += 0;
      }
    }

    setDir(x,y){
      this.xdir = x;
      this.ydir = y;
    }

    display(){
      colorMode(RGB);
      push();
      scale(0.8);
      translate(this.xdir,this.ydir,this.zdir);
      rotateX(millis()/500)
      fill(100,100,100);
      stroke(51);      
      model(this.playermodel);
      pop();
    }
}