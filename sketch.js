var pt;
var checkDraw = [];
var sound;

var fft;
var fftBands = 2000;

var count;

var waveform = [];
function preload(){
  sound = loadSound("./ODESZA - Bloom.mp3")
}

function setup() {
  createCanvas(fftBands, 1000);
  background(0);
  pt = loadImage("./home-pattern.jpg");
  count = 0;

  fft = new p5.FFT(0, fftBands);
 
  sound.loop();
}

function draw() {
  background(0);

  waveform = fft.waveform();

  fill(255,map(waveform[0], 0, 256, 0,255));
    rect(0,0,width,height);

  for(var i = 0 ; i <10 ; i++){
    for(var j = 0 ; j <6 ; j++){
        image(pt,i*200,j*200-count,200,200);
     }
  }

  count++;
  if(count > 200){
    count =0;
  }
}
