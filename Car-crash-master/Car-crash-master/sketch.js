var bullet, wall;
var speed,weight;
var damage, thickness;





function setup() {
  createCanvas(1600,400);

  thickness=random(22,83)
  speed=random(223,331)
  weight=random(20,52)
  bullet=createSprite(50,200,50,10)
  bullet.shapeColor="white"
  wall=createSprite(1500,200,thickness,height/2)
  
  bullet.velocityX=speed;
  
 

}

function draw() {
  background(0);
  
  if (bullet.isTouching(wall)){
    bullet.velocityX=0
    damage=(0.5 * weight * speed * speed)/thickness*thickness*thickness
    if (damage<10){
      wall.shapeColor=color(0,255,0) 
     }
     if (damage>10){
       wall.shapeColor=color(255,0,0)
     }
     
     
  }

  
  
  drawSprites();
}