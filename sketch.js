var pt;
var checkDraw = [];
var sound;

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

}

function draw() {
  background(0);
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

function text(){
    fill(Math.random()*255,Math.random()*255,Math.random()*255,100);
    stroke(255);
    textSize(100);
    textFont("Helvetica");
    text("Subeen Jeon", 130, 250);
}