var soundFile;
var pattern;
var checkDraw = [];


var fft;
var fftBands = 1024;

// Array of amplitude values (0-255) over time.
var waveform = [];
function preload(){
	soundFile = loadSound('./ODESZA - Bloom.mp3');
}

function setup() {
  createCanvas(2000, 1000);
  background(0);
  pattern = loadImage("home-pattern");
  for(var i = 0; i<10 ;i++){
  	checkDraw[i] = true;
  }

  stroke(240);
  strokeWeight(4);

  fft = new p5.FFT(0, fftBands);

  soundFile.play();
}

function draw() {
  background(0);
  image(pattern,0,0);

  for(var i = 0 ; i <10 ; i++){
  	for(var j = 0 ; j <5 ; i++){
  		if(checkDraw[i]){
  			rect((i-j*2)*200, j*200,2000,1000);
  		}
  	}
  }

  waveform = fft.waveform();


  fill(255,map(waveform[0], 0, 256, 0,255));
  	rect(0,0,width,height);
}

// TOGGLE INPUT
function keyPressed() {
  if (key == 'T') {
    toggleInput();
  }
}

// start with mic as input
var inputMode = 0;

function toggleInput() {
  inputMode += 1;
  inputMode = inputMode % 6;
  switch (inputMode) {
    case 0: // soundFile mode
      soundFile.play();
      osc.stop();
      fft.setInput(soundFile);
      currentSource = 'soundFile';
      break;
  }
}
