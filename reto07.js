/** 
 * @param {string} packages con paréntesis
 * @returns {string} Paquete corregido y ordenado
 */
function fixPackages(packages) {
    let regalo = '';
    let pila = [];

    for (let i = 0; i < packages.length; i++) {
        let caracter = packages[i];


        if (/^[A-Za-z]$/.test(caracter)) {
            regalo += caracter;
        }

        if (caracter === "(") {
            pila.push(regalo);
            regalo = '';
        }


        if (caracter === ")") {
            let contenidoRevertido = regalo.split("").reverse().join("");
            regalo = pila.pop();
            regalo += contenidoRevertido;
        }
    }

    return regalo;
}