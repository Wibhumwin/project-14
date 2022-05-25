var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var redBalloon,blueBalloon,greenBalloon,pinkBalloon ;
var createArrow;
var selectBalloon;
var score ;
var arrowGroup ;
var balloonsGroup ;



function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png")
}

function setup() {
  createCanvas(550, 500);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  score = 0 ;
  arrowGroup=createGroup();
  balloonsGroup=createGroup();
}

function draw() {
  // moving ground
    background.velocityX = -3 
 
    if (background.x < 0){
      background.x = background.width/2;
    }
  
 
  
  //moving bow
  bow.y = World.mouseY
  
    // release arrow when space key is pressed
  if (keyWentDown("space")) {
    var arrow = createArrow();
    
  }
  var selectBalloon = Math.round(random(1,4));
  console.log(selectBalloon);
  
   if(World.frameCount % 80 === 0) {
    if(selectBalloon == 1) {
      redBalloon() ;
    } else if(selectBalloon == 2) {
      blueBalloon() ;
    } else if(selectBalloon == 3) {
      greenBalloon() ;
    } else {
      pinkBalloon() ;
    }
  }
  
  if(arrowGroup.isTouching(balloonsGroup)) {
    balloonsGroup.destroyEach();
    arrowGroup.destroyEach();
     score = score +1 ;
  }
    
    
  drawSprites();
  text("Score: " + score ,450,30);
 
}
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
   
}
function blueBalloon(){
  var blueBalloon = createSprite(0,Math.round(random(20,370)),10,10)
    blueBalloon.addImage(blue_balloonImage);
    blueBalloon.velocityX = 3;
    blueBalloon.lifetime = 150;
    blueBalloon.scale = 0.1;
    balloonsGroup.add(blueBalloon);
}
  
function greenBalloon(){
  var greenBalloon = createSprite(0,Math.round(random(20,370)),10,10)
    greenBalloon.addImage(green_balloonImage);
    greenBalloon.velocityX = 3;
    greenBalloon.lifetime = 150;
    greenBalloon.scale = 0.1;
    balloonsGroup.add(greenBalloon);
} 
function pinkBalloon(){
  var pinkBalloon = createSprite(0,Math.round(random(20,370)),10,10)
    pinkBalloon.addImage(pink_balloonImage);
    pinkBalloon.velocityX = 3;
    pinkBalloon.lifetime = 150;
    pinkBalloon.scale = 0.0 ;
    balloonsGroup.add(pinkBalloon);
}
function redBalloon(){
  var redBalloon = createSprite(0,Math.round(random(20,370)),10,10)
    redBalloon.addImage(red_balloonImage);
    redBalloon.velocityX = 3;
    redBalloon.lifetime = 150;
    redBalloon.scale = 0.1;
    balloonsGroup.add(redBalloon);
}