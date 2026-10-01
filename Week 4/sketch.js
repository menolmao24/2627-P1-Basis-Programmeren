let Shape = ['rect', 'ellipse', 'circle', 'square'];
let input = false;
let inputCount = 0;
let 



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  KeyPressed();
  KeyReleased();
  text("E key has been pressed " + inputCount);

}

function KeyPressed() {
if (keyCode === 69) {
  if (input == false)
  {

  }

  input = true;
  console.log("input");
}
}

function KeyReleased() {
if (keyCode === 69) {
  if (input == false)
  {
    console.log("key was either held or KeyPressed did not register input")
  }
  console.log(input);
}
}