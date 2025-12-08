const findUniqueToy = (str) => {
    const min = str.toLowerCase();
    const letras = min.split('');
    
  
    
    for(let i = 0; i < letras.length; i++) {
        let letraActual = letras[i];
        let seRepite = false;
        
        // Comparar con TODAS las demás letras
        for(let j = 0; j < letras.length; j++) {
            if(i !== j && letraActual === letras[j]) {
                seRepite = true;
                break; // Ya sabemos que se repite
            }
        }
        
        // Si NO se repite, esta es la letra única
        if(!seRepite) {
            console.log(`${letraActual}`);
            return letraActual;
        }
    }
    
    console.log("");
    return null;
}

findUniqueToy('aAGbhbCcCf');