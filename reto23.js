/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
    let faltan = []
    let numIni = 1
    let numFin = Math.max(...nums);
    for (numIni; numIni <= numFin; numIni++) {
        if (!nums.includes(numIni)) {
            faltan.push(numIni)
        }
    }
    return faltan
}