let conceptHSLRanges = {
  passive: { hue: [180, 240], saturation: [10, 30], lightness: [70, 90] },
  active: { hue: [0, 60], saturation: [70, 100], lightness: [50, 70] },
  dull: { hue: [210, 240], saturation: [5, 20], lightness: [40, 60] },
  bright: { hue: [40, 90], saturation: [80, 100], lightness: [60, 80] },
  cold: { hue: [180, 220], saturation: [50, 80], lightness: [60, 80] },
  warm: { hue: [0, 40], saturation: [70, 100], lightness: [50, 70] },
};

let selectedConcepts = [];

let music;
let click;

function preload() {
  music = loadSound("sound/background-sound.mp3");
  click = loadSound("sound/click.mp3");
}

function setup() {
  const startButton = document.getElementById("startButton");
  startButton.addEventListener("click", () => {
    music.setLoop(true);
    music.play();
    document.getElementById("preloader").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  });

  createCanvas(3600, 400);

  const selectContainer = document.getElementById("select-container");

  Object.keys(conceptHSLRanges).forEach((concept) => {
    const checkbox = createCheckbox(concept.charAt(0).toUpperCase() + concept.slice(1), false);
    checkbox.parent(selectContainer);
    checkbox.changed(() => {
      handleCheckboxChange(concept, checkbox.checked());
    });
  });

  drawPalettes();
}

function draw() {}

function handleCheckboxChange(concept, isChecked) {
  if (isChecked) {
    if (selectedConcepts.length < 2) {
      selectedConcepts.push(concept);
    } else {
      // If two concepts are already selected, uncheck the oldest one
      const oldestConcept = selectedConcepts.shift();
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
        if (checkbox.nextSibling.textContent.toLowerCase() === oldestConcept) {
          checkbox.checked = false;
        }
      });
      selectedConcepts.push(concept);
    }
  } else {
    selectedConcepts = selectedConcepts.filter(c => c !== concept);
  }
  drawPalettes();
}

function drawPalettes() {
  let rectWidth = 150;
  let rectHeight = 40;
  let xStart = 100;
  let yStart = 100;
  let gap = 20;

  colorMode(HSL);

  for (let i = 0; i < 20; i++) {
    let x = xStart + i * (rectWidth + gap);
    for (let row = 0; row < 4; row++) {
      noStroke();

      if (selectedConcepts.length === 1) {
        fill(generateHSLColor(selectedConcepts[0]));
      } else if (selectedConcepts.length === 2) {
        let color1 = generateHSLColor(selectedConcepts[0]);
        let color2 = generateHSLColor(selectedConcepts[1]);
        fill(row % 2 === 0 ? color1 : color2); 
      }
      
      rect(x, yStart + row * rectHeight, rectWidth, rectHeight);
    }
  }
}

function generateHSLColor(concept) {
  let range = conceptHSLRanges[concept];

  let hue = random(range.hue[0], range.hue[1]);
  let saturation = random(range.saturation[0], range.saturation[1]);
  let lightness = random(range.lightness[0], range.lightness[1]);

  return color(hue, saturation, lightness);
}