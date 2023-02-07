/*
Llamada de vueltas o funcion de devolucion: Es una función que se va a ejecutar después
de que la otra lo haga. Es una función que le puedes pasar a otra como argumento y
que se ejecuta despues de que se haya completado cualquier operacion o alguna
operacion pero no tiene por que ser asincrona.
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