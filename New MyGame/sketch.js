var ninja,ninjaimage,bgimg1,ground


function preload(){
ninjaimage=loadAnimation("images/Ninja1.png","images/Ninja2.png","images/Ninja3.png","images/Ninja4.png","images/Ninja5.png","images/Ninja6.png")

bgimg1=loadImage("images/Fantasy Forest.jpg")


}




function setup(){
createCanvas(1500,500);
ninja=createSprite(100,350);
ninja.addAnimation("ninja",ninjaimage)


ground=createSprite(0,490,1500,10)
ground.visble=false

}




function draw(){
background(bgimg1)
ground.visble=false
ground.velocityX=-3;
//infinite ground
if(ground.x<0){
  ground.x=ground.width/2
}

ninja.collide(ground)



drawSprites()

}