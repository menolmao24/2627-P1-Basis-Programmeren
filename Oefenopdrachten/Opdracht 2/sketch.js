let A = 25;
let B = 25;
let TransP = 0;
let stonks;

function preload(){
  stonks = loadImage("Stonks.jpg")

}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  TransP = TransP + 1;
  if (A >= 99999)
  {
    A = 0;
  }
  else {
    A = A + B;
  }
  textSize(20)
  text("This piece of cake costs " + A + " cents", 20, 20);
  filter(OPAQUE, 5)
  image(stonks, 50, 200);
  stonks.resize(250,200);
  
}