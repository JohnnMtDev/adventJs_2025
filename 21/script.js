function clearGifts(warehouse, drops) {
    // Hacer una copia profunda del almacén
    let result = warehouse.map(row => [...row]);
    
    // Para cada columna de caída
    for (const col of drops) {
        // Verificar si la columna es válida
        if (col < 0 || col >= result[0].length) {
            continue;
        }
        
        // Buscar desde abajo hacia arriba el primer espacio vacío
        let placed = false;
        for (let row = result.length - 1; row >= 0 && !placed; row--) {
            if (result[row][col] === '.') {
                result[row][col] = '#';
                placed = true;
                
                // Verificar si esta fila está completa después de colocar el regalo
                checkAndClearRow(result, row);
            }
        }
    }
    
    return result;
}

function checkAndClearRow(warehouse, rowIndex) {
    const row = warehouse[rowIndex];
    
    // Verificar si toda la fila está llena con '#'
    if (row.every(cell => cell === '#')) {
        // Eliminar la fila completa
        warehouse.splice(rowIndex, 1);
        
        // Agregar una nueva fila vacía en la parte superior
        const emptyRow = new Array(row.length).fill('.');
        warehouse.unshift(emptyRow);
    }
}

console.log(clearGifts(
  [
    ['.', '.', '.'],
    ['.', '.', '.'],
    ['#', '.', '#']
  ],
  [1]
))
/*
1. Estado inicial:
[
  ['.', '.', '.'],
  ['.', '.', '.'],
  ['#', '.', '#']
]

2. Cae regalo en columna 1:
   - Fila 2, col 1: '.', coloca '#'
   - Nueva fila: ['#', '#', '#']
   - Esta fila está completa, se elimina
   - Se agrega fila vacía arriba

Resultado:
[
  ['.', '.', '.'],
  ['.', '.', '.'],
  ['.', '.', '.']
]
*/