function minStepsToDeliver(map) {
    const rows = map.length;
    const cols = map[0].length;
    
    // Encontrar la posición inicial 'S'
    let startRow, startCol;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (map[i][j] === 'S') {
                startRow = i;
                startCol = j;
                break;
            }
        }
    }
    
    // Movimientos posibles (arriba, abajo, izquierda, derecha)
    const directions = [
        [-1, 0], // arriba
        [1, 0],  // abajo
        [0, -1], // izquierda
        [0, 1]   // derecha
    ];
    
    // Inicializar BFS
    const queue = [[startRow, startCol, 0]]; // [row, col, distance]
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    visited[startRow][startCol] = true;
    
    // Objeto para guardar distancias mínimas a cada 'G'
    const distances = {};
    let totalGifts = 0;
    
    // Contar cuántas 'G' hay en total
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (map[i][j] === 'G') {
                totalGifts++;
            }
        }
    }
    
    // Si no hay regalos, la suma es 0
    if (totalGifts === 0) return 0;
    
    // BFS
    while (queue.length > 0) {
        const [r, c, dist] = queue.shift();
        
        // Si encontramos una casa 'G', guardamos la distancia
        if (map[r][c] === 'G') {
            distances[`${r},${c}`] = dist;
        }
        
        // Explorar vecinos
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            
            // Verificar límites y obstáculos
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
                if (!visited[nr][nc] && map[nr][nc] !== '#') {
                    visited[nr][nc] = true;
                    queue.push([nr, nc, dist + 1]);
                }
            }
        }
    }
    
    // Verificar si todas las casas 'G' fueron alcanzadas
    if (Object.keys(distances).length < totalGifts) {
        return -1;
    }
    
    // Sumar todas las distancias
    let totalSteps = 0;
    for (const key in distances) {
        totalSteps += distances[key];
    }
    
    return totalSteps;
}


console.log(minStepsToDeliver([
  ['S', '#', 'G'],
  ['#', '#', '.'],
  ['G', '.', '.']
]))
// Resultado: -1
// (La casa en (0,2) es inalcanzable por los obstáculos)