var helicopterIMG, helicopterSprite, packageSprite,packageIMG,leftBox,rightBox,downBox;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 20,20);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 27 , {isStatic:true,restitution:0.2});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	leftBox = new Box(width/2-100,height-95,20,100);
	rightBox = new Box(width/2+100,height-95,20,100);
	downBox = new Box(width/2,height-55,200,20);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  keyPressed();

  drawSprites();

  downBox.display();
  leftBox.display();
  rightBox.display();
 
}

function keyPressed() {
 if (keyDown("down")) {
    Matter.Body.setStatic(packageBody, false)
  }
}



