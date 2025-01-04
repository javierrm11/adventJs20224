/** @param {string} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
    const posicionInicial = [0, 0];
    let positionActual = [0, 0];
    let movimientos = [];
    let invertido = false; // Indica si el siguiente movimiento está invertido

    // Función auxiliar para invertir un movimiento
    const invertirMovimiento = (movimiento) => {
        switch (movimiento) {
            case "R":
                return "L";
            case "L":
                return "R";
            case "U":
                return "D";
            case "D":
                return "U";
            default:
                return movimiento;
        }
    };

    for (let i = 0; i < moves.length; i++) {
        let movimiento = moves[i];

        // Manejo de inversores y modificadores
        if (movimiento === "!") {
            invertido = !invertido;
            continue; // Ignorar esta iteración, el siguiente movimiento será afectado
        }

        if (movimiento === "*") {
            if (i + 1 < moves.length) {
                moves = moves.slice(0, i) + moves[i + 1] + moves[i + 1] + moves.slice(i + 2);
                i--; // Ajustar índice para procesar la duplicación
            }
            continue;
        }

        if (movimiento === "?") {
            if (i + 1 < moves.length) {
                const siguienteMovimiento = moves[i + 1];
                if (movimientos.includes(siguienteMovimiento)) {
                    i++; // Saltar el movimiento porque ya se hizo
                }
            }
            continue;
        }

        // Ajuste para movimientos invertidos
        if (invertido) {
            movimiento = invertirMovimiento(movimiento);
            invertido = false; // El estado de inversión se aplica una vez
        }

        switch (movimiento) {
            case "R":
                positionActual[0]++;
                movimientos.push("R");
                break;
            case "L":
                positionActual[0]--;
                movimientos.push("L");
                break;
            case "U":
                positionActual[1]++;
                movimientos.push("U");
                break;
            case "D":
                positionActual[1]--;
                movimientos.push("D");
                break;
        }
    }

    // Verificar si se volvió a la posición inicial
    if (
        positionActual[0] === posicionInicial[0] &&
        positionActual[1] === posicionInicial[1]
    ) {
        return true;
    }

    return positionActual;
}