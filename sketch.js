var doodle; 

function preload(){
  jackImg = loadImage("jack.JPG")
}
function setup(){
createCanvas(500,700); 
doodle = new Doodle(); 
rectMode(CENTER); 
}

function draw(){
  background("white")
  doodle.draw();
  doodle.update(); 
}

