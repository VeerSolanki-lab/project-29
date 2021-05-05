const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.jpg");
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(windowWidth/2,height,windowWidth,20);
  

    
   
    box1 = new Box(windowWidth/1.2,400,70,70);
    box2 = new Box(windowWidth/1.2+75,400,70,70);
    box3 = new Box(windowWidth/1.2+75*2,400,70,70);
    box4 = new Box(windowWidth/1.2+75*3,400,70,70);
    box5 = new Box(windowWidth/1.2-75,400,70,70);
    box6 = new Box(windowWidth/1.2-38,320,70,70);
    box7 = new Box(windowWidth/1.2+38,320,70,70);
    box8 = new Box(windowWidth/1.2+38*3,320,70,70);
    box9 = new Box(windowWidth/1.2+38*5,320,70,70);
    box10 = new Box(windowWidth/1.2,220,70,70);
    box11 = new Box(windowWidth/1.2+75,220,70,70);
    box12 = new Box(windowWidth/1.2+75*2+2,220,70,70);
    box13 = new Box(windowWidth/1.2+38,140,70,70);
    box14 = new Box(windowWidth/1.2+38*3-9,140,70,70);
    box15 = new Box(windowWidth/1.2+75,50,70,70);
   
    bird = new Bird(200,785);

    
    slingshot = new SlingShot(bird.body,{x:200, y:785});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   box13.display();
   box14.display();
   box15.display();
    ground.display();

    
    

    bird.display();
    
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}