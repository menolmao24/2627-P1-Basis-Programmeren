//  Stats for the Virtual Pet
let health = 100;
let hunger = 100;
let energy = 100;
let happiness = 100;

// Stat drain interval
let healthDrainInterval = 5;
let hungerDrainInterval = 5;
let energyDrainInterval = 5;
let happinessDrainInterval = 5;


//  Death Trigger Variable ** ONLY ACTIVATES IF HEALTH IS AT 0 !!! ** 
 let Death = false;

// var position for status icon 
let statPosX = 150;
let statPosY = 150;
let statWidthX = 100;
let statWidthY = 100;

// Variables for Assets

let HappyFace;
let NeutralFace;
let SadFaceEmoji;
let SkullEmoji
let BlissBG;

// variable for save game button
let SaveGameButton;
let PlayerData = 200;

function preload() {
  HappyFace = loadImage('Assets/SmilingEmoji.png');
  NeutralFace = loadImage('Assets/NeutralFaceEmoji.png');
  SkullEmoji = loadImage('Assets/SkullEmoji.png');
  BlissBG = loadImage('Assets/bliss.jpg');
}



function setup() {
  createCanvas(1920, 1050);
  // health = getItem('score')
  // hunger = getItem('hunger')
  let FeedButton = createButton("feed");
  let EnergizeButton = createButton("energize");    
  let HealButton = createButton("heal");    
  let EntertainButton = createButton("Entertain")
  let SaveGameButton = createButton("Save Game")
  let RestartButton = createButton("restart")
  RestartButton.hide()
  
  // button positions
  FeedButton.position(50, 200);
  EnergizeButton.position(50,275);
  HealButton.position(50, 150);
  EntertainButton.position(50, 125)
  SaveGameButton.position(700, 100)
  RestartButton.position(500,500)
  
  // button functions
  HealButton.mousePressed(healFunction);
  EnergizeButton.mousePressed(EnergizeFunction);
  FeedButton.mousePressed(FeedFunction);
  SaveGameButton.mousePressed(SaveGameFunction);
  RestartButton.mousePressed(RestartFunction)
}

function draw() {
  background(220);
  image(BlissBG, 0, 0, 1920, 1050)
  statLimiter();
  statDrainer(); 
  showStatus();

}

//  Custom Functions


//  Stat Display Functions

function statDrainer() {
  if (healthDrainInterval == 5)
  health = health - 0.00002;
  
  hunger = hunger - 0.0001;
  
  energy = energy - 0.008;
  
  happiness = happiness - 0.0099;
}

function showStatus() {
  text('health: ' + health, 25, 25);
  text('hunger: ' + hunger, 25, 50);
  text('energy: ' + energy, 25, 75);
  text('happiness: ' + happiness, 25, 100);
  
  
  
  if (happiness > 75 && health > 75 && hunger > 75 && energy > 75) {
    image(HappyFace, statPosX, statPosY, statWidthX, statWidthY);
  }

  else if (happiness > 50 && happiness < 75 && health > 75 && hunger > 75 && energy > 75 ) {
    image(NeutralFace, statPosX, statPosY, statWidthX, statWidthY)
  }

}


//  Button Functions (these **MAY** also include some stat-related functions)

function healFunction() {
  health = health + 10;
}

function EnergizeFunction() {
  energy = energy + 25
}

function FeedFunction() {
  hunger = hunger + 12;
}

function statLimiter() {
  //  minimum stat limit
  if (health > 100) {
  health = 100;
  }
  if (hunger > 100) {
  hunger = 100;
  }
  if (energy > 100) {
  energy = 100;
  }
  if (happiness > 100) {
    happiness = 100
  }
  
  // Min stat limit
  if (health < 0)  {
    health = 0
  }
  
  if (hunger < 0)  {
    hunger = 0
  }
  
  if (energy < 0)  {
    energy = 0
  }
  
  if (happiness < 0) {
    happiness = 0
  }
  
}




//  Miscellaneous functions

function SaveGameFunction(){
console.log("Save File Overwritten")
storeItem('score', PlayerData);
}

function RestartFunction() {
  Death = false;
  health = 100;
  hunger = 100;
  energy = 100;  
  happiness = 100;
  
  HealButton.show()
  FeedButton.show()
  EnergizeButton.show()
  EntertainButton.show()


}

// Death Function

function DeathCheck(){
  if (health == 0) {
    Death = true;
    DeathScreen();
  }
}


function DeathScreen() {
HealButton.hide()
FeedButton.hide()
EnergizeButton.hide()
EntertainButton.hide()
}