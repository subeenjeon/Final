var pt;
var checkDraw = [];
var sound;
var amp;
function preload(){
  sound = loadSound("./ODESZA - Bloom.mp4")
}

function setup() {
  createCanvas(2000, 1000);
  background(0);
  pt = loadImage("./home-pattern.jpg");
  sound.play();
  amp = new p5.Amplitude();
}

function draw() {
  background(0);
  var a = map(amp.getLevel(),0,1,0,50);
  for(var i = 0 ; i <10 ; i++){
    for(var j = 0 ; j <5 ; j++){

        fill(10*i,20*j,0);
        rect(i*200, j*200,200,200);
        image(pt,i*200-a/2,j*200-a/2,200+a.200+a);


    }
  }

}
