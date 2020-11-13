const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2, ground;

function setup(){
createCanvas(600,600);
engine=Engine.create();
world=engine.world;
ground  = new Ground(300,580,600,20);
box1 = new Box(100,200,70,70);
box2 = new Box(100,80,70,70);

}

function draw(){
  background("black");
  Engine.update(engine);
  box1.display()
  box2.display()
  ground.display()
}
