const prompt = require('prompt-sync')()

function pulgadasACm(pulgadas) {
    return pulgadas * 2.54;
}

let pulgadas = parseFloat(prompt("Ingrese el valor en pulgadas: "))

if(isNaN(pulgadas)){
    console.log("Por favor ingrese un numero valido.");
    
} else {
    let centimetros = pulgadasACm(pulgadas);
    console.log(`${pulgadas} pulgadas equivalen a ${centimetros.toFixed(2)} centímetros.`);
    
}