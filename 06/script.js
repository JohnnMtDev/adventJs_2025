const gloves = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' },
  { hand: 'L', color: 'green' }
]


// ["red", "green"]

const gloves2 = [
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' }
]

// ["gold", "gold"]

const gloves3 = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' }
]



const matchGlobes = (obj) => {

  const guanteCompleto = []

  const right = obj.filter(e => e.hand === 'R')
  const left = obj.filter(e => e.hand === 'L')

  right.forEach(derecho => {
    // Buscar si hay algún izquierdo con mismo color
    const hayIzquierdo = left.some(izquierdo => izquierdo.color === derecho.color);

    if (hayIzquierdo) {
      guanteCompleto.push(derecho.color); // Solo el color
    }
  });


  console.log(guanteCompleto)

} 

matchGlobes(gloves);
matchGlobes(gloves2)
matchGlobes(gloves3)