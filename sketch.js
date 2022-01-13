var theif
var theif_running
var invisibleGround
var groundImage
var ground;
var PLAY = 1;
var END = 0;
var gameState = PLAY;


function preload(){
theif_running = loadAnimation("theif1.jpg", "theif2.jpg", "theif3.jpg")
groundImage = loadImage("tunnel.jpg")
} 

function setup(){
  createCanvas(windowWidth, windowHeight);
  
  theif = createSprite(50,180,20,50);
  theif.addAnimation("running", theif_running);

  
  
 
  

  
  ground = createSprite(200,height-200,200,20);
 ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  
 
}
function draw(){
background("tunnel.jpg")
if (keyDown("space")) { 
    theif.velocityY = -10;
  }
  
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  theif.depth = ground.depth +1
  
  theif.collide(ground);
  drawSprites();}


