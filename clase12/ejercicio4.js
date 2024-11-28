const prompt = require('prompt-sync')();

let numero = parseInt(prompt('Ingrese un número: '));


if (isNaN(numero) || numero < 0) {
console.log("Por favor, ingrese un numero valido.");
}

let contadorImpares = 0;

for (let i = 0; i <= numero; i++) {
if (i % 2 !== 0) {
    contadorImpares++;
}
}

console.log("La cantidad de numeros impares desde 0 hasta " + numero + " es: " + contadorImpares);