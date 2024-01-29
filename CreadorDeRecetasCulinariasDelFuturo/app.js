// Creador de Recetas Culinarias del Futuro:
// ● Instrucciones: Escribe una función que genere recetas culinarias futuristas
// combinando ingredientes inusuales y técnicas de cocina avanzadas. ¡Haz
// que la comida del futuro sea emocionante y deliciosa!



const unusualIngredients = [
    "Algas bioluminiscentes",
    "Setas extraterrestres",
    "Polvo de asteroides",
    "Proteínas de algas",
    "Queso de insectos",
    "Granola de almendras espaciales",
    "Salmón de criadero",
    "Hummus de remolacha",
    "Aceitunas negras de otro planeta",
    "Kiwi y spirulina"
];

const advancedTechniques = [
    "Impresión 3D de alimentos",
    "Cultivo celular en laboratorio",
    "Cocina con microgravidad",
    "Bioingeniería de hongos",
    "Cultivo hidropónico en el espacio",
    "Uso de paneles solares integrados",
    "Cultivo de microgreens en estación espacial",
    "Destilación avanzada con agua lunar",
    "Biofabricación de caviar",
    "Técnicas de cocina en gravedad cero"
];

function getFuturisticRecipe(){
    firstIngredient = unusualIngredients[getRandom(unusualIngredients)];
    secondIngredient = unusualIngredients[getRandom(unusualIngredients)];
    randomTechnique = advancedTechniques[getRandom(advancedTechniques)];
    console.log(`Receta Culinaria del Futuro:\n\nIngredientes:\n- ${firstIngredient}\n- ${secondIngredient}\n\nTécnica:\n- ${randomTechnique}\n\n`);
}

function getRandom(array){

    return Math.floor(Math.random() * array.length);
}

getFuturisticRecipe();