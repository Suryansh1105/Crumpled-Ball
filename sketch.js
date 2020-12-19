
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground1;
var bin1,ball1;

function preload()
{
	
}


function setup() {
	createCanvas(1200, 400);


  engine = Engine.create();
  world = engine.world;
  

 

  ball1= new ball(150,320,25);
  bin1= new bin(800,325,15,100);
  bin2= new bin(900,380,200,15);
  bin3= new bin(1000,325,15,100);
  ground1= new ground(600,392.5,1200,15);
	
  
}


function draw() {
  
  background(0);

  Engine.update(engine);
  

  ball1.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ground1.display();


}
function keyPressed()
{
  if(keyCode === RIGHT_ARROW)
  {
    Body.applyForce(ball1.body,ball1.body.position,{x:115,y:-115});
  }
}


