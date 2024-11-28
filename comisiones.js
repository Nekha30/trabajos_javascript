const prompt = require('prompt-sync')()

let nombre = prompt("Ingrese su nombre: ")
let comision = parseInt(prompt("Ingrese el numero de ventas: "))

if (comision >=5 && comision < 10 ) {
        console.log("El porcentaje correspondiente es de 5%");
} 

else if
    (comision >=10 && comision < 15 ) {
        console.log("El porcentaje correspondiente es de 10%");
}

else if
    (comision >=15 && comision < 20 ) {
        console.log("El porcentaje correspondiente es de 15%");
}

else if
    (comision >=20 && comision <25 ) {
        console.log("El porcentaje correspondiente es de 20%");
}

else if 
    (comision >=25 ) {
        console.log("El porcentaje sera de 20% + una bonificacion de $10.000");
    }
else {
    console.log("El vendedor debe esforzarse mas el proximo mes");
}



