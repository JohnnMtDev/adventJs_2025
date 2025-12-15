function drawTable(data, sortBy) {
    // Si no hay datos, retornar tabla vacía
    if (!data || data.length === 0) {
        return '++\n||\n++';
    }

    // Ordenar los datos
    const sortedData = [...data].sort((a, b) => {
        const valA = a[sortBy];
        const valB = b[sortBy];
        
        if (typeof valA === 'number' && typeof valB === 'number') {
            return valA - valB;
        }
        
        // Convertir a string para comparación
        return String(valA).localeCompare(String(valB));
    });

    // Obtener todas las claves únicas de los objetos
    const headers = Object.keys(data[0]);
    
    // Calcular el ancho máximo para cada columna
    const columnWidths = headers.map(header => {
        // El ancho mínimo es la longitud del nombre de la columna (A, B, C...)
        let maxWidth = 1; // Para la letra de columna
        
        // Buscar el valor más largo en esta columna
        data.forEach(item => {
            const value = String(item[header] || '');
            maxWidth = Math.max(maxWidth, value.length);
        });
        
        return maxWidth;
    });

    // Función para crear una línea de separación
    const createSeparator = () => {
        let line = '+';
        columnWidths.forEach(width => {
            line += '-'.repeat(width + 2) + '+'; // +2 por los espacios a los lados
        });
        return line;
    };

    // Función para crear una fila con datos
    const createRow = (values) => {
        let row = '|';
        values.forEach((value, index) => {
            const width = columnWidths[index];
            const paddedValue = ' ' + String(value).padEnd(width) + ' ';
            row += paddedValue + '|';
        });
        return row;
    };

    // Crear la tabla
    let table = '';
    
    // Línea superior
    table += createSeparator() + '\n';
    
    // Encabezados de columna (A, B, C...)
    const columnLetters = headers.map((_, index) => 
        String.fromCharCode(65 + index) // 65 = 'A' en ASCII
    );
    table += createRow(columnLetters) + '\n';
    
    // Línea debajo de los encabezados
    table += createSeparator() + '\n';
    
    // Filas de datos
    sortedData.forEach(item => {
        const rowValues = headers.map(header => item[header] || '');
        table += createRow(rowValues) + '\n';
    });
    
    // Línea inferior
    table += createSeparator();
    
    return table;
}

// Versión alternativa más optimizada:
function drawTableOptimized(data, sortBy) {
    if (!data || !Array.isArray(data) || data.length === 0) {
        return '++\n||\n++';
    }

    // 1. Ordenar los datos
    const sortedData = [...data].sort((a, b) => {
        const aVal = a[sortBy];
        const bVal = b[sortBy];
        
        if (aVal === undefined || bVal === undefined) {
            return 0;
        }
        
        if (typeof aVal === 'number' && typeof bVal === 'number') {
            return aVal - bVal;
        }
        
        return String(aVal).localeCompare(String(bVal));
    });

    // 2. Obtener claves y calcular anchos
    const keys = Object.keys(data[0]);
    
    // Calcular anchos máximos (incluyendo letras de columna)
    const widths = keys.map((key, index) => {
        // Ancho mínimo: 1 (para la letra A, B, C...)
        let maxWidth = 1;
        
        // Verificar todos los valores en esta columna
        data.forEach(item => {
            const value = String(item[key] || '');
            maxWidth = Math.max(maxWidth, value.length);
        });
        
        return maxWidth;
    });

    // 3. Funciones auxiliares
    const createLine = () => {
        return '+' + widths.map(w => '-'.repeat(w + 2)).join('+') + '+';
    };
    
    const createContentRow = (values) => {
        return '|' + values.map((val, i) => {
            return ' ' + String(val).padEnd(widths[i]) + ' ';
        }).join('|') + '|';
    };

    // 4. Construir la tabla
    const lines = [];
    
    // Línea superior
    lines.push(createLine());
    
    // Encabezados (A, B, C...)
    const headers = keys.map((_, i) => String.fromCharCode(65 + i));
    lines.push(createContentRow(headers));
    
    // Línea separadora
    lines.push(createLine());
    
    // Datos
    sortedData.forEach(item => {
        const values = keys.map(key => item[key] || '');
        lines.push(createContentRow(values));
    });
    
    // Línea inferior
    lines.push(createLine());
    
    return lines.join('\n');
}

// Ejemplos de uso:
console.log(drawTable(
  [
    { name: 'Charlie', city: 'New York' },
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' }
  ],
  'name'
));

console.log('\n' + drawTable(
  [
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 },
    { gift: 'Doll', quantity: 10 }
  ],
  'quantity'
));

// Ejemplo adicional para probar:
console.log('\n' + drawTable(
  [
    { product: 'Chocolate', price: 2.5, stock: 100 },
    { product: 'Candy', price: 1.0, stock: 50 },
    { product: 'Ice Cream', price: 3.5, stock: 20 }
  ],
  'product'
));