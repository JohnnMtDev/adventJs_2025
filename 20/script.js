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
            }
        }
    }
    
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