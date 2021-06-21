
// Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

// Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, 
// se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

// Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per
//  ogni gatto.
//array di gatti
const cats = [
    {
        nome : 'Pippo',
        eta : 1,
        colore : '#ff0000',
        sesso : 'male'
    },
    {
        nome : 'Pluto',
        eta : 4,
        colore : '#ff00ff',
        sesso : 'male'
    },
    {
        nome : 'Paperino',
        eta : 2.5,
        colore : '#ffff00',
        sesso : 'male'
    },
    {
        nome : 'Lola',
        eta : 3,
        colore : '#0000ff',
        sesso : 'female'
    },
    {
        nome : 'Giulia',
        eta : 8,
        colore : '#00ffff',
        sesso : 'female'
    },
    {
        nome : 'Sara',
        eta : 12,
        colore : '#00ff00',
        sesso : 'female'
    }
];


//visualizzo tutti i gatti con nome e colore 
cats.forEach(element => {
    console.log(element.nome , element.colore);
});



//------------------milestone 2--------------------------------- 
// Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, 
// se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.



//creo due array 
let catsMale = cats.filter((object) =>object.sesso == 'male');

let catsFemale = cats.filter((object) => object.sesso == 'female');




// //versione con un solo filter
// let catsFemale = [];

// let catsMale = cats.filter((object) => {
//     if(object.sesso == "male"){
//         return true;
//     }
//     else{
//         catsFemale.push(object);
//         return false;
//     }
// });


let opacity;
console.log(catsMale);
console.log(catsFemale);
catsMale.forEach((element) => {
    const {nome , sesso , eta} = element;
    opacity = (100 * eta) / catsMale[1].eta;  // gattopiuvecchio : 100 = gattocheanalizzo : x  => x = (100 * gattocheanalizzo) / gattopiuvecchio
    // console.log(opacity);
    document.getElementById("male").innerHTML += `<li> ${nome} , ${sesso} <i style="color: blue; opacity:${opacity}%;font-size: 30px" class="fas fa-ribbon"></i> </li> `;
});
catsFemale.forEach((element) => {
    const {nome , sesso, eta} = element;
    opacity = (100 * eta) / catsFemale[2].eta;
    console.log(opacity);
    document.getElementById("female").innerHTML += `<li> ${nome} , ${sesso} <i style="color: pink; opacity:${opacity}%;font-size: 30px" class="fas fa-ribbon"></i> </li> `;
});
// document.getElementById("male").innerHTML += `<li> ${} <i style="color: blue; height: 50px" class="fas fa-ribbon"></i> </li> `

/* <i style="color: blue; height: 50px" class="fas fa-ribbon"></i> */
