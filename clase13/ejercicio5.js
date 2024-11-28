const prompt = require('prompt-sync')()

function calcularValor(valor){
    return `${valor}` / 40;
}

let ingresarSueldo = parseInt(prompt("Ingrese su sueldo mensual: "));
let valorHora = calcularValor(ingresarSueldo);
console.log(`El valor por hora trabajada es de: ${valorHora}`);

