let emotionColors = {
  joy: [
    "#FCFFC1", "#FFD18E", "#A3D8FF", "#F7418F", "#88D66C",
    "#D8B4F8", "#B2A4FF", "#F2F013", "#AF47D2", "#F6D6D6",
  ],
  sadness: [
    "#003366", "#336699", "#6699CC", "#99CCFF", "#D9F2FF",
    "#3F51B5", "#7986CB", "#1A237E", "#0D47A1", "#4FC3F7",
  ],
  anger: [
    "#FF0000", "#D32F2F", "#C2185B", "#9C27B0", "#E64A19",
    "#FF5722", "#F44336", "#B71C1C", "#8E0000", "#D50000",
  ],
};

let currentEmotion = "joy"; 

function setup() {
  createCanvas(3600, 400);
  background(233);

  
  const selectContainer = document.getElementById("select-container");
  const select = createSelect();
  select.parent(selectContainer); 
  select.option("Joy", "joy");
  select.option("Sadness", "sadness");
  select.option("Anger", "anger");
  
  select.changed(() => {
    currentEmotion = select.value();
    drawPalettes(); 
  });

  drawPalettes(); 
}

function drawPalettes() {
  background(233); 

  let rectWidth = 150; 
  let rectHeight = 40; 
  let xStart = 100; 
  let yStart = 100; 
  let gap = 20; 

  for (let i = 0; i < 20; i++) { 
    let x = xStart + i * (rectWidth + gap);
    for (let row = 0; row < 4; row++) {
      noStroke();
      fill(random(emotionColors[currentEmotion]));
      rect(x, yStart + row * rectHeight, rectWidth, rectHeight);
    }
  }
}
