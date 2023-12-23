/*
Finally: Nos va a permitir mostrar y tener una funcion anonima para hacer algo cuando ya termino
ya sea mostrar un mensaje o ejecutar alguna accion, segun sea nuestra necesidad en nuestro
programa.
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
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'));

//Hey!, lo logramos
//Si cambiamos a false imprimira Whooops!, no funciono