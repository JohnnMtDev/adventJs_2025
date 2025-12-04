// 1. Envoltorio macizo

const envoltorio = (an,simb) =>{

    const regalo = Array.from({length: an}, ()=> Array(an).fill(simb))
    regalo.forEach(fila => console.log(fila.join(" ")))
    return regalo;
}




// 2. Envoltorio hueco


const envoltorioHueco = (an, simb) =>{

    const regaloHueco =  Array.from({ length: an }, (_, i) => 
    Array.from({ length: an }, (_, j) => 
      (i === 0 || i === an - 1 || j === 0 || j === an - 1) ? simb : " "
    )
  );
    regaloHueco.forEach(fila => console.log(fila.join(" ")))
    return regaloHueco
}

// 3. Llamadas a funciones

envoltorio(4,'#');

console.log(`\n`); // separador 

envoltorioHueco(5,"*");