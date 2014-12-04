var a = new Array(sketch.windowWidth);
var pt;
var checkDraw = [];
var sound;
var amp;
var a; 

function setup() {
  createCanvas(2000, 1000);
  background(0);
  pt = loadImage("./home-pattern.jpg");
  amp = new p5.Amplitude();
  sound.loop();
  count = 0;

}

var count;
function preload(){
  sound = loadSound("./ODESZA - Bloom.mp3")
}

var s = function( sketch ) {
  var drums, follow

    sketch.setup = function() {
    sketch.createCanvas( sketch.windowWidth, sketch.windowHeight )

    drums = sketch.Gibber.Percussion.EDrums('x*x*x*o-')
    follow = sketch.Gibber.Analysis.Follow( drums )
  };

function draw() {
  sketch.background( follow.getValue() * 255 )
  background(0);
  a = map(amp.getLevel(),0,1,0,50);
  for(var i = 0 ; i <10 ; i++){
    for(var j = 0 ; j <6 ; j++){
        image(pt,i*200-a/2,j*200-a/2-count,200+a,200+a);
     }
  }

  var myp5 = new p5( s )
  
  count++;
  if(count > 200){
    count =0;
  }
}

