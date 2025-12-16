function packGifts(gifts, maxWeight) {
    let sleds = 0;
    let currentLoad = 0;
    
    for (const gift of gifts) {
        if (gift > maxWeight) return null;
        
        if (currentLoad + gift > maxWeight) {
            sleds++;
            currentLoad = gift;
        } else {
            currentLoad += gift;
        }
    }
    
    return currentLoad > 0 ? sleds + 1 : sleds;
}

console.log(packGifts([1, 1, 1, 1], 2))
// 2 trineos
// Trineo 1: 1 + 1 = 2
// Trineo 2: 1 + 1 = 2
