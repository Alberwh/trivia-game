var bg,bg2,form,system,code,security;
var score=0;
var form 
function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(displayWidth,displayHeight-200);
 // system = new System()
 // security = new Security()
  form = new Form()
  form.display()
}

function draw() {
  //background(bg);
  /*
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear();
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
  */
}