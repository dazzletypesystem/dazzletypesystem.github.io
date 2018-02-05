var img;

function setup() {
  createCanvas(390, 240);
  img = createCapture(VIDEO);
  img.size(320, 240);
  //capture.hide();

  pixelDensity(1);
  img.loadPixels();
  loadPixels();
}

function draw() {
  background(255);
  image(img, 0, 0, 320, 240);

  for (var x = 0; x < img.width; x++) {
    for (var y = 0; y < img.height; y++ ) {
      // Calculate the 1D location from a 2D grid
      var loc = (x + y*img.width)*4;
      // Get the R,G,B values from image
      var r,g,b;
      r = img.pixels[loc];
      g = img.pixels[loc+1];
      b = img.pixels[loc+2];

/*      // Calculate an amount to change brightness based on proximity to the mouse
      var maxdist = 50;
      var d = dist(x, y, mouseX, mouseY);
      var adjustbrightness = 255*(maxdist-d)/maxdist;
      r += adjustbrightness;
      // Constrain RGB to make sure they are within 0-255 color range
      r = constrain(r, 0, 255);
      // Make a new color and set pixel in the window
      //color c = color(r, g, b);*/


      var pixloc = (y*width + x)*4;
      pixels[pixloc] = r;
      pixels[pixloc+1] = map(mouseX,0,width,0,255);
      pixels[pixloc+2] = map(mouseX,0,width,0,255);
      pixels[pixloc+3] = 255;
    }
  }
  updatePixels();
}
