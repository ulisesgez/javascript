/*
Una Promise (promesa en castellano) es un objeto que representa la terminación o el
fracaso de una operación asíncrona. Dado que la mayoría de las personas consumen promises
ya creadas, esta guía explicará primero cómo consumirlas, y luego cómo crearlas.

Esencialmente, una promesa es un objeto devuelto al cual se adjuntan funciones callback,
en lugar de pasar callbacks a una función.
*/

const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Hey!, lo logramos');
        } else {
            reject('Whooops!, no funciono');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));

//Hey!, lo logramos
//Si cambiamos a false imprimira Whooops!, no funciono

//otro ejemplo:

function cuadradoPromise(value) {
    if(typeof value !== "number") {
        return Promise.reject(`Èrror, el valor ${value} no es un numero`);
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            });
        }, 0 | Math.random()*100);
    });
}

cuadradoPromise(0)
.then(obj => {
    console.log("Inicio promise");
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(1);
})
.then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(2);
})
.then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(3);
})
.then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise("4");//Pasa a el catch
})
.then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(5);
})
.then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    console.log("Fin promise");
})
.catch(err => console.error("err"));