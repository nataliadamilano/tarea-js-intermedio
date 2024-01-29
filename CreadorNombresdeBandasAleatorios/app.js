// Creador de Nombres de Bandas Aleatorios:
// ● Instrucciones: Escribe una función que genere nombres de bandas aleatorios
// y únicos cada vez que se llama. Puedes combinar palabras inusuales,
// colores extravagantes y animales exóticos para hacerlos sonar realmente
// interesantes.

const subjects = ['Serpientes', 'Ranas', 'Dragones', 'Herman@s', 'Amig@s', 'Roedores', 'Águilas', 'Zombis', 'Niñ@s', 'Perdedores', 'Maniátic@s', 'Vencedor@s'];
const adjectives = ['Elegantes', 'Fantástic@s', 'Dinamita', 'Rápid@s', 'Pesad@s', 'Malvad@s', 'Rot@s', 'Extrem@s', 'Azules', 'Roj@s', 'Verdes', 'Celestes', 'Amarill@s', 'Oscur@s'];

function createBandName(){
    console.log(`L@s ${subjects[getRandom(subjects)]} ${adjectives[getRandom(adjectives)]}`);
}

function getRandom(array){
    return Math.floor(Math.random() * array.length);
}

createBandName();