const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var polygon,sling,floor1,floor2,floor3,floor4;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var backgroundImg,score;


function setup () {

  createCanvas(1500,600);

  engine = Engine.create();
  world = engine.world;

  score = 0;

  polygon = new Polygon(260,255);

  sling = new Slingshot(polygon.body,{x: 210,y: 305});

  floor1 = new Floor(600,210,250)
  floor2 = new Floor(1200,210,250)
  floor3 = new Floor(900,376,250)
  floor4 = new Floor(600,542,250)
  floor5 = new Floor(1200,542,250)

  box1 = new RedBox(680,140);
  box2 = new RedBox(624,140);
  box3 = new RedBox(568,140);
  box4 = new RedBox(512,140);
  box5 = new BlueBox(650,84);
  box6 = new BlueBox(594,84);
  box7 = new BlueBox(538,84);
  box8 = new GreenBox(620,28);
  box9 = new GreenBox(564,28);
  box10 = new WhiteBox(590,-28);

  box11 = new WhiteBox(1280,140);
  box12 = new WhiteBox(1224,140);
  box13 = new WhiteBox(1168,140);
  box14 = new WhiteBox(1112,140);
  box15 = new RedBox(1250,84);
  box16 = new RedBox(1194,84);
  box17 = new RedBox(1138,84);
  box18 = new BlueBox(1220,28);
  box19 = new BlueBox(1164,28);
  box20 = new GreenBox(1190,-28);
  
  box21 = new GreenBox(1280,472);
  box22 = new GreenBox(1224,472);
  box23 = new GreenBox(1168,472);
  box24 = new GreenBox(1112,472);
  box25 = new WhiteBox(1250,416);
  box26 = new WhiteBox(1194,416);
  box27 = new WhiteBox(1138,416);
  box28 = new RedBox(1220,360);
  box29 = new RedBox(1164,360);
  box30 = new BlueBox(1190,300);

  box31 = new BlueBox(680,472);
  box32 = new BlueBox(624,472);
  box33 = new BlueBox(568,472);
  box34 = new BlueBox(512,472);
  box35 = new GreenBox(650,416);
  box36 = new GreenBox(594,416);
  box37 = new GreenBox(538,416);
  box38 = new WhiteBox(620,360);
  box39 = new WhiteBox(564,360);
  box40 = new RedBox(590,300);

  box41 = new PurpleBox(980,306);
  box42 = new PurpleBox(924,306);
  box43 = new PurpleBox(868,306);
  box44 = new PurpleBox(812,306);
  box45 = new PurpleBox(950,250);
  box46 = new PurpleBox(894,250);
  box47 = new PurpleBox(838,250);
  box48 = new PurpleBox(920,194);
  box49 = new PurpleBox(864,194);
  box50 = new PurpleBox(890,138);

  //var render = Render.create({ 
    // element: document.body,
      //engine: engine,
      //options: { width: 1200, height: 700, wireframes: false } });
      //Render.run(render);

} 

function preload(){

   getTime();

}

function draw(){
  
  if(backgroundImg)
  background(backgroundImg);

  noStroke();
  textSize(35);
  fill("white");
  text("Score: " + score,width - 300,50)

  Engine.update(engine);

  polygon.display();

  sling.display();

  floor1.display();
  floor2.display();
  floor3.display();
  floor4.display();
  floor5.display();

  
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
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();

  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  box40.display();

  box41.display();
  box42.display();
  box43.display();
  box44.display();    
  box45.display();
  box46.display();
  box47.display();
  box48.display();
  box49.display();
  box50.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();

  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();

  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  box26.score();
  box27.score();
  box28.score();
  box29.score();
  box30.score();

  box31.score();
  box32.score();
  box33.score();
  box34.score();
  box35.score();
  box36.score();
  box37.score();
  box38.score();
  box39.score();
  box40.score();

  box41.score();
  box42.score();
  box43.score();
  box44.score();    
  box45.score();
  box46.score();
  box47.score();
  box48.score();
  box49.score();
  box50.score();

}

function mouseDragged(){

  Matter.Body.setPosition(polygon.body,{x: mouseX, y:mouseY})

}

function mouseReleased(){

  sling.fly();

}

function keyPressed(){

  if(keyCode === 32){

     Matter.Body.setPosition(polygon.body,{x: 210,y: 345})

     sling.attach(polygon.body);

  }

}

async function getTime(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responceJSON = await response.json();
  console.log(responceJSON);

   var datetime = responceJSON.datetime;
   var hour = datetime.slice(11,13);

   if (hour > 6 && hour < 18){
    bg = "bg.png"
 }
 else{
    bg = "bg2.jpg"
 }
 backgroundImg = loadImage(bg);

}