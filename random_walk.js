
function setup() {
    createCanvas(1000, 800);
    background(0);
}

let x = 0
let y = 0

function draw() {
    // background(0)
    translate(500,400);
   
    
    beginShape();
    for (let i =0; i<=100 ;i++){

        var t = Math.floor(Math.random()*4);

        switch (t) {
            case 0:
            x = x + 1;
            break;
            case 1:
            y = y + 1;
            break;
            case 2:
            x = x - 1;
            break;
            case 3:
            y = y - 1;
        }
        stroke(255);
        vertex(x,y);
        strokeWeight(1);
        noFill()
    }
    endShape();
   
}
    

