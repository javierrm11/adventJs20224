/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
    let trainRow = -1;
    let trainCol = -1;

    // Buscar la posición del tren en el tablero
    board.forEach((line, index) => {
        let col = line.indexOf("@");
        if (col !== -1) {
            trainRow = index;
            trainCol = col;
        }
    });

    // Si no se encuentra el tren en el tablero, lanzar un error
    if (trainRow === -1 || trainCol === -1) {
        throw new Error("El tren no se encuentra en el tablero.");
    }

    let final = "";

    // Lógica para movimiento hacia la izquierda (L)
    if (mov === "L") {
        if (trainCol > 0) { // Verificar que no estemos en el borde izquierdo
            if (board[trainRow][trainCol - 1] === "*") {
                final = "eat";
            } else if (board[trainRow][trainCol - 1] === " " || board[trainRow][trainCol - 1] === "o") {
                final = "crash";
            } else {
                final = "none";
            }
        } else {
            final = "crash";
        }
    }
    // Lógica para movimiento hacia la derecha (R)
    else if (mov === "R") {
        if (trainCol < board[trainRow].length - 1) { // Verificar que no estemos en el borde derecho
            if (board[trainRow][trainCol + 1] === "*") {
                final = "eat";
            } else if (board[trainRow][trainCol + 1] === " " || board[trainRow][trainCol + 1] === "o") {
                final = "crash";
            } else {
                final = "none";
            }
        } else {
            final = "crash";
        }
    }
    // Lógica para movimiento hacia arriba (U)
    else if (mov === "U") {
        if (trainRow > 0) { // Verificar que no estemos en el borde superior
            if (board[trainRow - 1][trainCol] === "*") {
                final = "eat";
            } else if (board[trainRow - 1][trainCol] === " " || board[trainRow - 1][trainCol] === "o") {
                final = "crash";
            } else {
                final = "none";
            }
        } else {
            final = "crash"; //
        }
    }
    // Lógica para movimiento hacia abajo (D)
    else if (mov === "D") {
        if (trainRow < board.length - 1) { // Verificar que no estemos en el borde inferior
            if (board[trainRow + 1][trainCol] === "*") {
                final = "eat";
            } else if (board[trainRow + 1][trainCol] === " " || board[trainRow + 1][trainCol] === "o") {
                final = "crash";
            } else {
                final = "none";
            }
        } else {
            final = "crash";
        }
    }

    return final;
}