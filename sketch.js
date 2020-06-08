const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1, ball2, ball3;
var chain1, chain2, chain3;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 80, 800, 20);
	ball1 = new ball(250, 200, 30);
	ball2 = new ball(300, 200, 30);
	ball3 = new ball(350, 200, 30);

	chain1 = new chain(ground.body, ball1.body);
	chain2 = new chain(ground.body, ball2.body);
	chain3 = new chain(ground.body, ball3.body);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  ball1.display();
  ball2.display();
  ball3.display();
  chain1.display();
  chain2.display();
  chain3.display();

  drawSprites();
 
}



