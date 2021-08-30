var iss
var issImg
var space
var spaceImg 
var spacecraft
var spacecraftImg

function preload(){
spacecraftImg = loadAnimation("Docking-undocking/spacecraft1.png","Docking-undocking/spacecraft2.png","Docking-undocking/spacecraft3.png","Docking-undocking/spacecraft4.png")
spaceImg = loadImage("Docking-undocking/spacebg.jpg")
issImg = loadImage("Docking-undocking/iss.png")
}

function setup() {
  createCanvas(1500,800);
  //iss sprite and image
  iss = createSprite(750,400,50,50)
  iss.addImage('iss',issImg)
  //spacecraft sprite and image
  spacecraft = createSprite(200,200,50,50)
  spacecraft.addAnimation('spacecraft',spacecraftImg)
  spacecraft.scale = 0.2
}

function draw() {
  background(spaceImg);  
  drawSprites();
  //controls up, down, left, right arrow keys
  if(keyCode === 38){
    spacecraft.velocityY = -8
  }
 
  if(keyCode === 40){
    spacecraft.velocityY = 8
  }

  if(keyCode === 39){
    spacecraft.velocityX = 8
  }

  if(keyCode === 37){
    spacecraft.velocityX = -8
  }
  if(spacecraft.isTouching(iss)){
stop()
  }
  iss.debug = true 
  iss.setCollider("rectangle",-50,10,10,10)
}

function stop(){
  spacecraft.velocityX = 0
  spacecraft.velocityY = 0
}