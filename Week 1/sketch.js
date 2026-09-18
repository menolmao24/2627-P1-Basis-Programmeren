let Lred;
let Lorange;
let Lgreen;
let TransPHide;
let TransPShow;
let LightSwitch;
let interval;

//  TransP = Transparency. attempt to add it later down the line!!
//  interval was meant to be an interval system to work alongside the Transparency to create a working traffic light
// LightSwitch is meant combine both the switch with the intervals and Transparency to create a working traffic light

function setup() {
  createCanvas(1920,960)
  console.log("osu sweat here");
  TransPHide = 80
}

function draw() {
  background(220);
  // Text stuff
  fill("black")
  text("1.", 50, 50);
  text("TTV/MENOLMAO", 75, 50);
  text("2.", 50, 125);
  text("3.", 50, 200);
  text("4.", 50, 400);
  text("5.", 250, 50);
  text("6.", 250, 350);
  text("6. Pixart Mario", 450, 50);
  
  
  //  just shapes n beats
  
  // Dutch flag
  noStroke();
  fill("red")
  rect(75, 115, 100, 20);
  fill("white")
  rect(75, 135, 100, 20);
  fill("blue")
  rect(75, 155, 100, 20);
  
  // checker board
  stroke(1)
  strokeWeight(1)
  fill("black")
  rect(75, 200, 100, 100);
  noStroke
  fill("white")
  rect(75, 200, 30, 30);
  rect(145, 200, 30, 30);
  rect(75, 270, 30, 30);
  rect(145, 270, 30, 30);   
  rect(105, 230, 40, 40);

  // House
  stroke(5);
  fill("white");
  fill("brown");
  triangle(100,400,150,325,200,400);
  fill("beige");
  rect(100,400,100,100);
  fill("#ab692b");
  rect(115,470,20,30);
  fill("white");
  circle(150,370,35,35);
  line(150,351,150,389);
  line(133,370,168,370);


  //  stoplicht
  
  //   Outer layer
  noStroke();
  fill("gray");
  rect(300,50,75,150);
  rect(317,100,40,175);

  //  Lights
  fill("red");
  circle(337,82,37,37, );
  fill("orange");
  circle(337,125,37,37);  
  fill("green");
  circle(337,170,37,37);  



  // Dice!
  fill("white");
  stroke(1);
  rect(300, 300, 100, 100, 5);
  fill("black");
  circle(320, 320, 20, 20);
  circle(350, 350, 20, 20);
  circle(380, 380, 20, 20);


  // pixart Mario Drawing :D
  
  // Hat
  fill("red");
  noStroke();
  rect(550,75,100,20);
  rect(525,95,150,20);
  
  //  Face
  fill("#c7985f")
  rect(560,115,90,20);
  fill("black`")
  rect(800,115,45,20);
  



}

  
