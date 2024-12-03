const prompt = require('prompt-sync')()


let notas = [];
for (let i = 1; i <= 5; i++) {
    let nota = parseFloat(prompt(`Ingresa la nota ${i}:`));
    notas.push(nota);
}

let calcularPromedio = notas => {
    let suma = notas.reduce((acumulado, nota) => acumulado + nota, 0);
    return suma / notas.length;
};

let promedio = calcularPromedio(notas);
console.log(`El promedio de las notas es: ${promedio.toFixed(2)}`);
