var img;

function setup() {
  createCanvas(390*2, 240*2);
  pixelDensity(1);
  //colorMode(HSB, 100);
  img = createCapture(VIDEO);
  img.size(320*2, 240*2);
  img.hide();
}

function draw() {
  background(255);
  img.loadPixels();
  loadPixels();
  
  for (var x = 0; x < img.width; x++) {
    for (var y = 0; y < img.height; y++ ) {
      // Calculate the 1D location from a 2D grid
      var loc = (x + y*img.width)*4;
      // Get the R,G,B values from image
      var r,g,b;
      r = img.pixels[loc];
      g = img.pixels[loc+1];
      b = img.pixels[loc+2];
      
      var c = color(r,g,b);

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
      pixels[pixloc] = saturation(c);
      pixels[pixloc+1] = 255;
      pixels[pixloc+2] = 255;
      pixels[pixloc+3] = 255;
    }
  }
  updatePixels();
  
  //image(img, 0, 0, 920, 240);
  
}
