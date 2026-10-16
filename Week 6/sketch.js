//  Stats for the Virtual Pet
let health = 100;
let hunger = 100;
let energy = 100;

let status = ['Happy', 'Tired', 'Sad', 'Hungry'];

// Variables for Assets
let HappyFace;

function preload() {
  let HappyFace = loadImage('Assets/SmilingEmoji.png')
}

function setup() {
  createCanvas(800, 800);
  let FeedButton = createButton("feed")
  let EnergizeButton = createButton("Energize")    
  let HealButton = createButton("heal")    
  // let EnergizeButton = createButton("Energize")    
  
  FeedButton.position(50,50)
  EnergizeButton.position(50,75)
  
  
}

function draw() {
  background(220);
  text('health: ' + health, 20, 20)
  image(HappyFace, 100, 300, 100, 100, 200, 200)
  HappyFace.resize(50,50)
}



