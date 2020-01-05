const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var tanker;
var ground;
var shootingBall;
var bubbleBall;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;

    var ground = new Ground(600,height,1200,20);
    var tanker = new Tanker(650,380,80,40);
    var shootingBall = new CanonBall(600,200);
    var bubbleBall = new Ball(600,340,40);
}

function draw() {
// Remember to update the Matter Engine and set the background.
background(0);
    Engine.update(engine);
    ground.display();
    tanker.display();
    shootingBall.setImage("canonBall.png");
    shootingBall.visible = false;
    bubbleBall.visible = false;
}


function keyReleased(space) {
    // Call the shoot method for the cannon.
    shootingBall.visible = true;
    bubbleBall.visible = true;
}