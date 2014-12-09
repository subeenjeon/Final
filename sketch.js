var pt;
var checkDraw = [];
var sound, amp;

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

  image(img1, 400, 300);

  image(img2, 1200, 300);
}  