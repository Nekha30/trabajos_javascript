const prompt = require('prompt-sync')()
let valoracion = prompt("Como estuvo la pelicula?: ")

switch (valoracion) {
case "Muy mala":
    console.log("Lo lamentamos mucho, trabajaremos para mejorar nuestras proximas peliculas");
    break;
case "Mala":
    console.log("Lamentamos que no te haya gustado la pelicula");
    break;
case "Mediocre":
    console.log("Esperemos que te agraden nuestras proximas peliculas!");
    break;
case "Buena":
console.log("Nos alegra que te haya gustado nuestra pelicula");
    break;
case "Muy buena":
    console.log("Nos alegra que te haya encantado nuestra pelicula, hay muchas mas para ver");
    break;
default:
    console.log("Ingresaste un valor invalido");
}
