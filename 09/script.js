function moveReno(board, moves) {
    // 1. Convertir el board en una matriz, descartando primera y última línea
    const lines = board.trim().split('\n').slice(1, -1);
    const grid = lines.map(line => line.split(''));
    
    // 2. Encontrar la posición inicial del reno (@)
    let renoRow = -1, renoCol = -1;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '@') {
                renoRow = i;
                renoCol = j;
                grid[i][j] = '.'; // Vaciamos la posición inicial
                break;
            }
        }
        if (renoRow !== -1) break;
    }
    
    // Si no encontramos el reno
    if (renoRow === -1) return 'fail';
    
    let collected = false;
    
    // 3. Procesar cada movimiento
    for (let move of moves) {
        // Guardar posición actual antes de mover
        const currentRow = renoRow;
        const currentCol = renoCol;
        
        // Calcular nueva posición según el movimiento
        switch(move) {
            case 'U': renoRow--; break;
            case 'D': renoRow++; break;
            case 'L': renoCol--; break;
            case 'R': renoCol++; break;
        }
        
        // Verificar si se sale del tablero
        if (renoRow < 0 || renoRow >= grid.length || 
            renoCol < 0 || renoCol >= grid[0].length) {
            // Si ya recogió algo, es success; si no, crash
            return collected ? 'success' : 'crash';
        }
        
        // Verificar si choca con un obstáculo
        if (grid[renoRow][renoCol] === '#') {
            return collected ? 'success' : 'crash';
        }
        
        // Verificar si recoge algo
        if (grid[renoRow][renoCol] === '*') {
            collected = true;
            grid[renoRow][renoCol] = '.'; // Recoger el objeto
        }
    }
    
    // 4. Después de todos los movimientos
    return collected ? 'success' : 'fail';
}

// Tests con tu ejemplo
const board = `
.....
.*#.*
.@...
.....
`;

console.log(moveReno(board, 'U'));      // ➞ 'success'
//console.log(moveReno(board, 'RU'));     // ➞ 'crash'
//console.log(moveReno(board, 'RRRUU'));  // ➞ 'success'