function hasFourLights(panel) {
    const rows = panel.length;
    const cols = panel[0].length;
    
    // Función auxiliar para verificar en una dirección específica
    const checkDirection = (startRow, startCol, deltaRow, deltaCol) => {
        const color = panel[startRow][startCol];
        if (color === '.') return false;
        
        for (let i = 1; i < 4; i++) {
            const row = startRow + deltaRow * i;
            const col = startCol + deltaCol * i;
            
            // Verificar límites y si el color es el mismo
            if (row < 0 || row >= rows || col < 0 || col >= cols) {
                return false;
            }
            if (panel[row][col] !== color) {
                return false;
            }
        }
        return true;
    };
    
    // Verificar todas las posiciones posibles
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            // Verificar horizontal (derecha)
            if (col <= cols - 4 && checkDirection(row, col, 0, 1)) {
                return true;
            }
            
            // Verificar vertical (abajo)
            if (row <= rows - 4 && checkDirection(row, col, 1, 0)) {
                return true;
            }
        }
    }
    
    return false;
}

// Versión más concisa usando métodos de array:
function hasFourLightsConcise(panel) {
    const rows = panel.length;
    const cols = panel[0].length;
    
    // Verificar líneas horizontales
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col <= cols - 4; col++) {
            const color = panel[row][col];
            if (color !== '.' &&
                panel[row][col + 1] === color &&
                panel[row][col + 2] === color &&
                panel[row][col + 3] === color) {
                return true;
            }
        }
    }
    
    // Verificar líneas verticales
    for (let col = 0; col < cols; col++) {
        for (let row = 0; row <= rows - 4; row++) {
            const color = panel[row][col];
            if (color !== '.' &&
                panel[row + 1][col] === color &&
                panel[row + 2][col] === color &&
                panel[row + 3][col] === color) {
                return true;
            }
        }
    }
    
    return false;
}

// Versión con funciones helper más modular:
function hasFourLightsModular(panel) {
    const checkHorizontal = (row, col) => {
        const color = panel[row][col];
        if (color === '.') return false;
        
        return color === panel[row][col + 1] &&
               color === panel[row][col + 2] &&
               color === panel[row][col + 3];
    };
    
    const checkVertical = (row, col) => {
        const color = panel[row][col];
        if (color === '.') return false;
        
        return color === panel[row + 1][col] &&
               color === panel[row + 2][col] &&
               color === panel[row + 3][col];
    };
    
    const rows = panel.length;
    const cols = panel[0].length;
    
    // Verificar horizontales
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col <= cols - 4; col++) {
            if (checkHorizontal(row, col)) return true;
        }
    }
    
    // Verificar verticales
    for (let col = 0; col < cols; col++) {
        for (let row = 0; row <= rows - 4; row++) {
            if (checkVertical(row, col)) return true;
        }
    }
    
    return false;
}

// Tests con los ejemplos proporcionados:
console.log(hasFourLights([
  ['.', '.', '.', '.', '.'],
  ['R', 'R', 'R', 'R', '.'],
  ['G', 'G', '.', '.', '.']
])); // true → hay 4 luces rojas en horizontal

console.log(hasFourLights([
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.']
])); // true → hay 4 luces verdes en vertical

console.log(hasFourLights([
  ['R', 'G', 'R'],
  ['G', 'R', 'G'],
  ['G', 'R', 'G']
])); // false → no hay 4 luces del mismo color seguidas

// Tests adicionales:
console.log(hasFourLights([
  ['R', '.', '.', '.'],
  ['.', 'R', '.', '.'],
  ['.', '.', 'R', '.'],
  ['.', '.', '.', 'R']
])); // false (diagonal no cuenta)

console.log(hasFourLights([
  ['.', '.', '.', '.'],
  ['.', '.', '.', '.'],
  ['.', '.', '.', '.'],
  ['.', '.', '.', '.']
])); // false (todas apagadas)

console.log(hasFourLights([
  ['G', 'G', 'G', 'G'],
  ['.', '.', '.', '.'],
  ['.', '.', '.', '.'],
  ['.', '.', '.', '.']
])); // true (horizontal en primera fila)

console.log(hasFourLights([
  ['R', '.', '.', '.'],
  ['R', '.', '.', '.'],
  ['R', '.', '.', '.'],
  ['R', '.', '.', '.']
])); // true (vertical en primera columna)