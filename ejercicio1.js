const prompt = require("prompt-sync")({sigint:true})

//ejercicio 1
let edad = 25 
let peso = 70 

console.log ("La edad del usuario es: " + edad + " Años" + " y su peso es: " + peso + " Kilogramos")

//ejercicio 2
let nombre = ""
nombre = prompt("Introduce tu nombre: ");
edad = prompt("Introduce tu edad: ");
peso = prompt("Introduce tu peso: ");

console.log ("El nombre del usuario es: " + nombre + "\nSu edad es: " + edad + " años " + "\nY su peso: " + peso + " kilogramos")

//ejercicio 3
const EDAD_MINIMA = 18
const EDAD_MAXIMA = 99

let edad1 = parseInt(prompt("Ingrese su edad: "));

if (edad1 >= EDAD_MINIMA && edad1 <= EDAD_MAXIMA) {
    console.log ("La edad ingresada es válida");
} else {
        console.log("La edad ingresada no es válida");
}


//ejercicio 4
let verdadero = 10 != 20
let texto = "Esto es un texto"
let numero = 250
let nada = null

console.log(numero - 100)

console.log(texto + " y con esto ya puedo tirar cv en google")

if (verdadero) {
    console.log("Efectivamente es verdadero, crack");
} else {
    console.log("Falso como billete de 3 pesos");
}


if (nada === null){
    console.log("La variable no tiene valor");
} else {
    console.log("La variable no es null");
}


//ejercicio 5
let primerNumero = 43
let segundoNumero = 63
let resultadoSuma = primerNumero + segundoNumero
let resultadoResta = primerNumero - segundoNumero
let resultadoMultiplicacion = primerNumero * segundoNumero
let resultadoDivision = primerNumero / segundoNumero

console.log(resultadoSuma, resultadoResta, resultadoMultiplicacion, resultadoDivision)

//ejercicio 6
let numero1 = 43
let numero2 = 5

if (numero1 && numero2 > 10){
    console.log("Ambos numeros son mayores que 10");
} else {
    console.log("Uno de los numeros no es mayor que 10");
}

//ejercicio 7
let valor1 = 43
let valor2 = 20

console.log("El valor 1 es: " + valor1 + " y el valor 2 es " + valor2);

[valor1, valor2] = [valor2, valor1]

console.log("Ahora el valor 1 es: " + valor1 + " y el valor 2 es " + valor2);

//ejercicio 8

let celsius = parseFloat(prompt("Ingrese temperatura en Celsius: "));
let fahrenheit = celsius *9/5+32;

console.log("La temperatura en Fahrenheit es: " + parseFloat(fahrenheit));


//ejercicio 9

let peso1 = parseFloat(prompt("Ingrese su peso: "));
let altura = parseFloat(prompt("Ingrese su altura: "));
let imc = peso1 / (altura * altura);

console.log("Su indice de masa corporal es de: " + parseFloat(imc))

//ejercicio 10

let precioOriginal = parseFloat(prompt("Ingrese el precio original: "));
let porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento: "));
let montoDescuento = precioOriginal - (precioOriginal *(porcentajeDescuento / 100));

console.log("El precio final es de: " + montoDescuento)