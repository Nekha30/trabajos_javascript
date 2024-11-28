const prompt = require('prompt-sync')()
function admiracion(frase) {
    return `¡${frase}!`;
}

let ingresarFrase = prompt("Ingresa una frase para agregarle admiracion: ")
let fraseA = admiracion(ingresarFrase);

console.log(`La frase con admiracion es: ${fraseA}`);
