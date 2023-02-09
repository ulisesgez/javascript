/*
Van a esperar a que algo se cumpla para poder seguir ejecutando el proceso.
*/

const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve("async"), 2000)
        : reject(new Error('error!'));
    });
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('hello');
}

console.log('before');
anotherFn();
console.log('after');

/*
before
after
async!!
hello!
*/

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
/*
async function funcionAsincronaDeclarada() {
    try {
        console.log("Inicio");
        let obj = await cuadradoPromise(0);
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(1);
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(2);
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(3);
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(4);
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(5);
        console.log(`Promise: ${obj.value}, ${obj.result}`);
    }
    catch(err) {
        console.error(err);
    }
}

funcionAsincronaDeclarada();
*/

const funcionAsincronaExpresada = async () => {
    try {
        console.log("Inicio");
        let obj = await cuadradoPromise(6);
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(7);
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(8);
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise("9");//error
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(10);
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(11);
        console.log(`Promise: ${obj.value}, ${obj.result}`);
    }
    catch(err) {
        console.error(err);
    }
}
funcionAsincronaExpresada();