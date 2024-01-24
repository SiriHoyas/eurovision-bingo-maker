import { source } from "./source"

function getRandomTiles() {
    
    const sourceArray = source

    const uniqueTiles = [];
    while (uniqueTiles.length < 24) {
        const randomIndex = Math.floor(Math.random() * sourceArray.length);
        const randomTile = sourceArray[randomIndex];

        if (!uniqueTiles.some(tile => tile.id === randomTile.id)) {
            uniqueTiles.push(randomTile);
        }
    }

    return uniqueTiles;
}


export default getRandomTiles;