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

  sampler = Sampler().record( soundFile, 1 )
    .note.seq( [.25,.5,1,2].rnd(), [1/4,1/8,1/2].rnd() )
    .fx.add( Delay(1/64))
    .pan.seq( Rndf(-1,1) )

  bass = Mono('bass')
    .note.seq( [0,7], 1/8 )

  Gibber.scale.root.seq( ['c4','eb4'], 1 )


console.log("dddddD");
  
  
  soundFile.play();
}

function draw() {
  background(0);

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
