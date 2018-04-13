var cane, can,back,backcontext,v;
var img, mask, mask1;
var button;
var showMe=false;

function preload(){
  mask = loadImage("assets/mask.png");
  mask1 = loadImage("assets/mask1.png");
}

 function setup(){
   pixelDensity(1);
   cane =createCanvas(500,500);
   img = createImage(width,height);
   button = createButton('click');
   button.mousePressed(click);
   
  cane.id('c');
  cane.position(0,0);
  
  v = document.getElementById('ciao');
  can = document.getElementById('c');
  
  var context = can.getContext('2d');
	back = document.createElement('canvas');
	backcontext = back.getContext('2d');
 
	var cw,ch;
 
	v.addEventListener('play', function(){
		cw = v.clientWidth;
		ch = v.clientHeight;
		can.width = cw;
		can.height = ch;
		back.width = cw;
		back.height = ch;
		drawF(v,context,backcontext,cw,ch);
	},false);
 }
 
document.addEventListener('DOMContentLoaded', function(){
	
	

},false);
 
function drawF(v,c,bc,w,h) {
	if(v.paused || v.ended)	return false;
	// First, draw it into the backing canvas
	bc.drawImage(v,0,0,w,h);
	// Grab the pixel data from the backing canvas
	var idata = bc.getImageData(0,0,w,h);
	/*var data = idata.data;
	// Loop through the pixels, turning them grayscale
	for(var i = 0; i < data.length; i+=4) {
		var r = data[i];
		var g = data[i+1];
		var b = data[i+2];
		var brightness = (3*r+4*g+b)>>>3;
		data[i] = brightness;
		data[i+1] = brightness;
		data[i+2] = brightness;
	}
	idata.data = data;*/
	// Draw the pixels onto the visible canvas
	c.putImageData(idata,0,0);
	
	//copy(0, 0, width, height, 0, 0, 100, 100);
	//image(img,0,0,200,200);
	if(showMe){
	  image(img,0,0,width,height);
	}
	// Start over!
	setTimeout(drawF,20,v,c,bc,w,h);
}

function click(){
  img.copy(cane,0, 0, width, height, 0, 0, width, height);
  img.mask(img1);
  showMe=true;
}

/*
function mouseClicked() {

  //saveCanvas(cane, 'myCanvas', 'jpg');
}

function touchEnded() {
 img.copy(cane,0, 0, width, height, 0, 0, width, height);
  saveCanvas(cane, 'myCanvas', 'jpg');
}*/

