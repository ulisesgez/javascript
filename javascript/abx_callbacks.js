/*
Llamada de vueltas o funcion de devolucion: Es una función que se va a ejecutar después
de que la otra lo haga. Es una función que le puedes pasar a otra como argumento y
que se ejecuta despues de que se haya completado cualquier operacion o alguna
operacion pero no tiene por que ser asincrona.

Es una funcion que se pasa a otra funcion como argumento para su ejecucion posterior.
*/
/*
no asincrono:

function modify(array, callback) {
    //hacemos algo ...
    array.push('midu')
    //después hacemos algo ....
    callback()
}

const names = ['gartiel', 'vedaskies', 'tomimelo']

modify(names, function() {
    console.log('he modificado el array');
})
//he modificado el array

//asincrono:
*/

function modify(array, callback) {
    //hacemos algo ...
    array.push('midu')
    //después hacemos algo ....
    setTimeout(function() {
        callback(array)
    }, 3000)//se ejecutara despues de 3 segundos, sin esto funciona igual
}

const names = ['gartiel', 'vedaskies', 'tomimelo']

modify(names, function(array) {
    console.log(`he modificado el array y ahora es de ${array.length} elementos`);
})

//he modificado el array y ahora es de 4 elementos

//Otro ejemplo, aqui no es callback:

function one() {
    console.log("step 1");
}

function two() {
    console.log("step 2");
}

one();//step 1
two();//step 2

//Ahora lo convertimos:

function one(callback) {
    console.log("step 1");
    callback();
}

function two() {
    console.log("step 2");
}

one(two);//step 1 / step 2

//Otro ejemplo:

function miFuncion(fn) {
    fn()
}

function saludar() {
    console.log("holaMundo");
}

miFuncion(saludar);//holaMundo

//Otro ejemplo:

const frutas = ['manzana', 'pera', 'sandia', 'uvas', 'fresas'];
frutas.forEach(frutas => {
    console.log(frutas);
})
/*
'manzana'
'pera'
'sandia'
'uvas'
'fresas'
*/

//Otro ejemplo:

let order = (callback) => {
    console.log("order placed, please call production");
    callback();
}

let production = () => console.log("order received, starting production");

//order placed, please call production / order received, starting production

//Otro ejemplo:
/*
let stocks = {
    fruits: ["strawberry", "grapes", "banana"],
    liquid: ["water", "ice"],
    holder: ["conde", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

console.log("start");

function order(fruitName, callback) {
    setTimeout(function() {
        console.log(`${stocks.fruits[fruitName]} was selected`);
    },2000);
    callback();
}

function production(){
    setTimeout(function() {
        console.log("production has started");
    },0);
}

console.log("end");

order(0, production);

let stocks = {
    fruits: ["strawberry", "grapes", "banana"],
    liquid: ["water", "ice"],
    holder: ["conde", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}
let order = (fruitName, callback) => {
    setTimeout(() => {
        console.log(`${stocks.fruits[fruitName]} was selected`);
    },2000);
    callback();
};

let production = () => {
    setTimeout(() => {
        console.log("production has started");
    },0000);
};

order(0, production);

//production has started
//strawberry was selected

//En este no comenzara la produccion hasta seleccionar la fruta:

let stocks = {
    fruits: ["strawberry", "grapes", "banana"],
    liquid: ["water", "ice"],
    holder: ["conde", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

console.log("start");

function order(fruitName, callback) {
    setTimeout(function() {
        console.log(`${stocks.fruits[fruitName]} was selected`);
        callback();
    },2000);
}

function production(){
    setTimeout(function() {
        console.log("production has started");
    },0);
}

console.log("end");

order(0, production);

//start
//end
//strawberry was selected
//production has started
*/

//Otro ejemplo:

function cuadradoCallback(value, callback) {
    setTimeout(() => {
        callback(value, value*value);
    }, 0 | Math.random()*100);
}

//callbackhell, mala idea para manejo de errores, mejor recurrir a las promesas.

cuadradoCallback(0, (value, result) => {
    console.log("Inicia callback");
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallback(1, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallback(2, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
            cuadradoCallback(3, (value, result) => {
                console.log(`Callback: ${value}, ${result}`);
                cuadradoCallback(4, (value, result) => {
                    console.log(`Callback: ${value}, ${result}`);
                    cuadradoCallback(5, (value, result) => {
                        console.log(`Callback: ${value}, ${result}`);
                    });
                });
            });
        });
    });
});