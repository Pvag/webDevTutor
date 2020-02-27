function setup() {
  const cnv = createCanvas(400, 200); // size has been replaced in p5 by createCanvas
  background(0);
  cnv.parent("my-sketch"); // easily set the parent for this canvas (avoids putting it to the end of the web page, which is the default behaviour)
}

function draw() {
  rect(200, 50, 40, 40);
  circle(width/2, height/2, 10);
  rect(100, 20, 20, 20);
}