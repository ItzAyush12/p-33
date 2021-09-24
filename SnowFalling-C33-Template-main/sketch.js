var bg 
var boy1,ground
var boyimg
function preload() {
  bg = loadImage("snow3.jpg")
  boyimg = loadImage("boy.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  boy1 = createSprite(400, 550, 50, 50);
  boy1.addImage(boyimg)
  boy1.scale = 0.5 
  ground = createSprite(windowWidth/2,windowHeight-10,width,10)
}

function draw() {
  background(bg); 
  if(keyDown("space")) {
    boy1.velocityY=-10
  }
  boy1.velocityY=boy1.velocityY+1
  boy1.collide(ground)
  if(keyDown("Left_Arrow")) {
    boy1.x=boy1.x-5                        
  }
  if(keyDown("Right_Arrow")) {
    boy1.x=boy1.x+5                        
  }
  drawSprites();
}
