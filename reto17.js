/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
    let mapeo = []
    for (let fill = 0; fill < grid.length; fill++) {
        mapeo[fill] = []
        for (let col = 0; col < grid[0].length; col++) {
            let boms = 0;
            if (grid[fill][col + 1]) {
                boms++;
            }
            if (grid[fill][col - 1]) {
                boms++;
            }
            if (fill - 1 >= 0 && grid[fill - 1][col]) {
                boms++;
            }
            if (fill - 1 >= 0 && grid[fill - 1][col - 1]) {
                boms++;
            }
            if (fill - 1 >= 0 && grid[fill - 1][col + 1]) {
                boms++;
            }
            if (fill + 1 < grid.length && grid[fill + 1][col]) {
                boms++;
            }
            if (fill + 1 < grid.length && grid[fill + 1][col - 1]) {
                boms++;
            }
            if (fill + 1 < grid.length && grid[fill + 1][col + 1]) {
                boms++;
            }
            mapeo[fill][col] = boms
        }
    }
    return mapeo
}