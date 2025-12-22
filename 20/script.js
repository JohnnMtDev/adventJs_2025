<<<<<<< HEAD
function canEscape(maze) {
    if (!maze || maze.length === 0) return false;
    
    const rows = maze.length;
    const cols = maze[0].length;
    
    // Encontrar la posición inicial de Santa (S)
    let start = null;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (maze[i][j] === 'S') {
                start = [i, j];
                break;
            }
        }
        if (start) break;
    }
    
    if (!start) return false; // No hay posición inicial
    
    // Direcciones: arriba, abajo, izquierda, derecha
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    // Cola para BFS
    const queue = [start];
    // Matriz para marcar celdas visitadas
    const visited = Array.from({ length: rows }, () => 
        Array(cols).fill(false)
    );
    visited[start[0]][start[1]] = true;
    
    while (queue.length > 0) {
        const [row, col] = queue.shift();
        
        // Si encontramos la salida
        if (maze[row][col] === 'E') {
            return true;
        }
        
        // Explorar las 4 direcciones posibles
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            
            // Verificar límites
            if (newRow >= 0 && newRow < rows && 
                newCol >= 0 && newCol < cols) {
                
                // Verificar si es camino libre, inicio o salida
                const cell = maze[newRow][newCol];
                if ((cell === '.' || cell === 'E') && 
                    !visited[newRow][newCol]) {
                    visited[newRow][newCol] = true;
                    queue.push([newRow, newCol]);
                }
=======
function dropGifts(warehouse, drops) {
    // Hacer una copia profunda del almacén para no modificar el original
    const result = warehouse.map(row => [...row]);
    
    // Para cada columna de caída
    for (const col of drops) {
        // Verificar si la columna es válida
        if (col < 0 || col >= result[0].length) {
            continue;
        }
        
        // Buscar desde abajo hacia arriba el primer espacio vacío
        for (let row = result.length - 1; row >= 0; row--) {
            if (result[row][col] === '.') {
                result[row][col] = '#';
                break; // Solo colocamos un regalo por caída
>>>>>>> bb7a1e9a4e449e1841af0749d0de6ee08e23e1a9
            }
        }
    }
    
<<<<<<< HEAD
    return false; // No se encontró camino a la salida
}

console.log (canEscape([
  ['S', '.', '.', '.', '.'],
  ['#', '#', '#', '#', '.'],
  ['.', '.', '.', '.', '.'],
  ['.', '#', '#', '#', '#'],
  ['.', '.', '.', '.', 'E']
]) )
// → true

console.log (canEscape([
  ['S', '.', '.'],
  ['.', '.', '.'],
  ['#', '#', '#'],
  ['.', '.', 'E']
]) )
// → false
=======
    return result;
}


console.log (dropGifts(
  [
    ['.', '.', '.'],
    ['#', '#', '.'],
    ['#', '#', '#']
  ],
  [0, 2]
))
/*
Primera caída (columna 0):
Fila 2, columna 0: '#'
Fila 1, columna 0: '#'
Fila 0, columna 0: '.', coloca '#'

Segunda caída (columna 2):
Fila 2, columna 2: '#'
Fila 1, columna 2: '.', coloca '#'

Resultado:
[
  ['#', '.', '.'],
  ['#', '#', '#'],
  ['#', '#', '#']
]
*/
>>>>>>> bb7a1e9a4e449e1841af0749d0de6ee08e23e1a9
