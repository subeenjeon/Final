var soundFile;
var rSlider, gSlider, bSlider;

var fft;
var fftBands = 1024;

// Array of amplitude values (0-255) over time.
var waveform = [];
function preload(){
	soundFile = loadSound('./ODESZA - Bloom.mp3');
}
function setup() {
  createCanvas(fftBands, 500);
  fill(255, 40, 255);
  stroke(240);
  strokeWeight(4);

  fft = new p5.FFT(0, fftBands);

  textSize(15)
  noStroke();

  // create sliders
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);


console.log("dddddD");
  
  
  soundFile.play();
}

function draw() {
  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  background(r, g, b);
  text("red", 165, 35);
  text("green", 165, 65);
  text("blue", 165, 95);



  waveform = fft.waveform();


  fill(255,map(waveform[0], 0, 256, 0,255));
  	rect(0,0,width,height);


  // map the oscillator frequency to mouse position
 
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
