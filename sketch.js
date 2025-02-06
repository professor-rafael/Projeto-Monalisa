function setup() {
createCanvas(400, 400);
}

function draw() {
background("green");
  fill("blue");
  circle (200,200,300);
  fill("white");
  circle (150,150,60);
  circle (250,150,60);
  line(150,270,250,270);
  fill("grey");
  triangle(200,180,170,220,220,220);
  line(123,115,178,113);
  line(225,116,279,106);
  circle(150, 150, 10);
  circle(250, 150, 10);
  
  if(mouseIsPressed) { 
    console.log(mouseX, mouseY);
   
}
  
}
