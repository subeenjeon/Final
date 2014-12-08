var pt;
var checkDraw = [];
var sound, amp;

var centerimg;

var fft;
var count;

function preload(){
  sound = loadSound("./ODESZA - Bloom.mp3")
}

function setup() {
  var mycan= createCanvas(1800,1000);
  mycan.parent('jsCanvas');

  background(0);
  pt = loadImage("./home-pattern.jpg");

  centerimg = loadImage("./center.png");

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

  image(centerimg, mouseX, mouseY, 10+amp.getLevel()*300,10+amp.getLevel()*300);
}