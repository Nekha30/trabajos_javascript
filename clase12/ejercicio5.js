const prompt = require('prompt-sync')();

let notas = []

let cantidad = parseInt(prompt ("Cuantas notas quiere ingresar? "))

for (let i = 0; i < cantidad; i++) { 
    let nota = parseFloat(prompt("Ingrese la nota del estudiante: "))
    notas[i] = nota
}

console.log("Notas ingresadas:");
for (let i = 0; i < cantidad; i++) {
    console.log("Estudiante " + (i + 1) + ": " + notas[i]);
}