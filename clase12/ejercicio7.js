const prompt = require('prompt-sync')()

let numero = parseInt(prompt("Ingrese una califiacion numerica del 1 al 10: "))

if (isNaN(numero) || numero < 0 || numero > 10)
console.log("El numero ingresado es invalido");

let mensaje = 
    (numero > 10 ) ? "Numero invalido" :
    (numero >= 9 ) ? "Excelente" :
    (numero >= 7 ) ? "Muy bien" :
    (numero >= 5 ) ? "Bien" :
    (numero >= 4 ) ? "Regular" :
    (numero < 0 ) ? "Numero invalido" :
    "Insuficiente"; 
    console.log("La calificacion es: " + numero + " - " + mensaje);
    