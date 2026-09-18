let shape;

function setup() {
  createCanvas(400, 400, WEBGL);
  shape = buildGeometry(createShape);
  
}

function draw() {
 // Rotate the coordinate system a little more each frame.
  let angle = frameCount * 0.01;
  let ca = cos(angle);
  let sa = sin(angle);
  applyMatrix(ca, 0, sa, 0, 0, 1, 0, 0, -sa, 0, ca, 0, 0, 0, 0, 1);  
  orbitControl();
  model(shape);
  
}

function createShape() {
  smooth();
  box();
}
