/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number | undefined} The value of the register A
 */
function compile(instructions) {
    let registros = {}; // Objeto para almacenar valores de los registros
    let i = 0; // Índice para manejar saltos (JMP)

    while (i < instructions.length) {
        let [cmd, arg1, arg2] = instructions[i].split(" ");

        if (cmd === "MOV") {
            if (!isNaN(arg1)) {
                // Si arg1 es un número, lo asignamos al registro destino
                registros[arg2] = parseInt(arg1, 10);
            } else {
                // Si arg1 es un registro, copiamos su valor al registro destino
                registros[arg2] = registros[arg1] || 0;
            }
        } else if (cmd === "INC") {
            // Incrementamos el valor del registro (inicializamos a 0 si no existe)
            registros[arg1] = (registros[arg1] || 0) + 1;
        } else if (cmd === "DEC") {

            registros[arg1] = (registros[arg1] || 0) - 1;
        } else if (cmd === "JMP") {
            // Si el registro arg1 es 0, saltamos al índice indicado por arg2
            if ((registros[arg1] || 0) === 0) {
                i = parseInt(arg2, 10) - 1;
            }
        }

        i++; // Avanzamos al siguiente índice
    }

    // Devolvemos el valor del registro A
    return registros["A"];
}