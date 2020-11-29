
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var world;
var startBobPositionX,startBobPositionY;

function setup() {
	createCanvas(1600, 700);
	
	  engine = Engine.create();
    world = engine.world;


    
	//Create the Bodies Here.
  roof= new Roof(width/2,height/8,width/6,50);

  var bobDiameter=60;
  startBobPositionX=width/4; 
  startBobPositionY=height/4; 
  bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter); 
  bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter); 
  bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter); 
  bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter); 
  bob5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

  
  rope1 =new Rope(bob1.body,roof.body,-bobDiameter*2,0);
  rope2 =new Rope(bob2.body,roof.body,-bobDiameter,0);
  rope3 =new Rope(bob3.body,roof.body,0,0);
  rope4 =new Rope(bob4.body,roof.body,bobDiameter,0);
  rope5 =new Rope(bob5.body,roof.body,bobDiameter*2,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  Engine.update(engine);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-150,y:150});
	}


}

function drawLine(constraint){
  bobPosition = constraint.bodyA.position;
  roofPosition = constraint.bodyB.position;

  roofOffset= constraint.pointB;

  roofX= roofPosition.x+roofOffset.x;
  roofY= roofPosition.y+roofOffset.y;


  line(bobPosition.x,bobPosition.y,roofX,roofY);
}

