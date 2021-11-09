var bgimg;
var mi;
var ms;
var iground;
var coini;
var ob1i, ob2i, ob3i

function preload() {
  bgimg = loadImage("backg.jpg");
  mi = loadAnimation("Capture1.png", "Capture3.png", "Capture4.png");
  coini = loadImage("coin.png")
ob1i = loadImage("obstacle1.png")
ob2i = loadImage("obstacle2.png")
ob3i = loadImage("obstacle3.png")
}

function setup() {
  createCanvas(600, 200);
  ms = createSprite(50, 50, 70, 70);
  ms.addAnimation("Mario Game", mi);
  ms.scale = 0.5;
  iground = createSprite(300, 170, 600, 5);
  iground.visible = false;
}

function draw() {
  background(bgimg);
  if (keyDown("space")) {
    ms.velocityY = -5;
  }
  ms.velocityY = ms.velocityY + 1;
  ms.collide(iground);
  drawSprites();
}
