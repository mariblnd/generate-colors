let conceptHSLRanges = {
  passive: { hue: [180, 240], saturation: [10, 30], lightness: [70, 90] },
  active: { hue: [0, 60], saturation: [70, 100], lightness: [50, 70] },
  dull: { hue: [210, 240], saturation: [5, 20], lightness: [40, 60] },
  bright: { hue: [40, 90], saturation: [80, 100], lightness: [60, 80] },
  cold: { hue: [180, 220], saturation: [50, 80], lightness: [60, 80] },
  warm: { hue: [0, 40], saturation: [70, 100], lightness: [50, 70] },
};

let selectedConcepts = [];
let palettes = [];
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

  createCanvas(4800, 400);

  const selectContainer = document.getElementById("select-container");

  // Ajouter des cases à cocher pour chaque concept
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
      // Si deux concepts sont déjà sélectionnés, désélectionner le plus ancien
      const oldestConcept = selectedConcepts.shift();
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach((checkbox) => {
        if (checkbox.nextSibling.textContent.toLowerCase() === oldestConcept) {
          checkbox.checked = false;
        }
      });
      selectedConcepts.push(concept);
    }
  } else {
    selectedConcepts = selectedConcepts.filter((c) => c !== concept);
  }
  drawPalettes();
}

function drawPalettes() {
  palettes = []; // Réinitialiser les palettes

  let rectSize = 200; // Taille d'une palette
  let gap = 30; // Espacement entre les palettes
  let xStart = 50; // Position de départ horizontale
  let yCenter = height / 2 - rectSize / 2; // Centrer les palettes verticalement

  colorMode(HSL);

  for (let i = 0; i < 20; i++) {
    let x = xStart + i * (rectSize + gap);
    let colors = generatePaletteColors();

    palettes.push({ x, y: yCenter, size: rectSize, colors });
  }

  palettes.forEach((palette) => drawPalette(palette));
}

function generatePaletteColors() {
  if (selectedConcepts.length === 1) {
    return Array(4).fill().map(() => generateHSLColor(selectedConcepts[0]));
  } else if (selectedConcepts.length === 2) {
    let colors1 = Array(2).fill().map(() => generateHSLColor(selectedConcepts[0]));
    let colors2 = Array(2).fill().map(() => generateHSLColor(selectedConcepts[1]));
    return shuffle([...colors1, ...colors2]);
  } else {
    return [color(0, 0, 80), color(0, 0, 60), color(0, 0, 40), color(0, 0, 20)]; // Gris par défaut
  }
}

function generateHSLColor(concept) {
  let range = conceptHSLRanges[concept];
  let hue = random(range.hue[0], range.hue[1]);
  let saturation = random(range.saturation[0], range.saturation[1]);
  let lightness = random(range.lightness[0], range.lightness[1]);
  return color(hue, saturation, lightness);
}

function drawPalette(palette) {
  let size = palette.size;
  let margin = size * 0.15; // Marge entre les carrés imbriqués

  for (let i = 0; i < 4; i++) {
    fill(palette.colors[i]);
    noStroke();
    rect(
      palette.x + i * margin / 2, // Décalage pour chaque carré plus petit
      palette.y + i * margin / 2,
      size - i * margin,
      size - i * margin
    );
  }
}

function mousePressed() {
  click.play();
  palettes.forEach((palette) => {
    if (
      mouseX > palette.x &&
      mouseX < palette.x + palette.size &&
      mouseY > palette.y &&
      mouseY < palette.y + palette.size
    ) {
      palette.colors = shuffle(palette.colors); // Mélanger les couleurs
      drawPalette(palette); // Redessiner la palette
      
    }
  });
}
