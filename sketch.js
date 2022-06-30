
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bola
var chao
var traveEsquerda
var traveDireita

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;


	var bolaOptions = {
    density:1.2,
	restitution:0.3
	}
    chao = new Ground(400,400,800,50)
	traveEsquerda = new Ground(500,350,20,80)
	traveDireita = new Ground(610,350,20,80)
	
    bola = Bodies.circle(200,300,20,bolaOptions)
    World.add(world,bola)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  chao.display()
  traveEsquerda.display()
  traveDireita.display()
 
  ellipse(bola.position.x,bola.position.y,20,20)
  Engine.update(engine)
  
  
 
 
  drawSprites();
 
}
function keyPressed() {
if(keyCode === UP_ARROW) {
  Body.applyForce(bola,{x:0,y:0},{x:0,y:-50}) 

}

} 


