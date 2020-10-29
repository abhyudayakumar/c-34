const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
var paticle;
var turn = 0;
var gameState;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.puah(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 50; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 50; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  if(particle.x < 300){
    score = score + 500;
    var particle = null;
  }

  if(particle.x > 301 && particle.x< 600){
    score = score + 200;
    var particle = null;
  }

  if(particle.x > 600 && particle.x< 900){
    score = score + 100;
    var paticle = null; 
  }

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
  if(gameState!=="end"){
    count++;
    particle = new Particle(mouseX,10,10,10);
  }
}