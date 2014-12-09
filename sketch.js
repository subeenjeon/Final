var pt;
var checkDraw = [];
var sound, analyzer;

var img1;
var img2;

var fft;
var count;

function preload(){
  sound = loadSound("./ODESZA - Bloom.mp3")
}

function setup() {
  var mycan= createCanvas(1900,1000);
  mycan.parent('jsCanvas');

  background(0);
  pt = loadImage("./home-pattern.png");

  img1 = loadImage("./left.png");
  img2 = loadImage("./right.png");

  sound.loop();
  analyzer = new p5.Amplitude();

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

  var vol = analyzer.getLevel();

  image(img1, 430, 300, 50+vol*800, 50+vol*800);
  image(img2, 1225, 300, 50+vol*800, 50+vol*800);
}  