/*
Abstracción:
Es el proceso de identificar las características esenciales de un objeto,
ignorando la información que no es relevante para su propósito actual,
esto con el fin de facilitar el análisis del problema y la implementación
de la solución.
Ejemplo:
*/
const animal = {
    nombre: "Snoopy",
    sonar() {
        console.log("Hago sonidos porque estoy vivo");
    }
}

console.log(animal);
console.log(animal.nombre);
animal.sonar();

//Funcion constructora:

function Animal(nombre, genero) {
    //Atributos:
    this.nombre = nombre;
    this.genero = genero;

}

//Metodo agregado al prototipo de la funcion constructora:

Animal.prototype.sonar = function() {
    console.log(`Hago sonido por que estoy vivo`);
}

//Herencia prototipica:

function Perro(nombre, genero, tamanio) {
    this.super = Animal;
    this.super(nombre, genero);
    this.tamanio = tamanio;
}

//Perro esta heredando de Animal:

Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobreescritura de metodos del prototipo padre en el hijo:

Perro.prototype.sonar = function() {
    console.log(`Soy un perro y mi sonido es un ladrido`);
}

Perro.prototype.ladrar = function() {
    console.log(`Guau guau`);
}