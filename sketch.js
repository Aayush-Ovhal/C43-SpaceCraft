var canvas;

var player;
let detailX;

var grounds = [];
var ground,ground2;

var obstacles = [];
var obstacle;

var point;

var pos = 0;

var zpos = 0;

var obstacleX = 0;

var obstacleZ = -600;


var a;
var x;

function setup(){
canvas = createCanvas(window.innerWidth,window.innerHeight,WEBGL);

player = new Player(-100);

ground = new Ground(15,250,-500);

x = 15;
a = 0;
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW && x === 15){
    x = 150;
    player.setDir(150,195);
  }else if(keyCode === RIGHT_ARROW && x === -130){
    x = 15;
    player.setDir(15,195);
  }else if(keyCode === LEFT_ARROW && x === 15){
    x = -130;
    player.setDir(-130,195);
  }else if(keyCode === LEFT_ARROW && x === 150){
    x = 15;
    player.setDir(15,195);
  }else if(keyCode === UP_ARROW){
    player.jump();
  }
}

function draw(){
background(0);

player.display();
player.fall();

if(frameCount%200 == 0){
 for(var i = 0; i < 2; i++){
  obstacle = new Obstacle(i+obstacleX+10,125,obstacleZ);
  obstacles.push(obstacle);
  a = 1;
  obstacleX += 90;
 }
}

if(obstacleX === 180){
  obstacleX = null;
}

 for(var o of obstacles){
   o.z += 5;
   o.display();
}

ground.display();

}