let sketch = function(p) {

  p.setup = function() {
    p.createCanvas(400, 200); // size has been replaced in p5 by createCanvas
    p.background(0);
  };

  p.draw = function() {
    p.rect(200, 50, 40, 40);
    p.circle(p.width/2, p.height/2, 10);
    p.rect(100, 20, 20, 20);
  };

}

let myp5 = new p5(sketch, "my-sketch");