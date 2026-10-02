// variables to use later
let colors1 = ['blue', 'orange', 'green'];  // an array of colors
let colors2 = ['pink', 'yellow', 'brown']; // another array of colors NOT A 2D ARRAY
let AlertRan = true;
let TextTimer; 
let ActionDelay;
let PosX;
let PosY;
let keyActive = false;

function setup() {
  createCanvas(800,  600);
  keyPressed();
  keyReleased();
}

function draw() {
  background(220);
  RNG();
  if (keyActive == true) {
    //random([rect(PosX), ellipse, circle, triangle,],50,50,50,50,50); // an array of shapes
    let a = random(["rect", "ellipse", "circle", "triangle"]);
    let xpos = random(0, width);

    
    console.log(a);

    if(a == "rect")
    {
      rect(100,100, 100, 100);
    }
    else if(a == "ellipse")
    {
      ellipse(100,100, 100, 100);
    }
    AlertPrompt();
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
    if (keyCode === 13 && Frameco|| keyCode === 'i') 
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