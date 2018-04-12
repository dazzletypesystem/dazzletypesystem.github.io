var cane, can,back;
var img;

 function setup(){
   pixelDensity(1);
   cane =createCanvas(480*2,360*2);
   img = createImage(width,height);
   
   
  
  cane.id('c');
  cane.position(0,0);
  
  var v = document.getElementById('ciao');
  can = document.getElementById('c');
  
  var context = can.getContext('2d');
	back = document.createElement('canvas');
	var backcontext = back.getContext('2d');
 
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
	image(img,0,0,200,200);
	// Start over!
	setTimeout(drawF,20,v,c,bc,w,h);
}

function mouseClicked() {
  
  img.copy(back,0, 0, width, height, 0, 0, width, height);

  //saveCanvas(cane, 'myCanvas', 'jpg');
}

function touchEnded() {
  img.copy(back,0, 0, width, height, 0, 0, width, height);
}