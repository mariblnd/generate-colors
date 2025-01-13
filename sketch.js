function setup() {
    createCanvas(400, 400);
    background(220);
  
    let colors = [
      "#FCFFC1",
      "#FFD18E",
      "#A3D8FF",
      "#F7418F",
      "#88D66C",
      "#D8B4F8",
      "#B2A4FF",
      "#F2F013",
      "#AF47D2",
      "#F6D6D6",
    ];
  
    let rectWidth = width / 2; 
    let rectHeight = height / 8; 
  
    let x = (width - rectWidth) / 2; 
    let startY = (height - rectHeight * 4) / 2; 
  
    for (let row = 0; row < 4; row++) {
      noStroke();
      fill(random(colors));
      rect(x, startY + rectHeight * row, rectWidth, rectHeight); // 
    }
  }
  
  function draw() {
    
  }
  