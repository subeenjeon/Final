var soundFile;
var pattern;
var checkDraw = [];

function preload(){
  // soundFile = loadSound('./ODESZA - Bloom.mp3');
}

function setup() {
  createCanvas(2000, 1000);
  background(0);
  //pattern = loadImage("home-pattern.jpg");
  for(var i = 0; i<50 ;i++){
    checkDraw[i] = true;
  }



  //soundFile.play();
}

function draw() {
  background(0);
  image(pattern,0,0);

  for(var i = 0 ; i <10 ; i++){
    for(var j = 0 ; j <5 ; j++){
      if(checkDraw[i+j*5]){
        fill(10*i,20*j,0);
        rect(i*200, j*200,200,200);
      }
    }
  }

}
