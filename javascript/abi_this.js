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

//Ejemplo siguiendo la programacion orientada a objetos:
//funcion constructura que crea su propio scope:
function Persona(nombre) {
    this.nombre = nombre;
    //return console.log(this.nombre);//ulises --> caso 1
    //La siguiente funcion no funciona ya que this hace referencia al objeto global, es decir, window en el navegador o global en nodejs
    //La siguiente funcion no tiene una propiedad nombre.
    /*
    return function() {
        console.log(this.nombre);
    } --> caso 2
    */
   return () => console.log(this.nombre);//ulises --> caso 3, recuerda las arrow function no manejan su propio scope.
}

//let ulises = new Persona('ulises');//ulises --> caso 1
//ulises();//Contexto global, ya que this hace referencia al objeto global, es decir, window en el navegador o global en nodejs  --> caso 2
ulises();//ulises --> caso 3, recuerda las arrow function no manejan su propio scope.

/*
Call, Apply y Bind:
Call y Apply son metodos que nos permiten invocar una funcion y establecer el valor
de this, el primer parametro de call y apply es el valor que queremos que tenga this
cuando se ejecute la funcion, la diferencia entre call y apply es que call recibe los
parametros de la funcion de forma separada y apply los recibe en un arreglo.

Bind es un metodo que nos permite crear funciones enlazadas a un contexto en particular,
en otras palabras, bind nos permite crear funciones que cuando sean invocadas tendran
el valor de this establecido como nosotros queramos.

Son metodos que nos permiten conservar la referencia de un scope en particular y utilizarlo
por ejemplo en alguna invocacion o en algun codigo para eso nos sirve call apply y bind.
*/

console.log(this);//objeto window(contexto global) en javascript de los navegadores
console.log(this);//objeto global en nodejs
console.log(this === window);//true

this.lugar = "Contexto Global"

function saludar() {
    console.log(`${this.lugar}`);
}

function depedir(despedida, aQuien) {
    console.log(`${despedida} ${aQuien} desde el ${this.lugar}`);
}

saludar();//Contexto Global
depedir("bye", "ulises");//bye ulises desde el Contexto Objeto

const objCuatro = {
    lugar:"Contexto Objeto"
}

saludar.call(objCuatro);//En lugar de imprimir Contexto Global, imprime Contexto Objeto
saludar.apply(objCuatro);//En lugar de imprimir Contexto Global, imprime Contexto Objeto

depedir.call(objCuatro, "adios", "ulises");//adios ulises desde el Contexto Objeto
depedir.call(null, "adios", "ulises");//adios ulises desde el Contexto Global
depedir.call(this, "adios", "ulises");//adios ulises desde el Contexto Global
depedir.apply(objCuatro, ["nos vemos", "ulises"]);//nos vemos ulises desde el Contexto Objeto
depedir.apply(null, ["nos vemos", "ulises"]);//nos vemos ulises desde el Contexto Global
depedir.apply(this, ["nos vemos", "ulises"]);//nos vemos ulises desde el Contexto Global

//Ahora con bind:

const persona = {
    nombre: 'ulises',
    saludar: function() {
        console.log(`HOLA ${this.nombre}`);
    }
}

persona.saludar();//HOLA ulises

/*
const persona = {
    nombre: 'ulises',
    saludar: ()=>{
        console.log(`HOLA ${this.nombre}`);
    }
}

persona.saludar();//HOLA undefined
*/
const otraPersona = {
  //saludar: persona.saludar//HOLA undefined
  saludar: persona.saludar.bind(persona)//HOLA ulises
}

otraPersona.saludar();

this.nombre = 'window';

const otraPersonaMas = {
  saludar: persona.saludar.bind(this)//HOLA window
}

otraPersonaMas.saludar();

//Otro ejemplo con Call y paso de parametros:

let mouseOne = {
    marca: 'razer',
    modelo: '21212',
    color:'black',
    caracteristicas: function(microprocesador) {//no lleva this al pasarse como parametro:
      return this.marca + ', ' + this.modelo + ', ' + this.color + microprocesador;
    }
  }
  
  let mouseTwo = {
    marca: 'logitech',
    modelo: '01010',
    color:'green',
  }
  
  console.log(mouseOne.caracteristicas('arm'));
  //Ahora queremos ver las caracteristicas de mouseTwo:
  console.log(mouseOne.caracteristicas.call(mouseTwo, 'arm'));
  
  //Apply, ocurre lo mismo que en call:
  
  let tvOne = {
    marca: 'samsung',
    modelo: '21212',
    color:'black',
    caracteristicas: function(pulgadas) {//no lleva this al pasarse como parametro:
      return this.marca + ', ' + this.modelo + ', ' + this.color + pulgadas;
    }
  }
  
  let tvTwo = {
    marca: 'lg',
    modelo: '01010',
    color:'green',
  }
  
  console.log(tvOne.caracteristicas(50));
  //Ahora queremos ver las caracteristicas de tvTwo, en cuestion de parametros es diferente::
  let arreglo = [40];
  console.log(tvOne.caracteristicas.apply(tvTwo, arreglo));
  //console.log(tvOne.caracteristicas.apply(tvTwo, [40]));//tambien se ppuede pasar asi