/*
NUeva forma de escribir atributos y metodos
*/

//Antes:

let nombre = 'pupi',
    edad = 7;

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function () {
        console.log('wof wof!');
    }
}

console.log(perro);
perro.ladrar();

//Ahora:

const dog = {
    nombre,
    edad,
    ladrar () {
        console.log('guau guau!');
    }
}

console.log(dog);
dog.ladrar();

//En funciones (antes):

/*
function newUser(user, age, country) {
    return {
        user: user,
        age: age,
        country: country
    }
}
Ahora:
*/

function newUser(user, age, country) {
    return {
        user,
        age,
        country
    }
}

console.log(newUser("yo", 20, "MX"));// { user: 'yo', age: 20, country: 'MX' }