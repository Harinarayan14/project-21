var sun,planet1,planet2,planet3,planet4,radius,sunImage;


function preload(){
sunImage = loadImage("sun.png");
planetImage = loadImage("planet.png");
}




function setup() {
  createCanvas(1500,600);
  sun =createSprite(650, 300, 50, 50);
  sun.addImage(sunImage);
  planet1 =createSprite(200, 200, 30, 30);
  planet1.addImage(planetImage);
  planet1.scale = 0.5;

  planet2 = createSprite(100, 200, 30, 30);
  planet2.addImage(planetImage);
  planet2.scale = 0.5;
  
  planet3 =createSprite(900, 200, 30, 30);
  planet3.addImage(planetImage);
  planet3.scale = 0.5;
  
  planet4 = createSprite(1000, 200, 30, 30);
  planet4.addImage(planetImage);
  planet4.scale = 0.5;
  

}

function draw() {
    sun.scale+=0.01;
 
  background(0);
  vanish(sun,planet1);
  vanish(sun,planet2);
  vanish(sun,planet3);
  vanish(sun,planet4);
  drawSprites();
}