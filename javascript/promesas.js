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