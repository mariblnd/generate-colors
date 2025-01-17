function setup() {
    createCanvas(1700,800); 
  }
  
  function draw() {
    let palettes = [
      { title: "Dull", colors: ["#FCDEBE", "#D4D2A5", "#928779", "#5e5768","#595959", "#808f85", "#91c499", "#f2e9dc", "#3f3f3f", "#d6d6b1", "#494331", "#878472", "#fcf7ff", "#c4cad0", "#878c8f", "#a4969b", "#718699", "#554640", "#a9bdc9", "#87919E"] },
      { title: "Bright", colors: ["#2461bd", "#f6ff4d", "#fada4b","#e6af2e", "#07beb8", "#3dccc7", "#68d8d6", "#9ceaef", "#ffb68f", "#ef5d60", "#ec4067", "#a01a7d", "#fb8b24", "#d90368", "#eb00b8", "#be05e8", "#f57a9f", "#dfb2f4", "#f5e960", "#f2f5ff"] },
      { title: "Wet", colors: ["#76C7C5", "#5DADEC", "#367BA9", "#B0E3F0", "#A8DADC", "#457B9D", "#1D3557", "#73A9AD", "#005377", "#1CA4D1", "#4EA6D6", "#89D0EF", "#7EC4CF", "#318CE7", "#28669C", "#6192E7", "#2B6DA6", "#A3D8F4", "#6AA5B4", "#5BC0EB"] },
      { title: "Dry", colors: ["#EDC9AF", "#D2B48C","#C19A6B", "#E5AA70", "#FFD59A", "#C68642", "#B88A76", "#F4A460", "#D8BFD8", "#8B7355", "#DAA520", "#BC8F8F", "#BDB76B", "#E4D2A0", "#C2B280", "#AD8A56", "#F4EBC1", "#BEA17D", "#E6CEAC", "#D9C2AA"] },
      { title: "Mild", colors: ["#8d6a9f", "#c5cbd3", "#8cbcb9", "#dda448", "#e1ca96", "#aca885", "#918b76", "#626c66", "#acadbc", "#9b9ece", "#6665dd", "#5d3cef", "#c6878f", "#b79d94", "#969696", "#67697c", "#8da1b9", "#95adb6", "#cbb3bf", "#dbc7be"] },
      { title: "Acid",colors: ["#DFFF00", "#FFBF00", "#FF4500", "#ADFF2F", "#7FFF00", "#32CD32", "#8B0000", "#FFD700", "#FFFF00", "#EE82EE", "#FF69B4", "#FF1493", "#00FF7F", "#7CFC00", "#FF6347", "#DC143C", "#00FF00", "#FF00FF", "#FFA500", "#FF007F"] },
      { title: "Harsh", colors: ["#4A4E69", "#22223B", "#9A031E", "#5F0A87", "#A5110B", "#D00000", "#E63946", "#FF6B6B", "#282828", "#910F4E", "#FF3E41", "#A83232", "#663399", "#C53030", "#E74C3C", "#B80F0A", "#FF9B42", "#A32929", "#B22222", "#7A0000"] },
      { title: "Harmonious", colors: ["#5CDB95", "#FFD166", "#EF476F", "#118AB2", "#06D6A0", "#D4A5A5", "#FFADAD", "#FFC3A0", "#83C5BE", "#FF6B6B", "#FFE66D", "#91EAE4", "#F5CAC3", "#D3E0EA", "#D0F4DE", "#A2D2FF", "#B6D7A8", "#FFD700", "#99C1DE", "#9BC1BC"] }
    ];
    
  
    let squareSize =50; // taille des carrés
    let margin= 10;
    let verticalSpacing =100; // espacement entre les palettes
  
    for (let i = 0; i<palettes.length; i++) {
      let palette =palettes[i];
  
      // titres
      textAlign(LEFT, BOTTOM);
      textSize(24);
      fill(0);
      text(palette.title, 0, i * verticalSpacing + 40);
  
      for (let j = 0; j < palette.colors.length; j++) {
        fill(palette.colors[j]);
        noStroke();
        rect(j * (squareSize + margin), i * verticalSpacing + 50, squareSize, squareSize);
      }
    }
  }
  