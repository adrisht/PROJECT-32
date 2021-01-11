const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score;
var bg="sprites/dayd.jpg";
var bgIMG,backgroundIMG;

function preload() {
  getBackgroundIMG();
  bgIMG=loadImage(bg);
}

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  
  ground= new Ground(400,390,800,20);
  b1= new Box(300,370,30,40);
  b2= new Box(330,370,30,40);
  b3= new Box(360,370,30,40);
  b4= new Box(390,370,30,40);
  b5= new Box(420,370,30,40);
  b6= new Box(450,370,30,40);
  b7= new Box(470,370,30,40);
  b8= new Box(330,330,30,40);
  b9= new Box(360,330,30,40);
  b10= new Box(390,330,30,40);
  b11= new Box(420,330,30,40);
  b12= new Box(450,330,30,40);
  b13= new Box(360,290,30,40);
  b14= new Box(390,290,30,40);
  b15= new Box(420,290,30,40);
  b16= new Box(390,250,30,40);
  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();
  b10.score();
  b11.score();
  b12.score();
  b13.score();
  b14.score();
  b15.score();
  b16.score();
  b1.score();
  
  polygon=new Bax(200,275,20,20);
  score=0;
  

  slingshot=new SlingShot(polygon.body,{x:200,y:275});
  
}

function draw() {
  if(backgroundIMG){
    background(backgroundIMG);
}
else{
    background(bgIMG);
} 
  Engine.update(engine);
  ground.display();
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
  b16.display();
  
  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();
  b10.score();
  b11.score();
  b12.score();
  b13.score();
  b14.score();
  b15.score();
  b16.score();
  slingshot.display();
  polygon.display();
  text("SCORE:"+score,700,40);
  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
   slingshot.attach(polygon.body);
       
  }

}
async function getBackgroundIMG(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON=await response.json();
  //console.log(responseJSON.datetime);
  var datetime=responseJSON.datetime;
  var hour=datetime.slice(11,13);
  if(hour>=6 && hour<=18){
     bg="sprites/dayd.jpg";

  }
  else{
      bg="sprites/nyte.jpeg";
  }
      backgroundIMG=loadImage(bg);
  
}
