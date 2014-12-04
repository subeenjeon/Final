var pt;
var checkDraw = [];
var sound;
var a; 

var fft;

var count;
function preload(){
  sound = loadSound("./ODESZA - Bloom.mp3")
}

function setup() {
  createCanvas(2000, 1000);
  background(0);
  pt = loadImage("./home-pattern.jpg");
  sound.loop();
  count = 0;
  fft = new p5.FFT(0, 2000);
}

function draw() {
  background(0);

  waveform = fft.waveform();

  fill(255,map(waveform[0], 0, 256, 0, 255));
    rect(0,0,width,height);

  a = map(getLevel(),0,1,0,50);
  for(var i = 0 ; i <10 ; i++){
    for(var j = 0 ; j <6 ; j++){
        image(pt,i*200-a/2,j*200-a/2-count,200+a,200+a);
     }
  }

  count++;
  if(count > 200){
    count =0;
  }
}
