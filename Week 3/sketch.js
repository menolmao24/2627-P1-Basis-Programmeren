// fix the turn can override color issue
// variables
let color = false;
let MousePositie = " ";

//  mouse hover color
let MouseOverColour = "white"
let MouseOverColour2 = "white"
let MouseOverColour3 = "white"
let MouseOverColour4 = "white"
let MouseOverColour5 = "white"
let MouseOverColour6 = "white"
let MouseOverColour7 = "white"
let MouseOverColour8 = "white"
let MouseOverColour9 = "white"

let checkWinner = false;
let winner = 0;
let tie = "You Tied!"

// players
let turn = 1;

// boxes
let vak1
let vak2
let vak3

function setup() {
  createCanvas(800, 800);
}
// Main function (draw)
function draw() {
  background("orange")



  fill("gray")
  textSize(25)
  text("x = " + mouseX, 10, 20)
  text("y = " + mouseY, 10, 40)
  text(MousePositie, 50, 20)

  // background
  stroke("black")
  fill("green")
  rect(50, 50, 400, 450)

  // rectangles

  // if vak1 ()
  fill(MouseOverColour)
  rect(100, 100, 75, 75) //Box 1 

  fill(MouseOverColour2)
  rect(200, 100, 75, 75) // box 2

  fill(MouseOverColour3)
  rect(300, 100, 75, 75) // box 3

  // row 2
  fill(MouseOverColour4)
  rect(100, 200, 75, 75) // row 2 box 1
  fill(MouseOverColour5)
  rect(200, 200, 75, 75) // row 2 box 2
  fill(MouseOverColour6)
  rect(300, 200, 75, 75) // row 2 box 3

  // row 3
  fill(MouseOverColour7)
  rect(100, 300, 75, 75) // row 2 box 1
  fill(MouseOverColour8)
  rect(200, 300, 75, 75) // row 2 box 2
  fill(MouseOverColour9)
  rect(300, 300, 75, 75) // row 2 box 3


  if (checkWinner == true) {
    winScherm(winner)
  }  // circle(mouseX,mouseY,50)
}


function mousePressed() {
  if (winner == 0) {

    let newColor = "blue"
    if (turn == 1) {
      newColor = "red"
    }

    //
    if (mouseX > 100 && mouseX < 175 && mouseY > 100 && mouseY < 175 && MouseOverColour == "white") {
      MouseOverColour = newColor;
      swapPlayer()
    }
    if (mouseX > 200 && mouseX < 275 && mouseY > 100 && mouseY < 175 && MouseOverColour2 == "white") {
      MouseOverColour2 = newColor;
      swapPlayer()
    }
    if (mouseX > 300 && mouseX < 375 && mouseY > 100 && mouseY < 175 && MouseOverColour3 == "white") {
      MouseOverColour3 = newColor;
      swapPlayer()
    }
    if (mouseX > 100 && mouseX < 175 && mouseY > 200 && mouseY < 275 && MouseOverColour4 == "white") {
      MouseOverColour4 = newColor;
      swapPlayer()
    }
    if (mouseX > 200 && mouseX < 275 && mouseY > 200 && mouseY < 275 && MouseOverColour5 == "white") {
      MouseOverColour5 = newColor;
      swapPlayer()
    }
    if (mouseX > 300 && mouseX < 375 && mouseY > 200 && mouseY < 275 && MouseOverColour6 == "white") {
      MouseOverColour6 = newColor;
      swapPlayer()
    }
    if (mouseX > 100 && mouseX < 175 && mouseY > 300 && mouseY < 375 && MouseOverColour7 == "white") {
      MouseOverColour7 = newColor;
      swapPlayer()
    }
    if (mouseX > 200 && mouseX < 275 && mouseY > 300 && mouseY < 375 && MouseOverColour8 == "white") {
      MouseOverColour8 = newColor;
      swapPlayer()
    }
    if (mouseX > 300 && mouseX < 375 && mouseY > 300 && mouseY < 375 && MouseOverColour9 == "white") {
      MouseOverColour9 = newColor;
      swapPlayer()
    }
  }



  checkWin()
  // else if (checkwinner == false) {
  // turn = 0
  // }
}

function swapPlayer() {
  if (turn == 1) {
    turn = 2

  }
  else if (turn == 2) {
    turn = 1
  }
}

// check win function
function checkWin() {
  if (MouseOverColour === MouseOverColour2 && MouseOverColour === MouseOverColour3 && MouseOverColour != "white") {
    winner = MouseOverColour
  }
  if (MouseOverColour4 === MouseOverColour5 && MouseOverColour4 === MouseOverColour6 && MouseOverColour4 != "white") {
    winner = MouseOverColour4
  }
  if (MouseOverColour7 === MouseOverColour8 && MouseOverColour7 === MouseOverColour9 && MouseOverColour7 != "white") {
    winner = MouseOverColour7
  }
  if (MouseOverColour === MouseOverColour4 && MouseOverColour === MouseOverColour7 && MouseOverColour != "white") {
    winner = MouseOverColour
  }
  if (MouseOverColour2 === MouseOverColour5 && MouseOverColour2 === MouseOverColour8 && MouseOverColour2 != "white") {
    winner = MouseOverColour2
  }
  if (MouseOverColour3 === MouseOverColour6 && MouseOverColour3 === MouseOverColour9 && MouseOverColour3 != "white") {
    winner = MouseOverColour3
  }
  if (MouseOverColour === MouseOverColour5 && MouseOverColour === MouseOverColour9 && MouseOverColour != "white") {
    winner = MouseOverColour
  }
  if (MouseOverColour3 === MouseOverColour5 && MouseOverColour3 === MouseOverColour7 && MouseOverColour3 != "white") {
    winner = MouseOverColour3
  }

  if (winner == "white") {
    winner = null;
  }


  // hier weet je wie er heeft gewonnen, maak een winscherm!
  if (winner != "white" && winner != 0) {
    checkWinner = true;
    console.log(checkWinner)

  }

}


function winScherm(winner) {
  console.log("de winnaar is " + winner);
  textSize(25)
  fill("black")
  text("congrats you won mf", 600, 600, 100, 100)

}