var pattern;
var checkDraw = [];


function setup() {
  createCanvas(2000, 1000);
  background(0);
  pattern = loadImage("home-pattern.jpg");

}

function draw() {
  background(0);


  for(var i = 0 ; i <10 ; i++){
    for(var j = 0 ; j <5 ; j++){

        fill(10*i,20*j,0);
        rect(i*200, j*200,200,200);

    }
  }

}
