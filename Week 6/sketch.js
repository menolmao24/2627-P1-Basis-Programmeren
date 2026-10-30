//  Stats for the Virtual Pet
let health = 100;
let hunger = 100;
let energy = 100;
let happiness = 100;

let status = ['Happy', 'Tired', 'Sad', 'Hungry'];

// Variables for Assets

let HappyFace;
let NeutralFace;

// variable for save game button
let SaveGameButton;
let PlayerData = 200;

function preload() {
  HappyFace = loadImage('Assets/SmilingEmoji.png');
  // NeutralFace = loadImage('Assets/')
}



function setup() {
  createCanvas(800, 800);
  health = getItem('score')
  hunger = getItem('hunger')
  let FeedButton = createButton("feed");
  let EnergizeButton = createButton("energize");    
  let HealButton = createButton("heal");    
  let EntertainButton = createButton("Entertain")
  let SaveGameButton = createButton("Save Game")
  
  // button positions
  FeedButton.position(50, 200);
  EnergizeButton.position(50,75);
  HealButton.position(50, 100);
  EntertainButton.position(50, 125)
  SaveGameButton.position(700, 100)
  
  // button functions
  HealButton.mousePressed(healFunction);
  EnergizeButton.mousePressed(EnergizeFunction);
  FeedButton.mousePressed(FeedFunction);
  SaveGameButton.mousePressed(SaveGameFunction);

}

function draw() {
  background(220);
  statLimiter();
  statDrainer(); 
  showStatus();


  
  
}

//  Custom Functions


//  Stat Display Functions

function statDrainer() {
  health = health - 0.00002;
  hunger = hunger - 0.0001;
  energy = energy - 0.008;
  
  if (health <= 0)  {
    health = 0
  }
  
  if (hunger <= 0)  {
    hunger = 0
  }
  
  if (energy <= 0)  {
    energy = 0
  }
  
  
  
}

function showStatus() {
  text('health: ' + health, 25, 25);
  text('hunger: ' + hunger, 25, 50);
  text('energy: ' + energy, 25, 75);
  text('happiness: ' + happiness, 25, 100);
  
  
  
  
  
  
  if (health > 75 && hunger > 75 && energy > 75) {
  image(HappyFace, 100, 300, 100, 100);

  }

  else if (health ) {

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

  
}




//  Miscellaneous functions

function SaveGameFunction(){
console.log("Save File Overwritten")
storeItem('score', PlayerData);

}
