// Simulador de Viaje en el Tiempo Musical:
// ● Instrucciones: Escribe una función que, dado un año, devuelva una
// recomendación de canciones populares de esa época. Puedes mezclar
// diferentes géneros y hacer recomendaciones basadas en eventos históricos
// de ese año.


function getMusicalRecomendation(year){

    if (year >= 1920 && year <= 2023){
        var result = getPopularSongsWithHistoricEvent(year, popularSongsByYear);
        if(result === undefined){
            console.log("Lo siento, no existe un registro que coincida con ese año dentro de nuestra base de datos. Intenta con otro año.");
        }
        else if (result.popularSongs.length != 0){
            let listPopularSongs = getListPopularSongs(result.popularSongs);
            console.log(`Buscaste por el año ${year}.\nEn esa época se llevó a cabo el evento histórico: '${result.historicEvent}'.\nEstas son algunas de las canciones populares que se escuchaban en ese entonces:\n${listPopularSongs}`);
        }
        else{
            console.log("Lo siento, no existe un registro que coincida con ese año dentro de nuestra base de datos. Intenta con otro año.");
        }
    }
    else{
        console.log("No hay registros de canciones populares en ese año.");
    }
}

function getPopularSongsWithHistoricEvent(year, songsArray){
    let result = songsArray.find(songs => songs.year === year);
    return result;
}

function getListPopularSongs(array){
    var listPopularSongs = ``;
    for(let i = 0; i < array.length; i++){    
        if (listPopularSongs.trim().length != 0){
            listPopularSongs = listPopularSongs + `\n- ${array[i]}`;
        }
        else{
            listPopularSongs = `- ${array[i]}`;
        }
        
    }
    return listPopularSongs;
}

const popularSongsByYear = [
    {
        year: 1900,
        historicEvent: 'Celebración de la Exposición Universal de París',
        popularSongs: ['"When You Were Sweet Sixteen" - James Thornton', ' "Ma Tiger Lily" - Arthur Collins']
    },
    {
        year: 1910,
        historicEvent: 'Hundimiento del Titanic en su viaje inaugural',
        popularSongs: ['"Let Me Call You Sweetheart" - Peerless Quartet', ' "By the Light of the Silvery Moon" - Billy Murray']        
    },
    {
        year: 1933,
        historicEvent: 'Asunción de Franklin D. Roosevelt durante la Gran Depresión',
        popularSongs: ['"Stormy Weather" - Ethel Waters', ' "You\'re Getting to Be a Habit with Me" - Bing Crosby']        
    },
    {
        year: 1945,
        historicEvent: 'Fin de la Segunda Guerra Mundial',
        popularSongs: ['"Sentimental Journey" - Les Brown & Doris Day', ' "Rum and Coca-Cola" - The Andrews Sisters']        
    },
    {
        year: 1964,
        historicEvent: 'Llegada de The Beatles a América desatando la "Beatlemanía"',
        popularSongs: ['"I Want to Hold Your Hand" - The Beatles', ' "Can\'t Buy Me Love" - The Beatles']        
    },
    {
        year: 1969,
        historicEvent: 'El hombre llega a la Luna con la misión Apollo 11',
        popularSongs: ['"Space Oddity" - David Bowie', ' "Aquarius/Let the Sunshine In" - The 5th Dimension']        
    },
    {
        year: 1973,
        historicEvent: 'Firma del Acuerdo de Paz de París, poniendo fin a la Guerra de Vietnam',
        popularSongs: ['"Tie a Yellow Ribbon Round the Ole Oak Tree" - Tony Orlando and Dawn', ' "Crocodile Rock" - Elton John']        
    },
    {
        year: 1986,
        historicEvent: 'El accidente del transbordador espacial Challenger',
        popularSongs: ['"That\'s What Friends Are For" - Dionne Warwick & Friends', ' "Walk Like an Egyptian" - The Bangles']        
    },
    {
        year: 1994,
        historicEvent: 'Nelson Mandela se convierte en el primer presidente negro de Sudáfrica',
        popularSongs: ['"I Will Always Love You" - Whitney Houston', ' "The Sign" - Ace of Base']        
    },
    {
        year: 2005,
        historicEvent: 'Huracán Katrina golpea la costa del Golfo de los Estados Unidos',
        popularSongs: ['"Gold Digger" - Kanye West ft. Jamie Foxx', ' "Hollaback Girl" - Gwen Stefani']        
    },
    {
        year: 2011,
        historicEvent: 'Inicio de las protestas de la Primavera Árabe',
        popularSongs: ['"Rolling in the Deep" - Adele', ' "Party Rock Anthem" - LMFAO']        
    },
    {
        year: 2018,
        historicEvent: 'Movimiento #MeToo cobra fuerza en la lucha contra el acoso sexual',
        popularSongs: ['"This Is America" - Childish Gambino', ' "Shallow" - Lady Gaga, Bradley Cooper']        
    },
];

getMusicalRecomendation(1964);