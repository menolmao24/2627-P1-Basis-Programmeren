// All Variable(s) and/or Variable Types appear under here above the setup function

let Color1 = "yellow"
let Color2 = "Blue"
let Color3 = "Red"
let Color4 = "Black"


function setup() {
  createCanvas(600, 400);

}

function draw() {
  background(255);
  strokeWeight(1)
  fill(Color4);
  rect(0, 0, 225, 75);
  fill(Color1)
  rect(225, 0, 125, 75);
  fill(Color2)
  rect(225+125, 0, 50, 175);
  
  
}

