const prompt = require('prompt-sync')();

let cantidad = parseInt(prompt("Ingrese la cantidad: "));
let precio = parseFloat(prompt("Ingrese el precio unitario: "));

let calcularDescuento = (cantidad, precio) => {
    let descuento = 0;

    if (cantidad >= 10 && cantidad <= 20) {
        descuento = 0.10; // 10%
    } else if (cantidad > 20 && cantidad <= 30) {
        descuento = 0.15; // 15%
    } else if (cantidad > 30 && cantidad <= 40) {
        descuento = 0.20; // 20%
    } else if (cantidad > 50 && cantidad <= 60) {
        descuento = 0.25; // 25%
    }

    const totalSinDescuento = cantidad * precio;
    const totalConDescuento = totalSinDescuento * (1 - descuento);
    return totalConDescuento;
};

if (isNaN(cantidad) || isNaN(precio) || cantidad <= 0 || precio <= 0) {
    console.log("Los valores ingresados no son validos.");
} else {
    const total = calcularDescuento(cantidad, precio);
    console.log(`El total a pagar con descuento es: $${total.toFixed(2)}`);
}
