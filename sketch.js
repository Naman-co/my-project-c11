var trex, trex_running, edges;
var groundImage;
var ground
var invisible
function preload(){
    trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
    groundImage = loadImage("ground2.png")
  }

function setup(){
  createCanvas(600,200);

  // creating trex

      trex = createSprite(50,160,20,50);
      trex.addAnimation("running", trex_running);
      edges = createEdgeSprites();
    invisible = createSprite(200,175,600,1)
    invisible.visible=false
      //adding scale and position to trex
      trex.scale = 0.5;
      trex.x = 50
    ground=createSprite(200,170,600,20)
    ground.addImage(groundImage)
}


function draw(){
      //set background color 
      background("yellow");
      //groundImage.addImage("ground2.png");
      //logging the y position of the trex
      console.log(trex.y)
      ground.velocityX=-5
      if (ground.x<0){
        ground.x=ground.width/2
    }
    if (invisible.x<0){
      invisible.x=invisible.width/2
      }
      //jump when space key is pressed
      if(keyDown("space")&& trex.y>151){
        trex.velocityY = -10;
      }
      
      trex.velocityY = trex.velocityY + 0.5;
      
      //stop trex from falling down
      trex.collide(invisible)
      drawSprites();
}