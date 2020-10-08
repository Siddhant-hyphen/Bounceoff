var fixedRect, movingRect;
var dot;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  dot = createSprite(100,100);
  dot.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,dot)){
    dot.shapeColor = "red";
    movingRect.shapeColor = "red";

  }
  else{
    dot.shapeColor = "blue";
    movingRect.shapeColor = "green";
  }

  drawSprites();
}
