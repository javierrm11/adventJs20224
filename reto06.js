/**
 * @param {string[]} box - Representación de la caja con bordes y posible regalo.
 * @returns {boolean} - True si el regalo (*) está dentro de la caja, False de lo contrario.
 */
function inBox(box) {
    const boxreducido = box.slice(1, -1);
    for (let line of boxreducido) {
        // Verificar si '*' está dentro de los límites
        if (line.includes('*') && line.indexOf('*') > 0 && line.indexOf('*') < line.length - 1) {
            return true;
        }
    }
    return false;
}