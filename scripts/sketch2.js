function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight, WEBGL);
  myCanvas.parent("sphereCanvas");
  noStroke();
}

function draw() {
  background(20,20,20);
  var dirY = (mouseY / height - 0.5) * 3;
  var dirX = (mouseX / width - 0.5) * 3;
  directionalLight(204, 40, 200, dirX, dirY, 1);
  ambientLight(20,20,20);
  translate(0,0,0);
  sphere(height/1.8,50);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
