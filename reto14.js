/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
    // Ordenar los arrays para asignar los más cercanos
    reindeer.sort((a, b) => a - b);
    stables.sort((a, b) => a - b);

    let totalMovimientos = 0;

    // Calcular la suma de diferencias absolutas
    for (let i = 0; i < reindeer.length; i++) {
        totalMovimientos += Math.abs(reindeer[i] - stables[i]);
    }

    return totalMovimientos;
}