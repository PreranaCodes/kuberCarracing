class Game{
   
    constructor(){}


       getState(){

         var gameStateRef= database.ref('gameState');
         gameStateRef.on("value", function(data){
            gameState= data.val();
          
            
         });

    }

   async start(){

        if(gameState===0){

            player=new Player();

            var playerCountRef=await database.ref('playerCount').once("value");

            player.getCount();
            player.getFinishedPlayers();
     
            form=new Form();
            form.display();


            car1=createSprite(375,200);
            car1.addImage(car1Img);
            car2=createSprite(575,200);
            car2.addImage(car2Img);
            car3=createSprite(775,200);
            car3.addImage(car3Img);
            car4=createSprite(995,200);
            car4.addImage(car4Img);


            cars=[car1,car2,car3,car4];

            
            

         }
        

   }

   play(){
      textSize(30);
      text('Game Start!',120,100);
      form.disappear();
       
      Player.getPlayerInfo();
      
      background("black");
      
      if(allPlayers!==undefined){

         image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
         drawSprites();

         for(var i=1;i<=4;i++){

            var playerIndex="player"+i;

            textAlign(CENTER);
            x=allPlayers[playerIndex].xPos;

            y=displayHeight-allPlayers[playerIndex].distance;
            cars[i-1].x=x;

            cars[i-1].y=y;
          
           if(player.index===i){
               push();
               fill('red');
               text(allPlayers[playerIndex].name,cars[i-1].x,cars[i-1].y+75);
               pop();
               camera.position.x=displayWidth/2;
               camera.position.y=cars[i-1].y;
              
            }
            else{
               push();
               fill('white');
               text(allPlayers[playerIndex].name,cars[i-1].x,cars[i-1].y+75);
               pop();
            }
           
       }
      }
      if(passedFinish===false){
      
     if(keyIsDown(UP_ARROW)){
        
         //player.distance+=10;
     if(cars[player.index-1].isTouching(obstacleG)){

      player.distance=player.distance+2;
      player.update();
slidesound.play()
     }
     else{
      player.distance=player.distance+10;
      player.update();
     }
        }

     if(keyIsDown(LEFT_ARROW)){
       
        if(cars[player.index-1].isTouching(obstacleG)){

         player.distance=player.xPos-2;
         player.update();
   
        }
        else{
         player.distance=player.xPos-5;
         player.update();
        }
        
     }
        
        
    if(keyIsDown(RIGHT_ARROW)){
    
      if(cars[player.index-1].isTouching(obstacleG)){

         player.distance=player.xPos+1;
         player.update();

   
        }
        else{
         player.distance=player.xPos+5;
         player.update();
        }
         
        }
         
      }
        
        
    if(player.distance>displayHeight*5-80 && passedFinish == false){
          passedFinish=true;
          player.rank = finishedPlayer+1
         Player.updatefinishedplayer();
  // Player.updatefinishedplayer()
          player.update()
        }




   }

   end(){
      console.log("Game Ends!");


   }
   /*displayRanks(){ 
      background('lightblue');
    camera.position.x=0; 
    camera.position.y=0;
     //imageMode(CENTER);
      // image(bronzeImg,-displayWidth/4,-100+displayHeight/9,200,240);
       //image(silverImg,displayWidth/4,-100+displayHeight/10,225,270);
       //image(goldImg,0,-100,250,300); 
       for(var i=1; i<5;i++){ var playerIndex="player"+i; 
       var place=allPlayers[playerIndex].rank; 
       var name=allPlayers[playerIndex].name; 
       textAlign(CENTER);
        textSize(50);
        if(place===1){ text("1st: "+name,0,85);
       } else if(place===2){ text("2nd: "+name,displayWidth/4,displayHeight/9+73);
       } else if(place===3){ text("3rd: "+name,-displayWidth/4,displayHeight/10+76); 
      } else{ textSize(30); 
         text("Honorable Mention: "+name,0,225); 
      } } }*/

   update(state){
      database.ref('/').update({
         gameState:state
    });
   
   }

  



}
