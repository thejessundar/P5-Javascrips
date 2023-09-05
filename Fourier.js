// var r = 100;
var x = 0
var y = 0
var time = 0;
var x1 = 0
var y1 = 0

var wave = []

var trans = 400

function setup(){
  createCanvas(2000,700);
  // background(0);
}

function draw(){
  background(0);
  translate(350,350);

 
  for (let j = 1;j<2;j++){
    // x = x1
    // y = y1

    let r = (50/j*PI)
    x1 = x + r*cos(j*time)
    y1 = y + r*sin(j*time)
    
    stroke(255)
    noFill()
    ellipse(x,y,r*2)

    fill(255);
    line(x,y,x1,y1)
    ellipse(x1,y1,8)
    
    
  }
  


  // stroke(255);
  // noFill();
  // ellipse(0,0,2*r);
  // var x = r*cos(time)
  // var y = r*sin(time)

  // fill(255)
  // ellipse(x,y,8)

  // line(0,0,x,y)
 
  // noFill();
  // ellipse(x,y,2*r2);
  // var x2 = r2*cos(2*time)+x
  // var y2 = r2*sin(2*time)+y
  // line(x,y,x2,y2)
  // fill(255)
  // ellipse(x,y,8)

  // wave.unshift(y2)




  // translate(trans,0)
  // beginShape();
  // for (let i = 0; i<wave.length;i++){
  //   noFill()
  //   vertex(i,wave[i]);
  // }
  // endShape();
  // line(-trans+x2,y2,0,wave[0])
  // // ellipse(0,0,5)

  // if (wave.length>300){
  //   wave.pop()
  // }
  

  strokeWeight(2)
  time-=0.02
}