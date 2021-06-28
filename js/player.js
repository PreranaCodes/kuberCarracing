class Player{
    
    constructor(){
         this.rank = 0
       this.index=null;
       this.name=null;
       this.distance=0;
       this.xPos=0;

    }


     getCount(){

        var playerCountRef= database.ref('playerCount');
        playerCountRef.on("value", function(data){
        playerCount= data.val();
            
          
        });
        
      }


     updateCount(count){
           database.ref('/').update({
                playerCount:count
           })
     }


     update(){

          var playerIndex="player"+player.index;
          database.ref(playerIndex).update({
               name:this.name,
               distance:this.distance,
               xPos:this.xPos,
               rank:this.rank
          });
          
     }

     static getPlayerInfo(){
          
          database.ref('/').on("value",function(data){

                allPlayers=data.val();

          });

         
     }
     getFinishedPlayers(){
var finishedplayerref = database.ref('finishedplayer');
finishedplayerref.on("value",function(data){
finishedPlayer = data.val()


});
}
static updatefinishedplayer(){

database.ref('/').update({
'finishedplayer':finishedPlayer+1
});
this.rank = this.rank+1;
}




}