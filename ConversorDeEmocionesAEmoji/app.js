// Conversor de Emociones a Emoji:
// ● Instrucciones: Crea una función que tome una cadena de texto que exprese
// emociones (como "feliz", "triste", "sorprendido") y la convierta en un emoji
// correspondiente. ¡Añade una dosis de humor a tus emociones!

// Para los emojis utilice la página https://emojipedia.org/. Tiene emojis que soportan la representación de caracteres en Unicode llamados Codepoints.
// Utilicé `parseInt(buscarEmoji.code, 16)` que convierte la cadena hexadecimal en un número entero, y String.fromCodePoint() convierte ese número en el carácter Unicode correspondiente. Podría haberlo hecho con `\u{XXXX}` pero si quiero concatenar
// variables con strings en mi retorno final en el console.log(), el caracter unicode no era reconocido así que opté por esta opción final.

function emojiConverter(emotion){
    const emotions = [
        {
            name: 'feliz',
            code: '1F642'
        },
        {
            name: 'enojado',
            code: '1F620'
        },
        {
            name: 'sorprendido',
            code: '1F62E'
        },
        {
            name: 'enamorado',
            code: '1F60D'
        },
        {
            name: 'triste',
            code: '1F641'
        },
        {
            name: 'loco',
            code: '1F92A'
        },
        {
            name: 'fiestero',
            code: '1F973'
        },
        {
            name: 'nerd',
            code: '1F913'
        },
        {
            name: 'afiebrado',
            code: '1F912'
        },
        {
            name: 'resfriado',
            code: '1F927'
        },
        {
            name: 'acalorado',
            code: '1F975'
        },
        {
            name: 'congelado',
            code: '1F976'
        },
        {
            name: 'somnoliento',
            code: '1F971'
        },
        {
            name: 'avergonzado',
            code: '1F633'
        },
        {
            name: 'asustado',
            code: '1F631'
        }
    ];

    let buscarEmoji = emotions.find(emoji => emoji.name === emotion.toLowerCase());
    if (buscarEmoji !== undefined){
        console.log(`Emoji ${buscarEmoji.name}: ${String.fromCodePoint(parseInt(buscarEmoji.code, 16))}`);
    }
    else{
        console.log('La emoción que estás buscando no existe. Prueba con otra distinta.')
    }

}

emojiConverter('loco');