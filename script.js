function revealSantaRoute(tramos) {
  if (!tramos.length) return [];

  // Tomamos el primer tramo como inicio
  const ruta = [...tramos[0]]; 
  let destinoActual = ruta[1];

  // Creamos una copia de los tramos restantes
  const restantes = tramos.slice(1);

  while (true) {
    // Buscamos un tramo que comience donde termina el destinoActual
    const index = restantes.findIndex(([origen]) => origen === destinoActual);
    if (index === -1) break; // No hay más tramos que encajen

    // Añadimos el destino de ese tramo a la ruta
    const tramo = restantes.splice(index, 1)[0];
    ruta.push(tramo[1]);
    destinoActual = tramo[1];
  }

  return ruta;
}

// Ejemplos:
console.log(revealSantaRoute([
  ['MEX', 'CAN'],
  ['UK', 'GER'],
  ['CAN', 'UK']
])); 
// → ['MEX', 'CAN', 'UK', 'GER']

console.log(revealSantaRoute([
  ['USA', 'BRA'],
  ['JPN', 'PHL'],
  ['BRA', 'UAE'],
  ['UAE', 'JPN'],
  ['CMX', 'HKN']
]));
// → ['USA', 'BRA', 'UAE', 'JPN', 'PHL']

console.log(revealSantaRoute([
  ['STA', 'HYD'],
  ['ESP', 'CHN']
]));
// → ['STA', 'HYD']
