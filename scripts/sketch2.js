function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight, WEBGL);
  myCanvas.parent("sphereCanvas");
  noStroke();
}

function draw() {
  background(204,70,200);
  var dirY = (mouseY / height - 0.5) * 3;
  var dirX = (mouseX / width - 0.5) * 3;
  directionalLight(100, 100, 20, dirX, dirY, 1);
  ambientLight(204,70,200);
  translate(0,0,0);
  sphere(height/2,50);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
