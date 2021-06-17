
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
        eta : 1.5,
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

//creo due array 
let catsMale = cats.filter((object) => {
    return object.sesso == 'male';
});

let catsFemale = cats.filter((object) => {
    return object.sesso == 'female';
});




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



console.log(catsMale);
console.log(catsFemale);
catsMale.forEach((element) => {
    const {nome , sesso} = element;
    document.getElementById("male").innerHTML += `<li> ${nome} , ${sesso} <i style="color: blue; height: 50px" class="fas fa-ribbon"></i> </li> `;
});
catsFemale.forEach((element) => {
    const {nome , sesso} = element;
    document.getElementById("female").innerHTML += `<li> ${nome} , ${sesso} <i style="color: blue; height: 50px" class="fas fa-ribbon"></i> </li> `;
});
// document.getElementById("male").innerHTML += `<li> ${} <i style="color: blue; height: 50px" class="fas fa-ribbon"></i> </li> `

/* <i style="color: blue; height: 50px" class="fas fa-ribbon"></i> */
