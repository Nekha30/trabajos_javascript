const prompt = require('prompt-sync')()

function convertirLink(link) {
    return `http://www.${link}.com`;
}

let linkIngresado = prompt("Ingrese la palabra que desea convertir en link: " )
let link = convertirLink(linkIngresado);
console.log(`El link generado es: ${link}`);
