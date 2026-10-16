let xPos;
let yPos;

let QuizData = "/"



let col2;
let question1 = {
  leeftijd: 21,
  actief: true
};



function setup() {
  createCanvas(1100, 500);
}

function draw() {
  background(220);
  
  fill("beige");
  rect(0,0,1100,500);
  
  
  fill("aqua");
  ellipse(550,50,200,100);
  
  //  answer sheet left side
  rect(200, 250, 250, 75);
  rect(200, 350, 250, 75);
  
  // answer sheet right side
  rect(475, 250, 250, 75);
  rect(475, 350, 250, 75);

  
  // fill color 
  fill("black")
  
  // text for in the answer sheet
  text("A.  ", 475, 250)


}



