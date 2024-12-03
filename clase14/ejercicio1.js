const prompt = require('prompt-sync')()

const calcularPrecioIva = (precio, iva) => + (precio - (precio * iva / 100));

let precio = parseFloat(prompt("Ingresa el precio del producto: "));
let iva = parseFloat(prompt("Ingrese el porcentaje de iva (solo numero): "));
let precioFinal =calcularPrecioIva(precio, iva);

console.log(`El precio final con IVA es: ${precioFinal}`);


