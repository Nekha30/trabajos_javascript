const prompt = require('prompt-sync')(); 

let vendedora = prompt("Ingrese el nombre de la vendedora:");
let ventas = parseInt(prompt("Ingrese el total de ventas mensuales:"));
let monto  = parseFloat(prompt("Ingrese el total de dinero generado en ventas mensuales:"));


if (ventas >= 5 && ventas <10) {
    comision = ventas * 0.05;

    if (isNaN(monto)){
        console.log(` La comisión de la vendedora ${vendedora}  vendio un total de ${ventas} productos por lo que su comision será de un 5%, debido a que no ingreso el dinero generado no se pudo calcular el valor de la comision.`);
    }else{
        console.log(` La comisión de la vendedora ${vendedora}  vendio un total de ${ventas} productos por lo que su comision será de un 5%, lo que seria un total de ${comision}$`);
    }
        

    
} else if (ventas >=10&& ventas <15) {
    comision = monto* 0.10; 

if (isNaN(monto)){
    console.log(` La comisión de la vendedora ${vendedora}  vendio un total de ${ventas} productos por lo que su comision será de un 10%, debido a que no ingreso el dinero generado no se pudo calcular el valor de la comision.`);
}else{
    console.log(` La comisión de la vendedora ${vendedora}  vendio un total de ${ventas} productos por lo que su comision será de un 10, lo que seria un total de ${comision}$`);
}
}

else if (ventas >=15 && ventas <=25) {
    comision = monto* 0.15;
    

    if (isNaN(monto)){
        console.log(` La comisión de la vendedora ${vendedora}  vendio un total de ${ventas} productos por lo que su comision será de un 15%, debido a que no ingreso el dinero generado no se pudo calcular el valor de la comision.`);
    }else{
        console.log(` La comisión de la vendedora ${vendedora}  vendio un total de ${ventas} productos por lo que su comision será de un 15%, lo que seria un total de ${comision}$`);
    }

} 
else if (ventas >25) {
    comision = monto* 0.15+10.000; 



    if (isNaN(monto)){
        console.log(` La comisión de la vendedora ${vendedora}  vendio un total de ${ventas} productos por lo que su comision será de un 15% màs un bono de 10000$, debido a que no ingreso el dinero generado no se pudo calcular el valor de la comision.`);
    }else{
        console.log(` La comisión de la vendedora ${vendedora}  vendio un total de ${ventas} productos por lo que su comision será de un 15% màs un bono de 10000$, lo que seria un total de ${comision}$`);
    }

} else {  
    console.log("El vendedor debe esforzarse màs.");

    
}
