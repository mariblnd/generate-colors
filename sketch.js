// Nous stockons les concepts ainsi que leurs HSL & termes associés
let conceptHSLRanges = {
  passive: { 
    hue: [180, 240], 
    saturation: [10, 30], 
    lightness: [70, 90],
    words: ['tranquil', 'serene', 'gentle', 'quiet', 'calm']
  },
  active: { 
    hue: [0, 60], 
    saturation: [70, 100], 
    lightness: [50, 70],
    words: ['energetic', 'dynamic', 'vibrant', 'lively', 'bold']
  },
  dull: { 
    hue: [210, 240], 
    saturation: [5, 20], 
    lightness: [40, 60],
    words: ['muted', 'subtle', 'subdued', 'neutral', 'modest']
  },
  bright: { 
    hue: [40, 90], 
    saturation: [80, 100], 
    lightness: [60, 80],
    words: ['radiant', 'luminous', 'vivid', 'brilliant', 'fresh']
  },
  cold: { 
    hue: [180, 220], 
    saturation: [50, 80], 
    lightness: [60, 80],
    words: ['icy', 'frost', 'winter', 'crisp', 'arctic']
  },
  warm: { 
    hue: [0, 40], 
    saturation: [70, 100], 
    lightness: [50, 70],
    words: ['sunny', 'cozy', 'golden', 'autumn', 'ember']
  }
};

let selectedConcepts = [];  // Stocke le concept choisi
let palettes = [];         // Pour stocker les palettes générées
let music, click;          // Son

function preload() {
  music = loadSound("sound/background-sound.mp3");
  click = loadSound("sound/click.mp3");
}

function setup() {
  setupMusic();
  createCanvas(4800, 400);
  setupUI();
  drawPalettes();
}

// Quand on clique sur le btn start, le son se lance et le preloader disparaît
function setupMusic() {
  const startButton = document.getElementById("startButton");
  startButton.addEventListener("click", () => {
    music.setLoop(true);
    music.play();
    document.getElementById("preloader").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  });
}

// Pour l'interface
function setupUI() {
  const selectContainer = document.getElementById("select-container");
  
  // Mots associés
  const wordsContainer = createElement('div');
  wordsContainer.id('words-container');
  wordsContainer.style('margin', '1em 0');
  wordsContainer.parent(selectContainer);

  // Création de checkbox pour chaque concept
  Object.keys(conceptHSLRanges).forEach((concept) => {
    const checkbox = createCheckbox(
      concept.charAt(0).toUpperCase() + concept.slice(1), 
      false
    );
    checkbox.parent(selectContainer);
    checkbox.changed(() => handleCheckboxChange(concept, checkbox.checked()));
  });
}

// Gérer la sélection ou déselection des concepts
function handleCheckboxChange(concept, isChecked) {
  if (isChecked) {
    addConcept(concept);
  } else {
    removeConcept(concept);
  }
  
  updateWordsDisplay();
  drawPalettes();
}

// Ajouter un nouveau concept et supprimer un ancien quand un troisième concept est coché
function addConcept(concept) {
  if (selectedConcepts.length < 2) {
    selectedConcepts.push(concept);
  } else {
    // Remove oldest concept and add new one
    const oldestConcept = selectedConcepts.shift();
    uncheckConcept(oldestConcept);
    selectedConcepts.push(concept);
  }
}

// Effacer un concept quand il est déselectionné du tableau qui le stocke
function removeConcept(concept) {
  selectedConcepts = selectedConcepts.filter(c => c !== concept);
}

// Déselectionner
function uncheckConcept(concept) {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    if (checkbox.nextSibling.textContent.toLowerCase() === concept) {
      checkbox.checked = false;
    }
  });
}

// Afficher les mots associés au concept
function updateWordsDisplay() {
  const wordsContainer = select('#words-container');
  if (!wordsContainer) return;

  if (selectedConcepts.length === 0) {
    wordsContainer.html('');
    return;
  }

  const allWords = selectedConcepts.flatMap(concept => 
    conceptHSLRanges[concept].words
  );
  
  const wordsHTML = createWordsHTML(allWords);
  wordsContainer.html(wordsHTML);
}

// Create HTML for words display
function createWordsHTML(words) {
  return `
    <div style="margin-top: 1em;">
      <p style="margin-bottom: 0.5em;">Associated words:</p>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5em;">
        ${words.map(word => `
          <span style="
            background-color: #f0f0f0;
            padding: 0.3em 0.8em;
            border-radius: 1em;
            font-size: 0.9em;
          ">${word}</span>
        `).join('')}
      </div>
    </div>
  `;
}

// Générer les palettes
function drawPalettes() {
  palettes = [];
  const rectSize = 200;
  const gap = 30;
  const xStart = 50;
  const yCenter = height / 2 - rectSize / 2;

  colorMode(HSL);

  // Generate 20 palettes
  for (let i = 0; i < 20; i++) {
    let x = xStart + i * (rectSize + gap);
    let colors = generatePaletteColors();
    palettes.push({ x, y: yCenter, size: rectSize, colors });
  }

  palettes.forEach(drawPalette);
}

// Générer les 4 couleurs de palettes
function generatePaletteColors() {
  if (selectedConcepts.length === 0) {
    return [color(0, 0, 0), color(0, 0, 0), 
            color(0, 0, 0), color(0, 0, 0)]; // La palette par défaut est noire
  }
  
  if (selectedConcepts.length === 1) {
    return Array(4).fill()
      .map(() => generateHSLColor(selectedConcepts[0]));
  }
  
  // Quand deux concepts sont selectionnés, 2 couleurs de chaque sont choisies
  const colors1 = Array(2).fill()
    .map(() => generateHSLColor(selectedConcepts[0]));
  const colors2 = Array(2).fill()
    .map(() => generateHSLColor(selectedConcepts[1]));
  return shuffle([...colors1, ...colors2]);
}

// Générer une couleur d'un concept
function generateHSLColor(concept) {
  const range = conceptHSLRanges[concept];
  const hue = random(range.hue[0], range.hue[1]);
  const saturation = random(range.saturation[0], range.saturation[1]);
  const lightness = random(range.lightness[0], range.lightness[1]);
  return color(hue, saturation, lightness);
}

// Générer une palette
function drawPalette(palette) {
  const margin = palette.size * 0.15;
  for (let i = 0; i < 4; i++) {
    fill(palette.colors[i]);
    noStroke();
    rect(
      palette.x + i * margin / 2,
      palette.y + i * margin / 2,
      palette.size - i * margin,
      palette.size - i * margin
    );
  }
}

// Au click, l'ordre des couleurs dans la palette change
function mousePressed() {
  click.play();
  palettes.forEach((palette) => {
    if (isClickInPalette(mouseX, mouseY, palette)) {
      palette.colors = shuffle(palette.colors);
      drawPalette(palette);
    }
  });
}

// This function checks if the mouse is over a colour palette
function isClickInPalette(x, y, palette) {
  return x > palette.x && 
         x < palette.x + palette.size && 
         y > palette.y && 
         y < palette.y + palette.size;
}
