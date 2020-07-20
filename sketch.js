function setup() {
 createCanvas(1200,800);
 fixedRect=createSprite(400,100, 50, 80);
 movingRect=createSprite(400,800,80,30);
 fixedRect.shapeColor="green";
 movingRect.shapeColor="green"; 
 //movingRect.velocityY = -5;
 //fixedRect.velocityY = 5;

 gameObj1=createSprite(100,100,100,50);
 gameObj1.shapeColor="blue"; 
 gameObj2=createSprite(250,100,100,50);
 gameObj2.shapeColor="red";
}
function draw() {
 background(255,255,255); 
 movingRect.x=mouseX;
 movingRect.y=mouseY;
 if (isTouching(gameObj2,movingRect)){
 movingRect.shapeColor = "pink";
  gameObj2.shapeColor = "pink";
 } else { 
  movingRect.shapeColor = "green";
  gameObj2.shapeColor = "green";
 }
 console.log(fixedRect.width/2 + movingRect.width/2);
 console.log(movingRect.x - fixedRect.x);
 movingRect.debug=true;
 fixedRect.debug=true; 
 //bounceOff(movingRect,fixedRect);

    drawSprites();
 }
 
