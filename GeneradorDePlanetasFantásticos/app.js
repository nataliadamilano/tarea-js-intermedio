// Generador de Planetas Fantásticos:
// ● Instrucciones: Escribe una función que genere nombres y características
// únicas para planetas imaginarios. Combina elementos como colores,
// elementos químicos y fenómenos cósmicos para crear mundos asombrosos.


function getImaginaryPlanet() {
    const colours = ['Rojo', 'Azul', 'Verde', 'Violeta', 'Amarillo'];
    const chemicalElements = ['Helio', 'Neón', 'Argón', 'Xenón', 'Kriptón'];
    const cosmicPhenomena = ['Nebulosa', 'Agujero Negro', 'Supernova', 'Galaxia', 'Quásar'];

    // Seleccionar aleatoriamente elementos de cada categoría
    let randomColour = colours[getRandom(colours)];
    let randomChemicalElement = chemicalElements[getRandom(chemicalElements)];
    let randomCosmicPhenomenon = cosmicPhenomena[getRandom(cosmicPhenomena)];

    const planetName = `${randomColour} ${randomChemicalElement} ${randomCosmicPhenomenon}`;
    const uniqueFeatures = `En este planeta, el ${randomChemicalElement} forma ríos que fluyen hacia un/a ${randomCosmicPhenomenon.toLowerCase()} central.`;

    console.log(`Nombre del planeta: ${planetName}.\nCaracterísticas únicas: ${uniqueFeatures}`);
}

function getRandom(array){
    return Math.floor(Math.random() * array.length);
}

getImaginaryPlanet();
