var capture;
var v;
function setup() {
  createCanvas(390, 240);
  
  
  /*capture = createCapture(VIDEO);
  capture.size(320, 240);*/
  //capture.hide();*/
}

function draw() {
  v = document.getElementById('ciao');
  background(255);
  image(v, 0, 0, 320, 240);
}
