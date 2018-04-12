var capture;

function setup() {
  createCanvas(390, 240);
  var v = document.getElementById('ciao');
  
  /*capture = createCapture(VIDEO);
  capture.size(320, 240);*/
  //capture.hide();*/
}

function draw() {
  background(255);
  image(v, 0, 0, 320, 240);
}
