/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
    if (inventory.length === 0) {
        return {}
    }
    const inventoryOrdenado = {}
    inventory.forEach(juguete => {
        if (!inventoryOrdenado[juguete.category]) {
            inventoryOrdenado[juguete.category] = {}
        }
        // Si el juguete ya existe en esa categoría, acumulamos las cantidades
        if (inventoryOrdenado[juguete.category][juguete.name]) {
            inventoryOrdenado[juguete.category][juguete.name] += juguete.quantity;
        } else {
            // Si no existe, lo añadimos con su cantidad inicial
            inventoryOrdenado[juguete.category][juguete.name] = juguete.quantity;
        }

    });
    return inventoryOrdenado
}