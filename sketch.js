const Constraint=Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;
    tree=new Tree(620,200,40,40)
	stone= new Stone(50,235,50);
    slingshot=new SlingShot(stone.body,{x:150,y:235});
	girl=new Girl(250,320,10,10)
    ground=new Ground(400,380,800,50)
   
    mango1=new Mango(720,150,30)
    mango2=new Mango(640,150,30)
    mango3=new Mango(545,150,30)
    mango4=new Mango(720,80,30)
    mango5=new Mango(595,80,30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  slingshot.display()
  ground.display()
  girl.display()
  
  tree.display()
  stone.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
   
  detectcollision(stone,mango1)
  detectcollision(stone,mango2)
  detectcollision(stone,mango3)
  detectcollision(stone,mango4)
  detectcollision(stone,mango5)
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly();
}
function detectcollision(Lstone,Lmango){
     mangoBodyPosition=Lmango.body.position 
     stoneBodyPosition=Lstone.body.position 
     var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y) 
     if(distance<=Lmango.r+Lstone.r){
     Matter.Body.setStatic(Lmango.body,false); } }