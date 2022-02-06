let windowX;
let windowY;
let windowWidth;
let windowHeight;
let curtainHeight;
let mouseP;
let mouseLastP = [];

function setup() {
  createCanvas(800, 800);
  windowX = width / 4;
  windowY = width / 4;
  windowWidth = width / 2;
  windowHeight = height / 2;
  mouseP = false;
}

function draw() {
  background(250, 249, 246);
  noStroke();
  fill(200);
  rect(windowX, windowY, windowWidth, windowHeight);
  //noStroke();
  stroke(210);
  fill(250, 249, 246);
  curtainHeight = mouseY - windowY;

  if (
    mouseX > windowX &&
    mouseX < windowX + windowWidth &&
    mouseY > windowY &&
    mouseY < windowY + windowHeight &&
    mouseP == true
  ) {
    rect(windowX, windowX, windowWidth, curtainHeight); // if mousepressed within window, stretch curtain
  } else {
    // in any other case
    rect(windowX, windowX, windowWidth, 20);
  }
}

function mousePressed() {
  mouseP = true;
}

function mouseReleased() {
  mouseP = false;
}
