const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var polygon;
var slingShot;
var block1, block2, block3, block4, block5, block6, block7
var block8, block9, block10, block11, block12
var block13,  block14,  block15
var block16
var block17, block18, block19, block20, block21
var block22,block23,block24
var block25
var stand1

function loadImage(){
 
}
function setup(){
    var canvas = createCanvas(1366,600);

    engine = Engine.create();
    world = engine.world;

    polygon=new Polygon(300,400,40);
    slingShot=new SlingShot(polygon.body,{x:300,y:400});
    
    stand1=new Stand(800,450,200,10);

    //layer1
    block1=new Block(800,400,20,40);
    block2=new Block(820,400,20,40);
    block3=new Block(840,400,20,40);
    block4=new Block(780,400,20,40);
    block5=new Block(760,400,20,40);
    block6=new Block(740,400,20,40);
    block7=new Block(860,400,20,40);
    //layer2
    block8=new Block(800,350,20,40);
    block9=new Block(820,350,20,40);
    block10=new Block(840,350,20,40);
    block11=new Block(780,350,20,40);
    block12=new Block(760,350,20,40);
    //layer3
    block13=new Block(800,300,20,40);
    block14=new Block(820,300,20,40);
    block15=new Block(780,300,20,40);
    //layer4
    block16=new Block(800,250,20,40);
  
    stand2=new Stand(1100,300,200,10);

    //layer1
    block17=new Block(1100,260,20,40);
    block18=new Block(1120,260,20,40);
    block19=new Block(1140,260,20,40);
    block20=new Block(1080,260,20,40);
    block21=new Block(1060,260,20,40);
    
    //layer2
    block22=new Block(1100,220,20,40);
    block23=new Block(1120,220,20,40);
    block24=new Block(1080,220,20,40);

    //layer3
    block25=new Block(1100,180,20,40);

    Engine.run(engine);

}

function draw(){
     background(51);
     Engine.update(engine);
     textSize(30);
     fill("red");
     text("Press Space to Reset the Polygon",100,100);
     stand1.display();
     fill("red");
     block1.display();
     block2.display();
     block3.display();
     block4.display();
     block5.display();
     block6.display();
     block7.display();
     fill("orange");
     block8.display();
     block9.display();
     block10.display();
     block11.display();
     block12.display();
     fill("yellow");
     block13.display();
     block14.display();
     block15.display();
     fill("white");
     block16.display();
     fill("black")
     block17.display();
     block18.display();
     block19.display();
     block20.display();
     block21.display();
     fill("grey")
     block22.display();
     block23.display();
     block24.display();
     fill("white");
     block25.display();

     stand2.display();

     polygon.display();
     slingShot.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(polygon.body);
    }
}
