var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200,150,50,50)
fixedRect.shapeColor="pink"
fixedRect.debug=true
  movingRect=createSprite(300,100,50,50);
movingRect.shapeColor="Blue"
movingRect.debug=true

}

function draw() {
  background(225);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 
    && movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2 
   && fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2 
    && fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2 ){
    movingRect.shapeColor="red"
    fixedRect.shapeColor="orange"
    }
  else{
    fixedRect.shapeColor="pink"
    movingRect.shapeColor="Blue"
  }
  drawSprites();
}