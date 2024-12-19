/**
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */
function prepareGifts(gifts) {
    const giftsSinDupliados = gifts.filter((gift, index) => gifts.indexOf(gift) === index).sort()
    return giftsSinDupliados
}