const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup(){
    //setup
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //ground and the stand to hold the blocks
    ground = new Ground(600, 390, 1200, 20)
    stand = new Ground(800, 220, 250, 10)

    //level 1
    b6 = new Box(825, 155)
    b7 = new Box(875, 155)
    b8 = new Box(775, 155)
    b9 = new Box(725, 155)
    //level 2
    b10 = new Box(850, 55)
    b11 = new Box(800, 55)
    b12 = new Box(750, 55)
    //level 3
    b13 = new Box(775, 5)
    b14 = new Box(825, 5)
    //level 4
    b15 = new Box(800, -55)

    //polygon
    // polyoptions = {
    //     restitution:0.8,
    //     friction:1.0,
    //     density:1.0
    // }
   // polygon = Bodies.rectangle(200, 200, 10, 10, polyoptions);
   // World.add(world, polygon);
    polygon = new Player(200, 200);

    //sling
    conpoint = {x: 320, y: 120}
    slingconnect = new SlingShot(polygon.body, conpoint);
}

function draw(){
    background('rgb(204, 255, 255)');
    //engine will continue updating
    Engine.update(engine);

    //display everything
    ground.display();
    stand.display();
    
    fill('rgb(204, 255, 153)')
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    fill('rgb(255, 204, 229)')
    b10.display();
    b11.display();
    b12.display();
    fill('rgb(153, 153, 255)')
    b13.display();
    b14.display();
    fill('white')
    b15.display();
   
    polygon.display();

    slingconnect.display();
    
    //polygon
    //fill('rgb(255, 255, 153)')
    //rect(polygon.position.x, polygon.position.y, polygon.width, polygon.height)
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
    // polygon.position.x = mouseX
    // polygon.position.y = mouseY
}

function mouseReleased(){
    slingconnect.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingconnect.attach(polygon.body);
    }
}


    