var basket, candy;
var CANDY1,CANDY2;
var Score;
var candyGroup;
var SUN;


function preload(){
 BASKET=loadImage("basket.png");
 CANDY1=loadImage("candy1.png");
 CANDY2=loadImage("candy2.png");
 SUN=loadImage("sun.png")
 
}


function setup() {
  createCanvas(displayWidth,550);

 basket=createSprite(displayWidth/2,430,20,20);
basket.addImage(BASKET);
basket.scale=0.8;
basket.setCollider("rectangle",0,0,basket.width,50);
//basket.debug=true;
  
sun=createSprite(200,80,20,20);
sun.addImage(SUN);
sun.scale=0.3;

Score=0;

candyGroup = new Group ();
  
  

  
}

function draw() {
  background("cyan");

  textSize(20);
  text("SCORE : "+Score,1100,100);

  if(keyDown(LEFT_ARROW)){
    basket.x=basket.x-10;
  }

  if(keyDown(RIGHT_ARROW)){
    basket.x=basket.x+10;
  }

 

  rand = Math.round(random(1,2));
  if(frameCount%80===0){
      candyCreatedFrame=frameCount;
      candy = createSprite(random(10,1000),20, 10, 10);
      switch(rand){
          case 1: candy.addImage(CANDY1);
          break;
          case 2: candy.addImage(CANDY2);
          break; 
          default: break;
      }
      candy.velocityY=(4+Score/5);
      candy.scale=0.2;
      candyGroup.add(candy);
  }

  if(basket.isTouching(candyGroup)){
    Score=Score+1;
    candyGroup.destroyEach();
  }
  


  //text(mouseX+","+mouseY,mouseX,mouseY)
 


  drawSprites();

}

