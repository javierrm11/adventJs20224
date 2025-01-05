/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
    let combinaciones = [];


    const backtrack = (start, current) => {
        if (current.length > 0) {
            combinaciones.push([...current]);
        }
        for (let i = start; i < gifts.length; i++) {
            current.push(gifts[i]);
            backtrack(i + 1, current);
            current.pop();
        }
    };

    backtrack(0, []);

    combinaciones.sort((a, b) => a.length - b.length);
    return combinaciones;
}