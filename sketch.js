var ball,database;
var position;

var gameState=0;
var form,game;
var playerCount;
var player;
var allPlayers;
var ObstacleImg;
var obstacleG
var ob
var a,b
var car1,car2,car3,car4;
var cars=[];
var x,y;
y=0;
var finishedPlayer= 0
var car1Img,car2Img,car3Img,car4Img,trackImg;
var space;
var passedFinish=false;
var slidesound;
var goldImg,silverImg,bronzeImg

function preload(){
   car1Img=loadImage('images/car1.png');
   car2Img=loadImage('images/car2.png');
   car3Img=loadImage('images/car3.png');
   car4Img=loadImage('images/car4.png');
   trackImg=loadImage('images/track.jpg');     
   ObstacleImg = loadImage("images/f1.png")
slidesound = loadSound("sound/sliding.mp3")
goldImg = loadImage('images/gold.png')
silverImg = loadImage('images/silver.png')
bronzeImg = loadImage('images/bronze.png')

}

function setup(){
    createCanvas(displayWidth,displayHeight);
    
    database=firebase.database();
x = random(200,950)
y = random(-height*4,height-300)
    game=new Game();
    game.getState();
    game.start();
    ob = createSprite(x,y)
    ob.addImage(ObstacleImg)
    obstacleG = new Group()
   
    for(i=0;i<5;i++){
 w=random(200,950);
  h=random(-height*4,height-300) 
  ob = createSprite(x,y)
    ob.addImage(ObstacleImg)
 obstacleG.add(ob) 

}


}

function draw(){

  if(playerCount==4){
      game.update(1);
  }
  if(gameState===1){
      clear();
      game.play();
      
  }
  if(finishedPlayer===4){

    game.update(2)
  }
//   if(gameState===2){
//      game.end();
//   }
    

}



