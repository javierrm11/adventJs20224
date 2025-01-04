/**
 * @param {{ value: string; left: any; right: any }} tree
 * @returns {number} - Height of the tree.
 */
function treeHeight(tree) {
    if (tree === null) {
        return 0
    }
    // Calcular la altura de los subárboles izquierdo y derecho
    const leftHeight = treeHeight(tree.left);
    const rightHeight = treeHeight(tree.right);

    // La altura del árbol actual es 1 + la altura máxima de los subárboles
    return 1 + Math.max(leftHeight, rightHeight);
}