function setup() {
    createCanvas(800, 800); // Crée une toile de 800x800 pixels
    noLoop(); // Dessin statique
  }
  
  function draw() {
    background(255); // Fond blanc
  
    // Définitions des palettes de couleurs et de leurs titres
    let palettes = [
      { title: "Dull", colors: ["#FCDEBE", "#D4D2A5", "#928779", "#5e5768", "#595959", "#808f85", "#91c499", "#f2e9dc", "#3f3f3f", "#d6d6b1"] },
      { title: "Bright", colors: ["#2461bd", "#f6ff4d", "#fada4b", "#e6af2e", "#07beb8", "#3dccc7", "#68d8d6", "#9ceaef", "#ffb68f", "#ef5d60"] },
      { title: "Wet", colors: ["#76C7C5", "#5DADEC", "#367BA9", "#B0E3F0", "#A8DADC", "#457B9D", "#1D3557", "#73A9AD", "#005377", "#1CA4D1"] },
      { title: "Dry", colors: ["#EDC9AF", "#D2B48C", "#C19A6B", "#E5AA70", "#FFD59A", "#C68642", "#B88A76", "#F4A460", "#D8BFD8", "#8B7355"] },
      { title: "Mild", colors: ["#8d6a9f", "#c5cbd3", "#8cbcb9", "#dda448", "#e1ca96", "#aca885", "#918b76", "#626c66", "#acadbc", "#9b9ece"] },
      { title: "Acid", colors: ["#141115", "#4c2b36", "#8d6346", "#ddf45b", "#3b1f2b", "#db162f", "#dbdfac", "#5f758e", "#0000", "#2e294e"] },
      { title: "Harsh", colors: ["#4A4E69", "#22223B", "#9A031E", "#5F0A87", "#A5110B", "#D00000", "#E63946", "#FF6B6B", "#282828", "#910F4E"] },
      { title: "Harmonious", colors: ["#5CDB95", "#FFD166", "#EF476F", "#118AB2", "#06D6A0", "#D4A5A5", "#FFADAD", "#FFC3A0", "#83C5BE", "#FF6B6B"] }
    ];
  
    let squareSize = 50; // Taille de chaque carré
    let margin = 10; // Espace entre les carrés
    let verticalSpacing = 100; // Espacement entre les palettes
  
    for (let i = 0; i < palettes.length; i++) {
      let palette = palettes[i];
  
      // Affiche le titre de la palette
      textAlign(LEFT, BOTTOM);
      textSize(24);
      fill(0);
      text(palette.title, 0, i * verticalSpacing + 40);
  
      // Affiche les carrés de la palette
      for (let j = 0; j < palette.colors.length; j++) {
        fill(palette.colors[j]);
        noStroke();
        rect(j * (squareSize + margin), i * verticalSpacing + 50, squareSize, squareSize);
      }
    }
  }
  