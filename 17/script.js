function hasFourInARow(panel) {
  const rows = panel.length;
  const cols = panel[0].length;
  
  // Si el panel es demasiado pequeño en cualquier dimensión
  if (rows < 4 && cols < 4) return false;
  
  // Direcciones: [dRow, dCol]
  const directions = [
    [0, 1],   // horizontal →
    [1, 0],   // vertical ↓
    [1, 1],   // diagonal ↘
    [1, -1]   // diagonal ↙
  ];
  
  // Recorrer todas las celdas
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const currentColor = panel[row][col];
      
      // Si la celda está vacía, continuar
      if (currentColor === '.') continue;
      
      // Probar todas las direcciones
      for (const [dRow, dCol] of directions) {
        // Verificar límites para esta dirección
        if (
          row + dRow * 3 < 0 || row + dRow * 3 >= rows ||
          col + dCol * 3 < 0 || col + dCol * 3 >= cols
        ) {
          continue;
        }
        
        // Comprobar las siguientes 3 celdas en esta dirección
        let found = true;
        for (let step = 1; step <= 3; step++) {
          const newRow = row + dRow * step;
          const newCol = col + dCol * step;
          
          if (panel[newRow][newCol] !== currentColor) {
            found = false;
            break;
          }
        }
        
        // Si encontramos 4 iguales
        if (found) return true;
      }
    }
  }
  
  return false;
}

console.log (hasFourInARow([
  ['R', 'G', 'R'],
  ['G', 'R', 'G'],
  ['G', 'R', 'G']
]))