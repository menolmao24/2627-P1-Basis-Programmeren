// variables to use later
let colors1 = ['blue', 'orange', 'green'];  // an array of colors
let colors2 = ['pink', 'yellow', 'brown']; // another array of colors NOT A 2D ARRAY
let AlertRan = true;
let TextTimer; 
let PosX;
let PosY;

function setup() {
  createCanvas(800,  600);
  keyPressed();
  keyReleased();
  let keyActive = false;
}

function draw() {
  background(220);
  RNG();
  if (keyIsPressed == true) {
    AlertPrompt();
    random([rect, ellipse, circle, triangle,], ); // an array of shapes
  }
  
}


// functions 


function keyPressed() {
  if (keyIsPressed == true) 
    {
      keyActive = true;
    }
  }
  
  function keyReleased() {
    if (keyCode === 13 || keyCode === 'i') 
      {
        keyActive = false;
      }
    }
    
    function RNG() {
      PosX = random(800)
      PosY = random(600)
    }
    
    function AlertPrompt() {
      if (AlertRan == false) {
      window.alert("testing fellas!");
      }

      else {
        if (TextTimer < 240){
        text("alert ran already");
        TextTimer++;
        } 
      } 
    }
    
    function DrawShapes(PosX, PosY) {
      fill(colors1[randomColor])
      Shape[randomShape]
    }
    
    
    
    function upscaler() {
      scale();
    }
    
    function moveShapes() {
      lerp();
    }
    
