'use strict';
////////////////////////////////////////////////////////////////////////////////
/**
 * Javascript - ECMAScript6 - Exercices
 * for  The Bridge
 * by   xavimat
 * 2022-05-02
 */


////////////////////////////////////////////////////////////////////////////////
// ## 1. Funciones flecha
console.log('/////////////////////////\n1. Funciones flecha')
// * Convierte la siguiente función en una función flecha:
// function saludar() {
//   return "Hola";
// }
const saludar = () => "Hola";

console.log("saludar():", saludar());

// * Convierte la siguiente función en una función flecha en línea:
// function division(a,b) {
//   return a / b;
// }
const division = (a, b) => a / b;

console.log("division(4, 5):", division(4, 5));

// * Convierte la siguiente función en una función flecha:
// function miNombre(nombre) {
//   return `Mi nombre es ${nombre}`;
// }
const miNombre = nombre => `Mi nombre es ${nombre}`;

console.log("miNombre('Bond, James Bond'):", miNombre('Bond, James Bond'));

// * Convierte las siguientes funciones en funciones flecha:
// function test2() {
//   console.log("Función test 2 ejecutada.");
// }
const test2 = () => { console.log("Función test 2 ejecutada."); };

// function test1(callback) {
//   callback();
// }
const test1 = callback => { callback(); };

console.log("test1(test2):", test1(test2));


////////////////////////////////////////////////////////////////////////////////
// ## 2. Foreach
console.log('\n/////////////////////////\n2. Foreach');
// * Utiliza la siguiente array para resolver los próximos ejercicios:

let gente = [
    {
        nombre: "Jamiro",
        edad: 45,
    },
    {
        nombre: "Juan",
        edad: 35,
    },
    {
        nombre: "Paco",
        edad: 34,
    },
    {
        nombre: "Pepe",
        edad: 14,
    },
    {
        nombre: "Pilar",
        edad: 24,
    },
    {
        nombre: "Laura",
        edad: 24,
    },
    {
        nombre: "Jenny",
        edad: 10,
    },
];


// * Crea un array con la gente mayor de 25 años y muéstralo por consola.
const olderThan25 = [];
gente.forEach(person => {
    if (person.edad > 25) {
        olderThan25.push(person);
    }
});
// We could have used filter: gente.filter(person=>person.edad>25)

console.log("olderThan25:", olderThan25);

// * Crea un array con la gente que empieza por J.
const startsWithJ = [];
gente.forEach(person => {
    if (person.nombre.startsWith('J')) {
        startsWithJ.push(person);
    }
});
// We could have used filter: gente.filter(person=>person.nombre.startsWith('J'))

console.log("startsWithJ:", startsWithJ);


////////////////////////////////////////////////////////////////////////////////
// ## 3. Map
console.log('\n/////////////////////////\n3. Map');
// * Dado el siguiente array, crear otro que sea el resultado de elevar cada número a sí mismo:
const numbers = [4, 5, 6, 7, 8, 9, 10];
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]

const powerOfItself = numbers.map(num => num ** num);

console.log("powerOfItself:", powerOfItself);


// * Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado:
const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];
//Resultado esperado
/* [
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
   ]
*/
const foodSentences = foodList.map((food, i) =>
    ["Pizza", "Ramen", "Paella"].includes(food) ?
        `Como soy de ${['Italia', 'Japón', 'Valencia'][i]}, amo comer ${food}` :
        `Aunque no como carne, el ${food} es sabroso`
);
// Another version:
const foodSentences2 = foodList.map((food) =>
    ["Pizza", "Ramen", "Paella"].includes(food) ?
        `Como soy de ${{Pizza:'Italia', Ramen:'Japón', Paella:'Valencia'}[food]}, amo comer ${food}` :
        `Aunque no como carne, el ${food} es sabroso`
);

console.log("foodSentences:", foodSentences);
console.log("foodSentences2:", foodSentences2);


////////////////////////////////////////////////////////////////////////////////
// 4. Filter
console.log('\n/////////////////////////\n4. Filter');
// Crea un segundo array que devuelva los impares
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = numbers2.filter(num => num % 2);

console.log("oddNumbers:", oddNumbers);


// Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
const foodList2 = [
    {
        name: 'Tempeh',
        isVeggie: true
    },
    {
        name: 'Cheesbacon burguer',
        isVeggie: false
    },
    {
        name: 'Tofu burguer',
        isVeggie: true
    },
    {
        name: 'Entrecot',
        isVeggie: false
    }
];
/* [
'Que rico Tempeh me voy a comer!',
'Que rica Tofu burguer me voy a comer!'
]
*/

const veggieFood = foodList2
    .filter(food => food.isVeggie)
    .map(food =>
        food.name.includes('burguer') ?
            `¡Qué rica ${food.name} me voy a comer!` :
            `¡Qué rico ${food.name} me voy a comer!`
    );

console.log("veggieFood:", veggieFood);


////////////////////////////////////////////////////////////////////////////////
// 5. Reduce
console.log('\n/////////////////////////\n5. Reduce');

// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
const numeros = [39, 2, 4, 25, 62];
// Salida--> 483600

const multiplyAll = numeros.reduce((prev, curr) => prev * curr);

console.log("multiplyAll:", multiplyAll);



////////////////////////////////////////////////////////////////////////////////
// Extras
console.log('\n/////////////////////////\n Extras');
// Map
// Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:
const staff = [
    {
        name: "Pepe",
        role: "The Boss",
        hobbies: ["leer", "ver pelis"],
    },
    {
        name: "Ana",
        role: "becaria",
        hobbies: ["nadar", "bailar"],
    },
    {
        name: "Luis",
        role: "programador",
        hobbies: ["dormir", "comprar"],
    },
    {
        name: "Carlos",
        role: "secretario",
        hobbies: ["el fútbol", "el queso"],
    },
];

// Resultado esperado
/*
    [
      'Pepe es TheBoss y le gusta leer y ver pelis',
      'Ana es becaria y le gusta nadar y bailar',
      'Luis es programador y le gusta dormir y comprar',
      'Ana es becaria y le gusta nadar y bailar',
      'Carlos es secretario y le gusta fútbol y queso'
    ]
 */

const staffDescription = staff.map(person =>
    `${person.name} es ${person.role} y le gusta ${person.hobbies.join(' y ')}`
);

console.log("staffDescription:", staffDescription);


// Filter
// Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros
const inventory = [
    {
        name: 'Mobile phone',
        price: 199
    },
    {
        name: 'TV Samsung',
        price: 459
    },
    {
        name: 'Viaje a cancún',
        price: 600
    },
    {
        name: 'Mascarilla',
        price: 1
    }
];
/*
[
'TV Samsung,',
'Viaje a Cancún'
]
*/

const moreThan300 = inventory
    .filter(item => item.price > 300)
    .map(item => item.name);

console.log("moreThan300:", moreThan300);


// Reduce
// Concatena todos los elementos del array con reduce para que devuelva una sola frase
const sentenceElements = [
    'Me',
    'llamo',
    'XX',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];

// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'

const concatElements = sentenceElements.reduce((prev, curr) => prev + ' ' + curr);
// We could have used 'join': sentenceElements.join(' ');

console.log("concatElements:", concatElements);
