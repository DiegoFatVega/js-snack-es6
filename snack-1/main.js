/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

const bicicle = [
    {
        name: 'Tarmac SL8',
        weight: 6.65,
    },
    {
        name: 'Trek SLR9',
        weight: 6.79,
    },
    {
        name: 'Cannondale',
        weight: 6.85,
    },
    {
        name: 'Canyon Ultimate',
        weight: 6.73,
    },
    {
        name: 'Teammachine SLR01',
        weight: 6.10,
    },
    {
        name: 'Pinarello Dogma',
        weight: 6.80,
    },
    {
        name: 'Scott Addict',
        weight: 6.78,
    },
    {
        name: 'Orbea Orca',
        weight: 6.95,
    },
    {
        name: 'Wilier Filante',
        weight: 5.80,
    },
    {
        name: 'Cervélo R5',
        weight: 7.10,
    },
]

/* console.log(bicicle); */

/* for(let i = 0; i < bicicle.length; i ++){
    console.log(bicicleVariable);
} */

let minWeight = bicicle[0];

for (const bici of bicicle){
    if(bici.weight < minWeight.weight){
        minWeight = bici;
    }
}

console.log(minWeight);