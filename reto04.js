/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
    if (height < 1 && height > 100) {
        return ''
    }
    let arbol = ''
    let arbolde = 1;
    for (let i = height; i >= 1; i--) {
        let padding = '_'.repeat(i - 1)
        arbol += padding + `${ornament.repeat(arbolde)}` + padding + "\n"
        arbolde = arbolde + 2
    }
    arbol += '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1) + "\n"
    arbol += '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1)
    return arbol
}