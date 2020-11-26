const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15
var polygon, hexImage
function preload(){

    hexImage = loadImage("picture/download.png")
}
function setup(){
    var canvas = createCanvas(800,400);
    
ground = new Ground(400 , 380, 810, 20)
block1 = new block(450, 330, 50, 50)
block2 = new block(500, 330, 50, 50)
block3 = new block(550, 330, 50, 50)
block4 = new block(600, 330, 50, 50)
block5 = new block(650, 330, 50, 50)
block6 = new block(475, 280, 50, 50)
block7 = new block(525, 280, 50, 50)
block8 = new block(575, 280, 50, 50)
block9 = new block(625, 280,50,  50)
block10 = new block(500, 230, 50, 50)
block11 = new block(550, 230, 50, 50)
block12 = new block(600, 230, 50, 50)
block13 = new block(525, 180, 50, 50)
block14 = new block(575, 180, 50, 50)
block15 = new block(550, 130, 50, 50)
polygon = Bodies.circle(200, 200, 30)
World.add(world, polygon)
}

function draw(){
    background(0);
    Engine.update(engine);

ground.display()
block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block7.display()
block8.display()
block9.display()
block10.display()
block11.display()
block12.display()
block13.display()
block14.display()
block15.display()
imageMode(CENTER) 
image(hexImage, polygon.position.x, polygon.position.y, 20, 20)
}