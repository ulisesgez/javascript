/*
Tipo de datos:
JavaScript toma prestada la mayor parte de su sintaxis de Java, C y C++, pero también ha sido
influenciado por Awk, Perl y Python.

JavaScript distingue entre mayúsculas y minúsculas y utiliza el juego de caracteres Unicode.
Por ejemplo, la palabra Früh (que significa "temprano" en alemán) podría usarse como nombre
de variable.
*/
const Früh = "foobar";
console.log(Früh);//foobar
/*
Pero, la variable frühno es la misma Frühporque JavaScript distingue entre mayúsculas y
minúsculas.
En JavaScript, las instrucciones se llaman sentencias y están separadas por punto y coma (;).
No es necesario un punto y coma después de una declaración si se escribe en su propia línea.
Pero si se desea más de una declaración en una línea, entonces deben estar separadas por
punto y coma.

Tipos de datos:

Primitivos:
Se accede directamente al valor.
- number
- string
- boolean
- null
- undefined
- symbol

Compuestos:
Se accede a la referencia del valor.
- object
- array
- function
- class
- map
- set
- weakmap
- weakset
*/
//Tipos de datos:
string = "cadena de texto"
numero = 19
booleano = true
flotante = 3.1416
/*
Valores especiales:
null
undefined
NaN
Infinity
*/

//Existe en el programa, pero no tiene valor:
let undefined
alert(undefined)

// Otro ejemplo:
4 + "7"; // 47
4 * "7"; // 28
2 + true // 3
false - 3 // -3

//Covertir un string a un number:
let falseNumber = "33";

console.log(Number(falseNumber) + 7);//40
/*
console.log(parseInt(falseNumber) + 7); numero entero, tambien lo convierte.
console.log(parseFloat(falseNumber) + 7); l0o convierte a decimal.

Undefined, Nan y null:

Tanto null como undefined van a representar un valor ausente, es decir una
variable que no tiene valor, pero la gran diferencia es que mientras undefined es una
variable que no ha sido inicializada.

Undefined:
El valor undefined es un tipo de dato que representa un valor que aún no ha sido
asignado o que no tiene un valor válido. En JavaScript, podemos utilizar la palabra
clave undefined para representar el valor undefined.
Indica que no se ha inicializado una variable y que el valor esta ausente.
*/
let indefinida;

console.log(indefinida);//undefined

/*
Nos dice que la variable esta vacia, pero es intencional,
a diferencia de undefined, con null le decimos que no va
a tener un valor (nulo o vacio):
*/

let numero = null;

/*
Null:
El valor null es un tipo de dato que representa un valor vacío o nulo.
En JavaScript, podemos utilizar la palabra clave null para representar el valor nulo.
A menudo, utilizamos null para representar un valor que aún no ha sido inicializado o
para representar un valor que no tiene sentido en el contexto actual.
Es un valor especial que indica la ausecia de un valor numerico valido.
*/
let nullo = null;
console.log(nullo);//null

/*
Diferencias entre Null y Undefined
Es importante tener en cuenta que null y undefined son valores diferentes en JavaScript.
null representa un valor intencionalmente vacío, mientras que undefined representa
un valor que aún no ha sido asignado o que no tiene un valor válido.

Nan o no es un numero:
Es un valor especial que indica que una operacion matematica no es valida.
*/

let numero2 = 5;
let numero3 = "pedro";

alert(numero2 * numero3);//NaN

/*
Tipo de dato Symbol:
Los símbolos son un tipo de dato único en JavaScript que se utiliza para crear
identificadores únicos. Cada vez que se crea un símbolo, se genera un nuevo
identificador único, lo que lo hace ideal para usar como claves de objetos o
para identificar elementos de manera única en una aplicación.
Symbol es un tipo de dato primitivo como el string, como el number, como el boolean,
como null, como undefined.
Una vez que creamos un Symbol su valor se va a mantener privado y para uso interno.
*/
let id = 'hola';
let id2 = 'hola';
let id3 = Symbol();
let id4 = Symbol();//crea una referencia unica

console.log(id === id2);//true

//Ahora con symbol:
console.log(id3 === id4);//false

//identificador/referencia:

let id5 = Symbol("id5");
let id6 = Symbol("id6");

//Objeto con symbol:
const NOMBRE = Symbol();
const persona = {
    //cuando queremos que sea un identificador unico dentro de las
    //propiedades de nuestro objeto y para eso utilizamos el symbol:
    [NOMBRE]: 'ulises'
}

console.log(persona);//{Symbol(): 'ulises'}

persona.NOMBRE = 'ulises gutierrez'//{NOMBRE: ulises gutierrez, Symbol(): 'ulises'}

console.log(persona.NOMBRE);//ulises gutierrez
console.log(persona[NOMBRE]);//ulises

for (let i in persona) {
    console.log(i);//NOMBRE
    console.log(persona[i]);//ulises gutierrez
}

//metodos, funciones:

const SALUDAR = Symbol();

persona[SALUDAR] = function() {
    console.log('hola');//hola
}

persona[SALUDAR]();//hola

/*
Tipos de datos BigInt:
Los bigint son un nuevo tipo de dato en JavaScript que se usa para representar
números enteros de un tamaño mayor al que puede manejar JavaScript de manera nativa.
Los bigint se escriben con el sufijo n, por ejemplo: 12345678901234567890n.

Es importante tener en cuenta que los bigint solo pueden ser usados para operaciones
matemáticas y no pueden ser usados con operadores de comparación, como == o ===.
En su lugar, debes usar los métodos BigInt.asIntN y BigInt.asUintN para hacer
comparaciones entre bigint y números normales.

También es importante tener en cuenta que los bigInt no son compatibles con todas
las funciones y métodos de JavaScript que aceptan números, por lo que debes asegurarte
de verificar la documentación de la función o método que quieres usar antes de intentar
usar bigInt con ellos.
*/
const aBigNUmber = 12098734650912874365n;//antes
const anotherBigNUmber = BigInt(12098734650912874365);//despues

console.log(aBigNUmber);//12098734650912874365n
console.log(anotherBigNUmber);//12098734650912874365n

//Nullish

const anotherNUmber = 1;
const validate = anotherNUmber ?? 5;//Si este valor es null
console.log(validate);//1

const anotherNUmberTwo = null;
const validateTwo = anotherNUmberTwo ?? 5;//Si este valor es null
console.log(validateTwo);//5

/*
Set:
Un set es una lista de valores sin duplicados.
Nuevo tipo de dato ECMAS6
Arreglo mejorado de javascript que solo acepta valores unincos, hablando de valores primitivos.
*/

const set = new Set([1, 2, 3, 3, 4, 5, true, false, false, {}, "hola", "HOLA"]);
console.log(set);//Set(10) { 1, 2, 3, 4, 5, true, false, {…}, 'hola', 'HOLA' }
console.log(set.size);//10

/*
0: 1
1: 2
2: 3
3: 4
4: 5
5: true
6: false
7: Object
8: "hola"
9: "HOLA"
size: 10
*/

//Recorrer sus elementos:

for(item of set) {
    console.log(item);
}

//Acceder a una posición, para eso tenemos que convertir nuestro set comon si fuera un arreglo con from:
let arr = Array.from(set);
console.log(arr[0]);//1
console.log(arr[8]);//hola

//Eliminar valores de set:

set.delete("HOLA");
console.log(set.size);//9

//Comprobar si existe tal valor dentro de la coleccion:

console.log(set.has("HOLA"));//false, ya fue eliminado

//Pasarle valores:

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});

//Recorrer sus elementos:

set2.forEach(item => console.log((item)));

//Limpiar un set:

set2.clear();
console.log(set2);//No tiene valores

//otro ejemplo:

const list = new Set();

list.add('item 1');
list.add('item 2').add('item 3');

console.log(list);

/*
Set(3) { 'item 1', 'item 2', 'item 3' }
*/

/*
Map:
Los mapas son una estructura de datos que nos permite almacenar colecciones de
pares clave/valor, donde tanto las claves como los valores pueden ser de cualquier tipo.
Son objetos que nos sirven para almacenar conjunto de valores asociados a manera de objeto.
*/

let mapa = new Map();

mapa.set("nombre", "ulises");
mapa.set("apellido", "gutierrez");
mapa.set("edad", 35);

console.log(mapa);//Map(3) {'nombre' => 'ulises', 'apellido' => 'gutierrez', 'edad' => 35}

//Saber cuantos elemento tiene nuestor map:
console.log(mapa.size);//3

//Evaluar si existe la llave o no?
console.log(mapa.has("correo"));//false
console.log(mapa.has("nombre"));//true

//Mandar a consola el nombre:
console.log(mapa.get("nombre"));//ulises

//sobreescribir valor:
mapa.set("nombre", "jose");
console.log(mapa.get("nombre"));//jose

//Eliminar elementos de una coleccion / mapa:
mapa.delete("apellido");//Solo quedara nombre y edad.

//Recorrer mapa(es un elemento iterable):
for(let [key, value] of mapa) {
    console.log(`Llave: ${key}, valor: ${value}`);
}

//Caracteristica de los maps:
mapa.set(19, "diecinueve");
mapa.set(false, "falso");
mapa.set({}, {});

console.log(mapa);

//Otra forma de inicializar los valores para un mapa:
const mapaDos = new Map()([
    ["nombre", "jesus"],
    ["apellido", "lopez"],
    ["edad", 20],
    [null, "nulo"]
]);

console.log(mapaDos);

const llaves = [...mapaDos.keys()];//Nos va a generar un nuevo array con las llaves de nuestro mapa.
const valores = [...mapaDos.values()];//Nos va a generar un nuevo array con los valores de nuestro mapa.

console.log(llaves);//[ 'nombre', 'apellido', 'edad', null ]
console.log(valores);//[ 'jesus', 'lopez', 20, 'nulo' ]

/*
Map: Nos ayudara a mapear ciertos articulos, de igual forma, este metodo nos va a
generar un nuevo array, no va a modificar el array que ya tenemos:
*/
let computers = [
    { brand: "apple", cost: 50000 },
    { brand: "dell", cost: 15000 },
    { brand: "samsung", cost: 13000 },
    { brand: "hp", cost: 10000 },
    { brand: "toshiba", cost: 14000 },
    { brand: "lenovo", cost: 18000 },
    { brand: "asus", cost: 25000 }
];

//Con esto le pedimos que nos regrese de todos los articulos el nombre de los articulos:
let brandComputers = computers.map(function(computer){
    return computer.brand
});

console.log(brandComputers);

/*
WeakSet y WeakMap:
WeakSet y WeakMap son colecciones de datos que nos permiten almacenar valores de
forma debil, es decir que no evitan que el garbage collector elimine los valores
almacenados en ellas.
WeakSet y WeakMap son muy parecidos a Set y Map, con la diferencia de que solo
pueden almacenar valores de tipo objeto y no son iterables.
Conjuntos debiles, debiles se refiere a solamnete pueden almacenar referencias debiles,
es decir que las llaves deben ser de tipo objeto.

Tienen algunas craencias, no son iterables, no podemos utilizar el metodo clear,
tampoco podemos verificar su tamaño o size.

No es posible como un set:
const ws = new WeakSet([1, 2, 3, 3, 4, 5, true, false, false, {}, "hola", "HOLA"]);
*/

const ws = new WeakSet();
let valor1 = { "valor1": 1 };
let valor2 = { "valor2": 2 };
let valor3 = { "valor3": 3 };

ws.add(valor1);
ws.add(valor2);

console.log(ws);//WeakSet { {…}, {…} }

console.log(ws.has(valor1));//true
console.log(ws.has(valor3));//false

ws.delete(valor1);
console.log(ws.has(valor1));//false

setInterval(() => console.log(ws), 1000);//WeakSet { {…}, {…} }
//Al pasar los 5 segundos, el garbage collector elimina los valores almacenados en el weakset.
setTimeout(() => console.log(ws), 5000);//WeakSet { {…}, {…} }

/*
Weak map:
NO es posible:
const wm = new WeakMap()([
    ["nombre", "jesus"],
    ["apellido", "lopez"],
    ["edad", 20],
    [null, "nulo"]
]);
*/

const wm = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);

console.log(wm);

console.log(wm.has(llave1));//true
console.log(wm.has(llave3));//false

console.log(wm.get(llave1));//1
console.log(wm.get(llave3));//undefined

wm.delete(llave1);
console.log(wm.has(llave1));//false

/*
Iterables e Iterators:
Iterables: Es un tipo de dato que puede ser recorrido.
Iterators: Es un objeto que contiene un metodo next() que devuelve un objeto con dos propiedades:
value: es el valor del elemento del iterable.
done: es un boolean que nos indica si el iterable tiene mas elementos para recorrer.
Cuando hablamos de un tipo de dato iterable, significa que es una estructura de datos lineal,
que hace que sus elementos sean publicos y se puedan recorrer por ejemplo, arreglos, strings, maps, sets.
*/
const iterable = [1, 2, 3, 4, 5];//iterable es el arreglo
const iterableString = "hola"//iterable es el string
//Accedemos al iterador del iterable:
const iterador = iterable[Symbol.iterator]();

console.log(iterable);//(5) [1, 2, 3, 4, 5]
console.log(iterador);//ArrayIterator
console.log(iterador.next());//{ value: 1, done: false }
console.log(iterador.next());//{ value: 2, done: false }
console.log(iterador.next());//{ value: 3, done: false }
console.log(iterador.next());//{ value: 4, done: false }
console.log(iterador.next());//{ value: 5, done: false }
console.log(iterador.next());//{ value: undefined, done: true }

//Optimizar k,o anterior:

let next = iterador.next();
while(!next.done) {
    console.log(next.value);//1, 2, 3, 4, 5
    next = iterador.next();
}

console.log(iterableString);//StringIterator

/*
Generators:
Es una funcion especial que retorna una serie de valores segun el algoritmo definido.
Es un tipo especial de funcion que retorna una serie de valores segun
el algoritmo definido.
Nos va a permitir tener una función de tipo especial que nos va a retornar una serie de valores
según el valor dado recordando este recurso.
Sintaxis mas sencilla para generar iteradores, se conocen como generators. NO es mas que una función
que nos permite trabajar de una manera mas amigable con la interface de los iteradores en
un elemento iterabel.
Convertir el codigo de una funcion en iterable.
*/
function* iterableDos(array) {
    for(let value of array) {
        yield value;
    }
}

const it = iterableDos(['ulises', 'oscar', 'david', 'ana']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
/*
ulises
oscar
david
ana
undefined
Cuando se termina de recorrer el iterable, nos va a devolver un valor undefined.

Otro ejemplo:
*/

function* countEmojis() {
    const emojis = ['feliz', 'triste', 'enojado', 'sorprendido'];
    for(let i = 0; i < emojis.length; i++) {
        yield emojis[i];//Nos va a devolver el valor de cada uno de los emojis.
    }
}

const genDos = countEmojis();
console.log(genDos.next().value);//feliz
console.log(genDos.next().value);//triste
console.log(genDos.next().value);//enojado
console.log(genDos.next().value);//sorprendido
console.log(genDos.next().value);//undefined

//Otro ejemplo:

async function* anotherGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('hello');

//Otro ejemplo:

function* iterable() {
    yield "hola";
    console.log("hola consola");
    yield "hola 2";
    console.log("Seguimos con mas instrucciones");
    yield "hola 3";
    yield "hola 4";
}

let iteradorDos = iterable();
console.log(iteradorDos.next());// { value: "hola", done: false }
console.log(iteradorDos.next());// hola consola { value: "hola 2", done: false }
console.log(iteradorDos.next());// Seguimos con mas instrucciones { value: "hola 3", done: false }
console.log(iteradorDos.next());// { value: "hola 4", done: false }
console.log(iteradorDos.next());// { value: undefined, done: true }

//De forma optimizada:

for(let y of iteradorDos) {
    console.log(y);
}

//Recolectar los yied en un arreglo para despues trabajarlos:

const arrDos = [...iterable()];
console.log(arrDos);//["hola", "hola 2", "hola 3", "hola 4"]

//Otro ejemplo de forma asincrona:

function cuadrado(valor) {
    setTimeout(() => {
        console.log({valor, result: valor*valor});
    }, Math.random() * 1000);
    return {
        valor,
        result: valor*valor
    }
}

function generador() {
    console.log("inicia generator");
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log("termina generador");
}

let gen = generador();

for(let y of gen) {
    console.log(y);
/*
inicia generator
{valor: 0, result: 0}
{valor: 1, result: 1}
{valor: 2, result: 4}
{valor: 3, result: 9}
{valor: 4, result: 16}
{valor: 5, result: 25}
termina generador
*/
}