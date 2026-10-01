let ColorRange = ["green", "yellow", "red", "aqua"]
let number;


function setup() {
  createCanvas(400, 400);
  number = 0;
}

function draw() {
  background(220);
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      number = int(random(4));
      fill(ColorRange[number])
      console.log(number);
      rect(i * 30 + 50, j * 30 + 50, 30)
    }
    
    
  
  }
}

function FixedUpdate() {

}