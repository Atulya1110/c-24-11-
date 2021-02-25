
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var Hammer;
var Stone;
var Rubber;

function preload()
{
	
}

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

Hammer = new hammer(30,20,70,30);
Stone = new stone(50,50,40,34);
Rubber=new rubber(40,30,40,42);



Hammer.x = World.mouseX;
Hammer.y = World.mouseY;
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Hammer.display();
  Stone.display();
  Rubber.display();
 
}



