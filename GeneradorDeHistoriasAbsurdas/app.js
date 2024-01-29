// Generador de Historias Absurdas:
// ● Instrucciones: Desarrolla una función que genere historias absurdas
// combinando elementos inesperados, como pingüinos que hablan francés,
// robots enamorados de plantas y astronautas perdidos en el espacio con una
// mascota alienígena.

const subjects = ['pingüinos que hablan francés', 'astronautas perdidos en el espacio con su mascota alienígena', 'robots enamorados de plantas', 'duendes risueños y danzantes'];
const subjectSituations = ['se encontraron con', 'bailaron y jugaron con', 'hablaron con'];
const otherSubjects = ['focas francesas', 'ranas de distintos colores', 'leones matemáticos', 'gatos lunares amistosos', 'árboles parlanchines', 'monstruos planta gigantes'];
const subjectsEnd = ['y vivieron felices por siempre', 'y pensaron quedarse allí para siempre', 'y vivieron juntos hasta el final', 'y se hicieron muy amigos'];

function createStory(){
    console.log(`Había una vez unos ${subjects[getRandom(subjects)]} que ${subjectSituations[getRandom(subjectSituations)]} ${otherSubjects[getRandom(otherSubjects)]} ${subjectsEnd[getRandom(subjectsEnd)]}. Fin.`);
}

function getRandom(array){
    return Math.floor(Math.random() * array.length);
}

createStory();