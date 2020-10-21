var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);

bullet=createSprite(50,200,10,15);
wall=createSprite(1200,200,thickness,canvas.height/2);
wall.shapeColor=rgb(80,80,80);

bullet.velocityX=speed;
}

function draw() {
  background(255,255,255); 
  
  if(bullet.isTouching(wall)) {
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
 // bullet.velocityX=0;
  
  if(damage<10) {
    bullet.shapeColor=rgb(0,255,0);
    bullet.collide(wall);

  }
else{
        bullet.shapeColor=rgb(255,0,0);
        bullet.collide(wall);
      }
    } 
  
    drawSprites();
}
