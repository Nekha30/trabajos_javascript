const prompt = require('prompt-sync')()

function calculadorIMC(altura, peso) {
    return peso / (altura * altura);
}

let ingresarAltura = parseFloat(prompt("Ingrese su altura: "))
let ingresarPeso = parseFloat(prompt("Ingrese su peso: "))

let imc = calculadorIMC(ingresarAltura, ingresarPeso)
console.log(`El imc es: ${imc.toFixed(2)}`);

