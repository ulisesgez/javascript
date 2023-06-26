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

//Otro ejemplo:

const tienda = ['verduras', 'juguetes', 'bebidas'];
const [ , , dto3] = tienda;
console.log(dto3);//bebidas

//Otro ejemplo:

const tony = {
    name: 'tony stark',
    nickname: 'ironman',
    present: false,
    armor: ['mark I', 'mark V', 'hulkbuster']
};

const {name, nickname, present, armor} = tony;

//Otro ejemplo:

const heroe = {
    nombre: 'clark',
    apellido: 'kent',
    alias: 'superman',
    getNombre() {
        return `${this.nombre} ${apellido}`
    }
}

console.log(heroe);

/*
sin destrcturacion:

const nombre = heroe.nombre;
const apellido = heroe.apellido;
const alias = heroe.alias;

console.log(nombre, apellido, alias);

Con desestructuracion:

const {nombre, apellido, alias} = heroe;
const {nombre, apellido, alias, edad} = heroe;//edad da undefined
const {nombre, apellido, alias, edad = 0} = heroe;//edad da 0
*/

//Otro ejemplo:

var a;
var b;
var c;

[a, b,,, c] = [1 ,2, 3, 4, 5, 6];
//[a, b, , , c] = [1 ,2, 3, 4, 5, 6]; tambien

console.log(a);//1
console.log(b);//2
console.log(c);//5

//Otro ejemplo:

const carro = {
    marca: "Ford",
    ano: 2020
};

/*
Antes:
const marca = carro.marca;
const ano = carro.año;
*/

const {marca, ano} = carro;

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

//Otro ejemplo:

var coordenadas = {
    x: 4,
    y: 6,
    z: 12
};
const {x, y, z} = coordenadas;

console.log(x);
console.log(y);
console.log(z);

//Otro ejemplo:

const computer = {
    hp: {
        color: "green",
        modelo: "qwsa"
    }
}

const {hp: {color, modelo}} = computer;
console.log(color);
console.log(modelo);

/*
Tambien esto es posible:

const {hp: {color: colorFavorito, modelo: modeloFavorito}} = computer;

console.log(colorFavorito);
console.log(modeloFavorito);
console.log(color);//error
*/

//Otro ejemplo con rest:

var j;
var k;
var arr;

[a, b, ...arr] = [1, 2, 3, 4, 5, 6, 7];

console.log(j);//1
console.log(k);//2
console.log(arr);//[3, 4, 5, 6, 7]

//Otro ejemplo con rest:

const arrInicial = [1, 2, 3, 4, 5, 6, 7, 8];

function removerPrimeros(arreglo) {
    const [ , , , ...arrNuevo] = arreglo;
    return arrNuevo;
}

const arrFinal = removerPrimeros(arrInicial);
console.log(arrFinal);//[4, 5, 6, 7, 8]

//Otro ejemplo:

const estadisticas = {
    max: 56.78,
    moda: 23.87,
    min:-0.75
};

const mitad = ({max, min}) => (max + min) / 2.0;

console.log(mitad(estadisticas));//28.015