var bullet,wall;
var speed,weight,thickness;

function setup(){
  createCanvas(1600,400);
  speed=round(random(223,321));
  weight=round(random(30,52));
  thickness=round(random(22,83));
  bullet=createSprite(50,200,50,10);
  wall=createSprite(1500,200,thickness,height/2);

  bullet.shapeColor="white";
  bullet.velocityX=speed;
}

function draw(){
  background("black");

  var damage=round((0.5*weight*speed*speed)/(thickness*thickness*thickness));

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    if(damage<10){
      wall.shapeColor="green";
    }
    if(damage>10){
      wall.shapeColor="red";
    }
    
    textSize(20);
    fill(220);
    text("Weight: "+weight,(width/2)-60,wall.y+150);
    text("Speed: "+speed,(width/2)+80,wall.y+150)
    text("Damage: "+damage,(width/2)+200,wall.y+150);
    text("Wall Thickness: "+damage,(width/2)+350,wall.y+150);
    text("Press 'R' To Run The Test Again",width/2,height/2);
    if(keyDown("r")){
      reset();
    }
    }

  drawSprites();
}

function reset(){
  bullet.x=50;
  bullet.shapeColor="white";
  speed=round(random(223,321));
  weight=round(random(30,52));
  thickness=round(random(22,83));
  bullet.velocityX=speed;
  wall.width=thickness;
}

function hasCollided(Lbullet, Lwall){
  bulletRightEdge=Lbullet.x + Lbullet.width;
  wallLeftEdge = Lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
  }