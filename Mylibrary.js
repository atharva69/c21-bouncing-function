function bouncing(special1,special2){
    if( special1.x - special2.x < special2.width/2 +special1.width/2
      && special2.x -special1.x < special2.width/2 +special1.width/2) {
  special1.velocityX =special1.velocityX * (-1);
    special2.velocityX = special2.velocityX * (-1);
  }
  if( special1.y - special2.y < special2.height/2 +special1.height/2
    && special2.y -special1.y < special2.height/2 +special1.height/2){
  special1.velocityY =special1.velocityY * (-1);
    special2.velocityY = special2.velocityY * (-1);
  }
   }
  