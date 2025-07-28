/* Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 */

console.log(`hi`);

const soccerPlayers = [
    {
        name: 'Kylian Mbappé',
        score: 0,
        fouls_won:0,
    },
    {
        name: 'Erling Haaland',
        score: 0,
        fouls_won:0,
    },
    {
        name: 'Jude Bellingham',
        score: 0,
        fouls_won:0,
    },
    {
        name: 'Vinícius Júnior',
        score: 0,
        fouls_won:0,
    },
    {
        name: 'Harry Kane',
        score: 0,
        fouls_won:0,
    },
    {
        name: 'Lautaro Martínez',
        score: 0,
        fouls_won:0,
    },
    {
        name: 'Pedri González',
        score: 0,
        fouls_won:0,
    },
    {
        name: 'Mohamed Salah',
        score: 0,
        fouls_won:0,
    },
    {
        name: 'Declan Rice',
        score: 0,
        fouls_won:0,
    },
    {
        name: 'Lamine Yamal',
        score: 0,
        fouls_won:0,
    },
]

//console.log(soccerPlayers)
//provo la funzione math random
//const number = Math.floor(Math.random() * 101);
//console.log(number);

//compiliamo il campo score e fouls_won con numeri casuali
soccerPlayers.forEach((soccerPlayers,index) => {
    soccerPlayers.score = Math.floor(Math.random() * 101);
    soccerPlayers.fouls_won = Math.floor(Math.random() * 101);
});

console.log(soccerPlayers)