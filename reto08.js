/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
    let carrera = "";
    //recorrer los indices
    for (let i = 1; i <= indices.length; i++) {
        let carrerai = " ".repeat(indices.length - i) // espacios antes de la carretera
        // si es 0 el indice
        if (indices[i - 1] === 0) {
            carrerai += "~".repeat(length)
        } else if (indices[i - 1] > 0) { // si es positivo
            carrerai += "~".repeat(indices[i - 1])
            carrerai += "r"
            carrerai += "~".repeat(length - indices[i - 1] - 1)
        } else { // si es negativo
            let num = Math.abs(indices[i - 1])
            carrerai += "~".repeat(length - num)
            carrerai += "r"
            carrerai += "~".repeat(num - 1)
        }
        carrerai += ` /${i}`
        if (i !== indices.length) { //no hacer salto en la ultima posicion
            carrerai += `\n`
        }

        carrera += carrerai
    }

    return carrera
}