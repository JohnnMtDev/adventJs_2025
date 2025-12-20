function revealSantaRoute(routes) {
  if (routes.length === 0) return [];
  
  const routeMap = new Map();
  const allDestinations = new Set();
  
  // Llenar mapa y conjunto de destinos
  for (const [origin, dest] of routes) {
    routeMap.set(origin, dest);
    allDestinations.add(dest);
  }
  
  // El primer tramo es routes[0]
  const start = routes[0][0];
  const result = [start];
  
  let current = start;
  while (routeMap.has(current)) {
    const next = routeMap.get(current);
    result.push(next);
    current = next;
  }
  
  return result;
}

console.log(revealSantaRoute([
  ['MEX', 'CAN'],
  ['UK', 'GER'],
  ['CAN', 'UK']
])); // ['MEX', 'CAN', 'UK', 'GER']

console.log(revealSantaRoute([
  ['USA', 'BRA'],
  ['JPN', 'PHL'],
  ['BRA', 'UAE'],
  ['UAE', 'JPN'],
  ['CMX', 'HKN']
])); // ['USA', 'BRA', 'UAE', 'JPN', 'PHL']

console.log(revealSantaRoute([
  ['STA', 'HYD'],
  ['ESP', 'CHN']
])); // ['STA', 'HYD']