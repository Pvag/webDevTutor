let x, xSpeed, side;

function setup() {
  const cnv = createCanvas(400, 200); // size has been replaced in p5 by createCanvas
  background(0);
  cnv.parent("my-sketch"); // easily set the parent for this canvas (avoids putting it to the end of the web page, which is the default behaviour)
  x = 10;
  xSpeed = 4;
  side = 20;
}

function draw() {
  // rect(200, 50, 40, 40);
  // circle(width/2, height/2, 10);
  // rect(100, 20, 20, 20);
  background(0);
  if (x >= width - side || x <= 0) xSpeed = -xSpeed;
  rect(x, height/2 - side/2, side, side);
  x += xSpeed;
}