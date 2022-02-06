let windowX;
let windowY;
let windowWidth;
let windowHeight;
let curtainHeight;
let mouseP;
let mouseR;
let lastCurtainHeight;

function setup() {
  createCanvas(800, 800);
  windowX = width / 4;
  windowY = width / 4;
  windowWidth = width / 2;
  windowHeight = height / 2;
  mouseP = false;
  mouseR = false;
  curtainHeight = 20; //initial value
}

function draw() {
  background(250, 249, 246);
  noStroke();
  fill(200);
  rect(windowX, windowY, windowWidth, windowHeight);
  stroke(210);
  fill(250, 249, 246);

  if (
    // if mousepressed within window, stretch curtain
    mouseX > windowX &&
    mouseX < windowX + windowWidth &&
    mouseY > windowY &&
    mouseY < windowY + windowHeight &&
    mouseP == true
  ) {
    curtainHeight = mouseY - windowY; // keeps drawing this if mousepress no longer true
    lastCurtainHeight = curtainHeight;
    console.log("Curtain is stretched");
  } else if (
    mouseX > windowX &&
    mouseX < windowX + windowWidth &&
    mouseY > windowY &&
    mouseY < windowY + windowHeight &&
    mouseP == false
  ) {
    console.log("Curtain released");
  } else {
    console.log("Curtain not active");
  }
  rect(windowX, windowX, windowWidth, curtainHeight); // draw curtain with some height
}

function mousePressed() {
  mouseP = true;
}

function mouseReleased() {
  mouseR = true;
  mouseP = false;
}

//make black and white
//chnge gray to picture that is certian size or behind this view
//make it to api
//make new image come when curtain is rolled down
//make touchscreen workß
//takw to three.js
