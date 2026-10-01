let kleur;
function setup() {
  createCanvas(1280,720);
  kleur = [color(255),color(0,255,0)]
}

function draw() {
  background(220);
  for (let i = 0; i <= 5; i++) {
    if (i == 4) {
      fill(kleur[1])
    } else {
      fill(kleur[0])
    }
    square((i * 30), 30, 30)
    square(50,(i * 25), 50);

  }
}
