class Player {
    constructor(){}
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(name){
      var playerIndex = "player" + playerCount;
      database.ref(playerIndex).set({
        name:name
      });
    }
  }

  function draw(){
    if(playerCount === 4){
      game.update(1);
    }
    if(gameState === 1){
      clear();
      game.play();
    }
  }