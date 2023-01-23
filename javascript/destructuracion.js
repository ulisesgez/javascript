/*
Destructuración: Nueva forma de asignar valores a arreglos y objetos
*/
let numeros = [1, ,2, 3];
/*
Sin destructuracion:
*/
let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2];

console.log(uno, dos, tres);//1 2 3

//Con destructuracion:

const [one, two, three] = numeros;

console.log(one, two, three);//1 2 3

//En objetos:

let persona = {
    nombre: "ulises",
    apellido: "gutierrez",
    edad: 20
};

/*
En este caso, con los objetos tenemos que nombrar las variables,
con el mismo nombre de la propiedad, mal ejemplo:

let {nombre, apellido, age} = persona;
console.log(nombre, apellido, age);//error

Lo siguiente es posible:
*/

let {nombre, apellido, edad} = persona;
console.log(nombre, apellido, edad);//ulises gutierrez 20

/*
Esto si funciona, si se reconoce:

let {nombre, edad, apellido} = persona;
console.log(nombre, apellido, edad);//ulises gutierrez 20
*/

//Destructuración con arrays:

let fruits = ['apple', 'banana'];
let [a, b] = fruits;
console.log(a, b);//apple banana
console.log(a, fruits[1]);//apple banana

//Destructuración con objects:

let user = {username: 'ulises', age: 40};
let { username, age} = user;
console.log(username, age);
console.log(username, user.age);