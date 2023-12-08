/*
Van a esperar a que algo se cumpla para poder seguir ejecutando el proceso.
*/

let x  = 10;

const p = new Promise((resolve, reject) => {
    if(x == 11) {
        resolve('variable igual a 10');
    } else {
        reject('variable no igual a 10');
    }
});

p
    .then(res => {
        console.log('succes:' + res);
    })
    .catch(error => {
        console.log('error: '+ error);
    })

//otro ejemplo:

async function requestHandler(req, res) {

    try {
        const user = await User.findByYd(req.userId)
        const tasks = await Task.findByYd(user.tasksId); 
        tasks.completed = true;
        await tasks.save();
        res.send('task completed')
    } catch(e) {
        res.send(e);
    }
}

//otro ejemplo:

const datos = [
    {
        id: 1,
        title: 'uno',
        year: 2021
    },
    {
        id: 2,
        title: 'dos',
        year: 2022
    },
    {
        id: 3,
        title: 'tres',
        year: 2023
    }
];

const getDatos = () => {
    return new Promise((resolve, reject) => {
        if(datos.length === 0) {
            reject(new Error('No existen datos'));
        }
        setTimeout(() => {
            resolve(datos);
        }, 1500);
    })
}

async function dataFunction() {
    try {
        const data = await getDatos();
        console.log(data);
    } catch(error) {
        console.log(error.message);//No existen datos
    }
}

/*
Actualmente puede funcionar asi:
const data = await getDatos();
console.log(data);
*/

//otro ejemplo:

/*
Transformar en promesa:

let y = 10;

console.log('1. proceso iniciando.... ');

setTimeout(() => {
    y = y * 3 + 2;
    console.log('2. proceso terminado.... ');
}, 2000);

console.log('3. el resultado es ' + y);//10
*/

let y = 10;

console.log('1. proceso iniciando.... ');
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        y = y * 3 + 2;
        console.log('2. proceso terminado.... ');
        resolve(y);
    }, 2000);
});
console.log('3. el resultado es ' + y);

promesa.then(res => {
    console.log('3. El resultado es: ' + res);//32
})

//otro ejemplo:

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

async function arrayOfNames(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names = arrayOfNames(['ulises', 'oscar', 'david']);
console.log('after');

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