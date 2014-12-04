var pt;
var checkDraw = [];
var sound;
var amp;
 var a 
function preload(){
  sound = loadSound("./ODESZA - Bloom.mp4")
}

function setup() {
  createCanvas(2000, 1000);
  background(0);
  pt = loadImage("./home-pattern.jpg");
  amp = new p5.Amplitude();
  sound.play();
  
}

function draw() {
  background(0);
  a = map(amp.getLevel(),0,1,0,50);
  for(var i = 0 ; i <10 ; i++){
    for(var j = 0 ; j <5 ; j++){
        image(pt,i*200,j*200);
     }
  }

}
