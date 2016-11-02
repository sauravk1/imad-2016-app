var button=document.getElementById('counter');
var counter=0;
button.onclick=function()
{
    counter=counter+1;
    var span=document.GetElementById('count');
    span.innerHTML=counter.toString();
    
};var num = 600,
  frms = 60,
  z = 15;
var angle=0, theta=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(238);
  translate(width / 2, height / 2);

  var h = height/2;
  for (var i = 0; i < z; i++) {
    f = (i % 2 === 0) ? 238 : 34;
    drawThing(h - (h*.95 / z * i), f, i);
  }

  theta += TWO_PI / frms;
  //if (frameCount<frms) saveFrame("img/image-###.gif");
}

function drawThing(diam, col, n) {
  fill(col);
  beginShape();
  var d = 0;
  for (var i = 0; i < num; i++) {
    var offSet = PI / z * n;
    var angle = TWO_PI / num * i;
    var s = 0.7 + 0.4 * sin(sq(offSet) + theta + angle * 4.0);
    d = 0.25 + 0.2 * pow(s, 0.8);
    d += 0.08 * pow(0.5 + 0.5 + cos(4 * angle), 1.0);
    var x = cos(angle) * d * diam;
    var y = sin(angle) * d * diam;
    vertex(x, y);
  }
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}