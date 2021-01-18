const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ball,ground;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ballopt = {restitution:1.0}
  ball = Bodies.circle(100,10,20,ballopt);
  World.add(world,ball);
  var groundopt = {isStatic:true}
  ground = Bodies.rectangle(200,390,400,20,groundopt);
  World.add(world,ground);
}

function draw() {
  background("red"); 
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
}