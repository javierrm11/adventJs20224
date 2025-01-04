/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
    let precio = 0;
    let valores = {
        '*': 1, // Copo de nieve
        'o': 5, // Bola de Navidad
        '^': 10, // Arbolito decorativo
        '#': 50, // Guirnalda brillante
        '@': 100, // Estrella polar
    };

    for (let i = 0; i < ornaments.length; i++) {
        let valorActual = valores[ornaments[i]];
        let valorSiguiente = valores[ornaments[i + 1]] || 0;

        if (isNaN(valorActual)) {
            precio = undefined
            break;
        }
        // Si el adorno actual está antes de uno de mayor valor, se resta
        if (valorActual < valorSiguiente) {
            precio -= valorActual;
        } else {
            precio += valorActual;
        }
    }

    return precio;
}