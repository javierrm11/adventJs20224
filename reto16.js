/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
    let stack = []; // Usamos una pila para manejar los montículos de nieve

    for (let char of s) {
        // Si el carácter es igual al último en la pila, eliminamos el duplicado
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop(); // Eliminamos el último elemento de la pila
        } else {
            stack.push(char); // Si no hay duplicado, lo añadimos a la pila
        }
    }

    // Unimos los elementos de la pila en una cadena final
    return stack.join('');
}