const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform1;
var platform2, polygon1, pBody;
var slingShot;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21
var polygon_Img

function preload() {
   polygon_Img = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,35);
    platform1 = new Ground(600, 200, 180, 10);
    platform2 = new Ground(300,300,250,10);

    polygon1 = new poly(80,280,50,50);
    World.add(world, polygon1);

    //1st floor
    b1 = new Box(250,295,50,50)
    b2 = new Box(300,295,50,50)
    b3 = new Box(350,295,50,50)
    b4 = new Box(400,295,50,50)
    b5 = new Box(250,250,50,50)

    //2nd floor
    b6 = new Box(200,300,50,50)
    b7 = new Box(275,250,50,50)
    b8 = new Box(325,250,50,50)
    b9 = new Box(375,250,50,50)

    //3rd floor
    b10 = new Box(287,145,50,50)
    b11 = new Box(262,200,50,50)
    b12 = new Box(312,200,50,50) 

    //next platform
    b13 = new Box(580,195,30,30)
    b14 = new Box(610,195,30,30)
    b15 = new Box(595,105,30,30)

    slingShot = new SlingShot(polygon1.body,{x:80,y:240})
    

}

function draw(){
    background("blue");
    Engine.update(engine);
    ground.display();
    platform1.display();
    platform2.display();

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    polygon1.display();
    slingShot.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x:mouseX, y:mouseY});
}


function mouseReleased(){
    slingShot.fly();
}