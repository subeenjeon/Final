var soundFile;


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
  soundFile.loop(); 
  // create a new Amplitude analyzer
  analyzer = new p5.Amlitude();
  // Patch the input to an volume analyzer
  analyzer.sotInput(song);

  fft = new p5.FFT(0, fftBands);

 
}

function draw() {
  background(0);

  waveform = fft.waveform();


  fill(255,map(waveform[0], 0, 256, 0,255));
  	rect(0,0,width,height);

 // Get the overall volume (between 0 and 1.0)
  var vol = analyzer.getLevel();
  fill(127);
  stroke(0);

  // Draw an ellipse with size based on volume
  ellipse(width/2, height/2, 10+vol*200, 10+vol*200);

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
