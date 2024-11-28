const prompt = require('prompt-sync')()

function calcularEdad(edad) {
    return `${edad}` * 7;
}

let ingresarEdad = parseInt(prompt("Ingrese la edad de los perros: "))
let edadPerro = calcularEdad(ingresarEdad);

console.log(`La edad del perro es: ${edadPerro}`);

