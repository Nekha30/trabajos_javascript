const prompt = require('prompt-sync')()

let edad = parseInt(prompt("Ingrese su edad: "));




let edadIngresada = edad => {
    if (edad >0 && edad <=10)
        console.log("La edad ingresada es de un niño");
    
    else if (edad >10 && edad <=17)
        console.log("La edad ingresada es de un adolescente");
    
    else if (edad >=18 && edad <=59)
        console.log("La edad ingresada es de un adulto");
    
    else if (edad >= 60 )
        console.log("La edad ingresada es de un adulto mayor");
    
    else console.log("La edad ingresada es invalida");
}

edadIngresada(edad);