function setup() {
    createCanvas(600, 600);
    background("pink");
  }
  
  function draw() {
  
    stroke("blue");
    fill("green");
  
    // console.log(mouseIspresed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  