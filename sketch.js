// Nous stockons les concepts ainsi que leurs couleurs & termes associés

let concept = {
  dull: { 
    color: [
      "#FCDEBE", "#D4D2A5", "#928779", "#5e5768", "#595959", 
      "#808f85", "#91c499", "#f2e9dc", "#3f3f3f", "#d6d6b1", 
      "#494331", "#878472", "#fcf7ff", "#c4cad0", "#878c8f", 
      "#a4969b", "#718699", "#554640", "#a9bdc9", "#87919E"
    ],
    words: [
      "“The night is only a sort of carbon paper, Blueblack, with the much-poked periods of stars Letting in the light, peephole after peephole... A bonewhite light, like death, behind all things. Under the eyes of the stars and the moon's rictus He suffers his desert pillow, sleeplessness Stretching its fine, irritating sand in all directions.” — Insomniac by Sylvia Plath"
    ]
  },
  bright: { 
    color: [
      "#2461bd", "#f6ff4d", "#fada4b", "#e6af2e", "#07beb8", 
      "#3dccc7", "#68d8d6", "#9ceaef", "#ffb68f", "#ef5d60", 
      "#ec4067", "#a01a7d", "#fb8b24", "#d90368", "#eb00b8", 
      "#be05e8", "#f57a9f", "#dfb2f4", "#f5e960", "#f2f5ff"
    ],
    words: [
      "“Let my love, like sunlight, surround you and yet give you illumined freedom.” — Fireflies by Rabindranath Tagore"
    ]
  },
  wet: {
    color: [
      "#76C7C5", "#5DADEC", "#367BA9", "#B0E3F0", "#A8DADC", 
      "#457B9D", "#1D3557", "#73A9AD", "#005377", "#1CA4D1", 
      "#4EA6D6", "#89D0EF", "#7EC4CF", "#318CE7", "#28669C", 
      "#6192E7", "#2B6DA6", "#A3D8F4", "#6AA5B4", "#5BC0EB"
    ],
    words: [
      "“Rain, midnight rain, nothing but the wild rain On this bleak hut, and solitude, and me Remembering again that I shall die.” — Rain by Edward Thomas"
    ]
  },
  dry: {
    color: [
      "#EDC9AF", "#D2B48C", "#C19A6B", "#E5AA70", "#FFD59A", 
      "#C68642", "#B88A76", "#F4A460", "#D8BFD8", "#8B7355", 
      "#DAA520", "#BC8F8F", "#BDB76B", "#E4D2A0", "#C2B280", 
      "#AD8A56", "#F4EBC1", "#BEA17D", "#E6CEAC", "#D9C2AA"
    ],
    words: [
      "“A handful of red sand, from the hot clime Of Arab deserts brought, Within this glass becomes the spy of Time, The minister of Thought.” — Sand of the Desert in an Hour-Glass by Henry Wadsworth Longfellow"
    ]
  },
  mild: { 
    color: [
      "#8d6a9f", "#c5cbd3", "#8cbcb9", "#dda448", "#e1ca96", 
      "#aca885", "#918b76", "#626c66", "#acadbc", "#9b9ece", 
      "#6665dd", "#5d3cef", "#c6878f", "#b79d94", "#969696", 
      "#67697c", "#8da1b9", "#95adb6", "#cbb3bf", "#dbc7be"
    ],
    words: [
      "“It’s found we see. What? – Eternity. It’s the sun, free To flow with the sea.” — Eternity by Arthur Rimbaud"
    ]
  },
  acid: { 
    color: [
      "#DFFF00", "#FFBF00", "#FF4500", "#ADFF2F", "#7FFF00", 
      "#32CD32", "#8B0000", "#FFD700", "#FFFF00", "#EE82EE", 
      "#FF69B4", "#FF1493", "#00FF7F", "#7CFC00", "#FF6347", 
      "#DC143C", "#00FF00", "#FF00FF", "#FFA500", "#FF007F"
    ],
    words: [
      "“A langorous island, where Nature abounds With exotic trees and luscious fruit; And with men whose bodies are slim and astute, And with women whose frankness delights and astounds.” — Exotic Perfume by Baudelaire"
    ]
  },
  harsh: { 
    color: [
      "#4A4E69", "#22223B", "#9A031E", "#5F0A87", "#A5110B", 
      "#D00000", "#E63946", "#FF6B6B", "#282828", "#910F4E", 
      "#FF3E41", "#A83232", "#663399", "#C53030", "#E74C3C", 
      "#B80F0A", "#FF9B42", "#A32929", "#B22222", "#7A0000"
    ],
    words: [
      "“You may shoot me with your words, You may cut me with your eyes, You may kill me with your hatefulness, But still, like air, I'll rise.” — Still I Rise by Maya Angelou"
    ]
  },
  harmonious: { 
    color: [
      "#5CDB95", "#FFD166", "#EF476F", "#118AB2", "#06D6A0", 
      "#D4A5A5", "#FFADAD", "#FFC3A0", "#83C5BE", "#FF6B6B", 
      "#FFE66D", "#91EAE4", "#F5CAC3", "#D3E0EA", "#D0F4DE", 
      "#A2D2FF", "#B6D7A8", "#FFD700", "#99C1DE", "#9BC1BC"
    ],
    words: [
      "“The flowers evaporate like an incense urn, The viol vibrates like the wailing of souls that repine. A melancholy waltz—and a drowsiness divine, The skies like a mosque are beautiful and stern.” — *Evening Harmony* de Baudelaire"
    ]
  }
};




let selectedConcepts = [];  // Stocke le concept choisi
let palettes = [];         // Pour stocker les palettes générées
let music, click;          // Son

let soundEffects = {
  acid: null,
  dull: null,
  bright: null,
  wet: null,
  mild: null,
  harsh: null,
  harmonious: null,
  dry: null
};

function preload() {
  music = loadSound("sound/background-sound.mp3");
  click = loadSound("sound/click.mp3");

  soundEffects.acid = loadSound("sound/acid.mp3");
  soundEffects.bright = loadSound("sound/bright.mp3");
  soundEffects.dry = loadSound("sound/dry.mp3");
  soundEffects.dull = loadSound("sound/dull.mp3");
  soundEffects.harmonious = loadSound("sound/harmonious.mp3");
  soundEffects.harsh = loadSound("sound/harsh.mp3");
  soundEffects.mild = loadSound("sound/mild.mp3");
  soundEffects.wet = loadSound("sound/wet.mp3");

}
function setup() {
  setupMusic();
  createCanvas(5600, 400);
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

function setupUI() {
  const mainContainer = createElement('div');
  mainContainer.id('main-container');
  mainContainer.parent('select-container');
  
  const selectContainer = createElement('div');
  selectContainer.id('concepts-container');
  selectContainer.style('display', 'flex');
  selectContainer.style('flex-direction', 'row');
  selectContainer.style('gap', '2em');
  selectContainer.style('align-items', 'flex-start');
  selectContainer.style('flex-wrap', 'nowrap');
  selectContainer.parent(mainContainer);
  
  // Categories and their concepts
  const categories = {
    'Climate': ['dull', 'bright'],
    'Temperature': ['wet', 'dry'],
    'Aroma': ['mild', 'acid'],
    'Sound': ['harsh', 'harmonious']
  };
  
  // Create sections for each category
  Object.entries(categories).forEach(([category, concepts]) => {
    // Create category section container
    const categorySection = createElement('div');
    categorySection.class('category-section');
    categorySection.parent(selectContainer);
    
    // Add category title
    const categoryTitle = createElement('h3', category);
    categoryTitle.parent(categorySection);
    
    // Create checkbox container
    const checkboxContainer = createElement('div');
    checkboxContainer.class('checkbox-container');
    checkboxContainer.parent(categorySection);
    
    // Add checkboxes for the category
    concepts.forEach(conceptKey => {
      const checkbox = createCheckbox(
        conceptKey.charAt(0).toUpperCase() + conceptKey.slice(1),
        false
      );
      checkbox.parent(checkboxContainer);
      checkbox.changed(() => handleCheckboxChange(conceptKey, checkbox.checked()));
    });
  });

  // Words container for the associated quotes - now inside mainContainer
  const wordsContainer = createElement('div');
  wordsContainer.id('words-container');
  wordsContainer.style('margin-top', '1em');
  wordsContainer.parent(mainContainer);
}

// Gérer la sélection ou déselection des concepts
function handleCheckboxChange(conceptKey, isChecked) {
  if (isChecked) {
    // Jouer le son correspondant au concept
    if (soundEffects[conceptKey]) {  // vérifie si le son existe dans notre objet
      soundEffects[conceptKey].play();
    }
    addConcept(conceptKey);
  } else {
    removeConcept(conceptKey);
  }
  
  updateWordsDisplay();
  drawPalettes();
}

// Ajouter un nouveau concept et supprimer un ancien quand un troisième concept est coché
function addConcept(conceptKey) {
  if (selectedConcepts.length < 2) {
    selectedConcepts.push(conceptKey);
  } else {
    // Remove oldest concept and add new one
    const oldestConcept = selectedConcepts.shift();
    uncheckConcept(oldestConcept);
    selectedConcepts.push(conceptKey);
  }
}

// Effacer un concept quand il est déselectionné du tableau qui le stocke
function removeConcept(conceptKey) {
  selectedConcepts = selectedConcepts.filter(c => c !== conceptKey);
}

// Déselectionner
function uncheckConcept(conceptKey) {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    if (checkbox.nextSibling.textContent.toLowerCase() === conceptKey) {
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

  const allWords = selectedConcepts.flatMap(conceptKey => 
    concept[conceptKey].words
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
            padding: 1em;
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
  const xStart = 0;
  const yCenter = height / 2 - rectSize / 2;

  // Generate 20 palettes
  for (let i = 0; i < 20; i++) {
    let x = xStart + i * (rectSize + gap);
    let colors = generatePaletteColors();
    palettes.push({ x, y: yCenter, size: rectSize, colors });
  }

  palettes.forEach(drawPalette);
}

// Obtenir une couleur aléatoire basée sur un concept, sans répéter les couleurs dans la palette
function getRandomColor(conceptKey, usedColors) {
  const colors = concept[conceptKey]?.color || [];
  const availableColors = colors.filter(c => !usedColors.has(c)); // Exclure les couleurs déjà utilisées

  if (availableColors.length === 0) {
    return color(255, 255, 255); // Retourne blanc si toutes les couleurs ont été utilisées
  }

  const randomIndex = Math.floor(Math.random() * availableColors.length);
  const hex = availableColors[randomIndex];
  usedColors.add(hex); // Marquer la couleur comme utilisée
  return color(...hexToRGB(hex));
}

// Générer les 4 couleurs de palettes
function generatePaletteColors() {
  const usedColors = new Set(); // Conserve les couleurs déjà utilisées dans cette palette

  if (selectedConcepts.length === 1) {
    return Array(4).fill().map(() => getRandomColor(selectedConcepts[0], usedColors));
  } else if (selectedConcepts.length === 2) {
    let colors1 = Array(2).fill().map(() => getRandomColor(selectedConcepts[0], usedColors));
    let colors2 = Array(2).fill().map(() => getRandomColor(selectedConcepts[1], usedColors));
    return shuffle([...colors1, ...colors2]);
  } else {
    return [color(255, 255, 255), color(255, 255, 255), color(255, 255, 255), color(255, 255, 255)]; // Blanc par défaut
  }
}

// Convertir un code hexadécimal en valeurs RGB
function hexToRGB(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}

// Mélanger un tableau
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Dessiner une palette
function drawPalette({ x, y, size, colors }) {
  const colorHeight = size / colors.length;
  colors.forEach((c, i) => {
    fill(c);
    noStroke();
    rect(x, y + i * colorHeight, size, colorHeight);
  });
}

function mousePressed() {
  palettes.forEach((palette) => {
    if (
      mouseX >= palette.x &&
      mouseX <= palette.x + palette.size &&
      mouseY >= palette.y &&
      mouseY <= palette.y + palette.size
    ) {
      // Faire tourner les couleurs (dernier élément devient le premier)
      const lastColor = palette.colors.pop(); // Enlever la dernière couleur
      palette.colors.unshift(lastColor); // Ajouter la couleur au début
      drawPalettes(); // Rafraîchir les palettes après modification
    }
  });
}

