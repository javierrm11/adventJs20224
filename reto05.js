/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
    const shoesOrdenados = [];

    shoes.forEach((shoe, index) => {
        let number = shoe.size;
        if (shoe.type === 'I') {
            const matchIndex = shoes.findIndex(
                (tipo, i) => tipo.type === 'R' && tipo.size === shoe.size && i !== index
            );
            if (matchIndex !== -1) {
                shoesOrdenados.push(number);
                shoes.splice(matchIndex, 1); // Eliminar zapato derecho emparejado
            }
        }
    });

    return shoesOrdenados;
}