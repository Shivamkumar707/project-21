var bullet , wall;
var speed , width , thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  width = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 5);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = (80,80,80); 
 
}

function draw() {

  if(wall.x-bullet.x < (wall.width+bullet.width)/2) {
    bullet.velocityX=0;

    var damage=0.5*width*speed*speed/(thickness*thickness*thickness);

    if(damage>10) {
      wall.shapeColor = "green";
    }
  
    if(damage<10) {
      wall.shapeColor = "red";
    }
  }

  background(0);  
  drawSprites();
}