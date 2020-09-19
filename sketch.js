var fixedRect, movingRect,ball1, ball2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
   
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  ball1 = createSprite(200, 200, 80, 100);
  ball1.shapeColor = "red";
  ball1.debug = true;
  ball2 = createSprite(700, 200, 100, 80);
  ball2.shapeColor = "blue";
  ball2.debug = true;
  ball2.velocityX = -5;
  ball1.velocityX = +5;
}

function draw() {
  background(0,0,0);  
  bouncing(movingRect,fixedRect);
  bouncing(ball1,ball2);
  drawSprites();
}





