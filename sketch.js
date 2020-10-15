var fixedRect;
var movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(400, 100, 50, 50);
  movingRect.velocityY = 5;

  fixedRect.shapeColor = 'red';
  movingRect.shapeColor = 'red';
}

function draw() {
  background(0,0,0);  
  drawSprites();

  edges = createEdgeSprites();

  //movingRect.x = mouseX;
  //movingRect.y = mouseY;

  //changeColor();
  bounceOff();

  console.log(edges);
}

/*function changeColor() {
  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 && movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 && fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2) {
    fixedRect.shapeColor = 'blue';
  } else{
    fixedRect.shapeColor = 'red';
  }
}*/

function bounceOff() {
  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 && movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 && fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2) {
    movingRect.velocityY = -movingRect.velocityY
    movingRect.velocityX = -movingRect.velocityX
  } 
}

function bounceOffEdges() {
  if(movingRect.x + movingRect.width >= edges) {

  }
}