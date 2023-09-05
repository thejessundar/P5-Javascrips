
var lst = [];
var prime_lst = []
// var primes = [];
N = 10000
const scale_factor = 0.2


function is_prime(x){
  for (let m = 2; m <= Math.ceil(x/2); m++){
    if (x%m == 0){
      return false
      break
    }
  }
  return true
}

for (let i = 1; i<= N; i++){
  lst.push(i)
}

console.log(lst)

for (let t = 1;t<= lst.length;t++){
  if(is_prime(lst[t])==true){
    // console.log(lst[t]);
    prime_lst.push(lst[t]);
  }
}

prime_lst.pop()
console.log(prime_lst)

















// console.log(lst)

function setup() {
  createCanvas(1450,820);
}

function draw() {
  background(0);

  translate(725,410);
  // noFill();
  // stroke(255);
  // point(0,0)
  // strokeWeight(30)


  function plot1(l){
    for (let j = 0;j<= l.length;j++){
    let x = l[j]*cos(l[j]*scale_factor)*scale_factor
    let y = l[j]*sin(l[j]*scale_factor)*scale_factor
    noFill();
    stroke(255);
    point(x,y)
    strokeWeight(3)


    }
    

  }

  function plot2(l){
    for (let j = 0;j<= l.length;j++){
    let x = l[j]*cos(l[j])*scale_factor
    let y = l[j]*sin(l[j])*scale_factor

    noFill();
    stroke(255,0,0);
    point(x,y)
    strokeWeight(5)
    }
    

  }

 plot1(lst);
//  plot2(prime_lst);

}
  

