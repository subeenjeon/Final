var a = new Array(800);
var sound;
function preload(){
	sound = loadSound('ODESZA - Bloom.mp3');
}

function setup(){

	createCanvas(800,600);
	sound.play();
}


function draw(){
	background(255);
	if(sound.isPlaying()){
		fill(0,255,0);
	}else{
		fill(255,0,0);
	}
	noStroke();
	for(var i = 0; i < 800 ; i++){
		rect(i,0,1,getPeaks[i]);
	}


}


// var s = function( sketch ) {
//   var drums, follow
  
//   sketch.setup = function() {
//     sketch.createCanvas( sketch.windowWidth, sketch.windowHeight )

//     drums = sketch.Gibber.Percussion.EDrums('x*x*x*o-')
//     follow = sketch.Gibber.Analysis.Follow( drums )
//   };

//   sketch.draw = function() {
//     sketch.background( follow.getValue() * 255 )
//   }
// }

// var myp5 = new p5( s )