// variables to use later
let colors1 = ['blue', 'orange', 'green'];  // an array of colors
let colors2 = ['pink', 'yellow', 'brown']; // another array of colors NOT A 2D ARRAY
let AlertRan = true;
let TextTimer; 
let ActionDelay;
let PosX;
let PosY;
let posZ;
let keyActive = false;
let randomclrs2;
let bgclr1 = 220;
let bgclr2 = 220;
let bgclr3 = 220;
let frames = 0;

let Counter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function setup() {
  createCanvas(800,  600);
  keyPressed();
  keyReleased();
}

function BackgroundColorShift() {
  if (keyActive == true) {
    randomclrsV2 = random(["green", "red", "orange", "pink", "white", "black", "aqua"]);
    
    bgclr1 = random(0, 255)
    bgclr3 = random(0, 255)
    bgclr2 = random(0, 255)
  }
}

function draw() {
  background(bgclr1, bgclr2, bgclr3);
  text("hold 'Enter key' for a surprise", 15,15)
  RNG();
  
  let a = random(["rect", "ellipse", "circle", "triangle"]);
  
  if (keyActive == true) {
    BackgroundColorShift();
    let randomclrs = random(["green", "red", "orange", "pink", "white"]);
    let randomclrsV2 = random(["green", "red", "orange", "pink", "white", "black", "aqua"]);
    let randomclrsV3 = random(["green", "red", "orange", "pink", "white", "black", "aqua"]);
    console.log(a);
    
    if(a == "rect")
      {
        fill(randomclrs)
      rect(PosX,PosY, 100, 100);
    }
    else if(a == "ellipse")
      {
        fill(randomclrsV2)
        ellipse(PosX,PosY, 100, 100);
      }

      else if(a == "triangle"){
        fill(randomclrsV3);
        triangle(PosX,PosY,PosX - PosY + 10,100,100);
      }
      
      
    }
    
    text("my for-loop has ran: " + frames + " times", 50, 50)
    for (let index = 0; index < 200; index++) {
      frames = frames + index * 2;
    }
  
  }
  

// functions 


function keyPressed() {
  if (keyCode === 13) 
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
      PosZ = random(800)
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