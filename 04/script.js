function decodeSantaPin(passString) {
    const pass = passString.slice(1, -1).split('][');
    const resultado = [0, 0, 0, 0]; // Array inicial de 4 dígitos
    
    for (const instruccion of pass) {
        const pos = parseInt(instruccion[0]) - 1;
        
        if (instruccion.includes("++") || instruccion.includes("+")) {
            resultado[pos] = (resultado[pos] + 1) % 10;
        }
        else if (instruccion.includes("-")) {
            resultado[pos] = (resultado[pos] - 1 + 10) % 10;
        }
        // else if (instruccion === "<") { ... }
    }
    
    return resultado.join(''); // Convertir array a string
}

console.log (decodeSantaPin('[1++][2-][3+][<]'))
