const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var rectangle1;
var circle1;
var angle;
var base;
var ground
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  circle1 = new Circe(150, 375, 50);
  rectangle1 = new Rectangle(200, 375, 100, 50, PI/0);
  base = new Circe(130, 390, 20);
  ground = new Rectangle(400, 400, 800, 1);
  

}

function draw() {
  background(255,255,255);  
  drawSprites();
  Engine.update(engine);
  circle1.display();
  rectangle1.display();
  base.display();
  ground.display();
  
}