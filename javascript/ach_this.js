/*
This en el contexto global:
This es un objeto que hace referencia al contexto de ejecucion, es decir,
al objeto que contiene el codigo que se esta ejecutando en este momento.
En el contexto global, this hace referencia al objeto global, ya sea window
en el navegador o global en nodejs.
En el contexto de una funcion, this hace referencia al objeto que contiene
la funcion, es decir, al objeto que esta ejecutando la funcion.
*/
console.log(this);//objeto window(contexto global) en javascript de los navegadores
console.log(this);//objeto global en nodejs
console.log(this === window);//true

//Crear una variable a window:

this.nombre = "Contexto global";//Al ver las propiedades en la consola nombre = "Contexto global"
console.log(this.nombre);//Contexto global

//En una funcion:
function imprimir() {
    console.log(this.nombre);
}

imprimir();//Contexto global

const obj = {
    nombre: 'Contexto objeto',
    imprimir: function() {
        console.log(this.nombre);
    }
}

obj.imprimir();//Contexto objeto, no imprime Contexto global como algunos crerian

const objDos = {
    nombre: 'Contexto objetoDos',
    imprimir//hace referencia a function imprimir() { console.log(this.nombre); }
}

objDos.imprimir();//Contexto objetoDos, no imprime Contexto global como algunos crerian ya que this hace referencia al objeto que contiene la funcion, es decir, al objeto que esta ejecutando la funcion.

//this en el contexto de una arrow function:
const objTres = {
    nombre: 'Contexto objetoTres',
    //Las arrow function no manejan su propio scope, por eso a la hora de usarla this hara referencia al contexto global:
    imprimir: () => {
        console.log(this.nombre);
    }
}

objTres.imprimir();//Contexto global

function Persona(nombre) {
    //funcion constructura que crea su propio scope:
    this.nombre = nombre;
    //return console.log(this.nombre);//ulises        1)
}

let ulises = new Persona('ulises');//ulises
