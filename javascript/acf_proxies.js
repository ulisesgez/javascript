/*
Es un nuevo mecanismo de js, que te permite crear un objeto basado en un objeto literal inicial.
*/

const persona = {
    nombre: "",
    apellido: "",
    edad: 0
}

const manejador = {
    set(obj, prop, valor) {
        obj[prop] = valor;
    }
}

const ulises = new Proxy(persona, manejador);
ulises.nombre = "ulises";
ulises.apellido = "gutierrez";
ulises.edad = 24;
console.log(ulises);