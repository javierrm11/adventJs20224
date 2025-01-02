/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
    let archivo = filename.indexOf("_");

    if (archivo !== -1) {
        // Obtenemos la parte después del primer "_"
        archivo = filename.substring(archivo + 1);

        // Encontramos la posición del último "."
        let ultimopunto = archivo.lastIndexOf(".");

        if (ultimopunto !== -1) {
            // Recortamos desde el inicio hasta el último punto
            archivo = archivo.substring(0, ultimopunto);
        }
    }

    return archivo;
}