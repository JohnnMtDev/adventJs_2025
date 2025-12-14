const workshop = {
  storage: {
    shelf: {
      box1: 'train',
      box2: 'switch'
    },
    box: 'car'
  },
  gift: 'doll'
}


function findGiftPath(obj, value, currentPath = []) {
    // Recorrer cada propiedad del objeto
    for (let key in obj) {
        // Si la propiedad es el valor buscado
        if (obj[key] === value) {
            return [...currentPath, key];
        }
        
        // Si la propiedad es un objeto (y no un valor primitivo)
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            // Buscar recursivamente en el objeto anidado
            const result = findGiftPath(obj[key], value, [...currentPath, key]);
            
            // Si encontramos el valor en la recursión
            if (result.length > 0) {
                return result;
            }
        }
    }
    
    // Si no se encontró el valor
    return [];
}

// Versión alternativa con control explícito de profundidad máxima de 3 niveles:
function findGiftPathWithDepthLimit(obj, value) {
    // Función auxiliar recursiva con control de profundidad
    function search(currentObj, target, path, depth) {
        // Si superamos los 3 niveles de profundidad
        if (depth > 3) {
            return null;
        }
        
        for (let key in currentObj) {
            if (currentObj[key] === target) {
                return [...path, key];
            }
            
            if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
                const result = search(currentObj[key], target, [...path, key], depth + 1);
                if (result) {
                    return result;
                }
            }
        }
        
        return null;
    }
    
    const result = search(obj, value, [], 1);
    return result || [];
}

console.log(findGiftPath(workshop, 'train'));      // ['storage', 'shelf', 'box1']
console.log(findGiftPath(workshop, 'switch'));     // ['storage', 'shelf', 'box2']
console.log(findGiftPath(workshop, 'car'));        // ['storage', 'box']
console.log(findGiftPath(workshop, 'doll'));       // ['gift']
console.log(findGiftPath(workshop, 'plane'));      // []