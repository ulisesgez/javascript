//Funcion constructora, donde asignamos los metodos al prototipo, no a la función como tal:

function Carro(modelo, anio) {
    //Atributos:
    this.modelo = modelo;
    this.anio = anio;

}

//Metodo agregado al prototipo de la funcion constructora:

Carro.prototype.sonido = function() {
    console.log(`run run`);
}

//Herencia Prototípica

function Electrico(modelo, anio, carga) {
    this.super = Carro;
    this.super(modelo, anio);
    this.carga = carga;
}

//Electrico esta heredando de carro

Electrico.prototype = new Carro();
Electrico.prototype.constructor = Electrico;

//Sobreescritura de metodos del prototipo padre en el hijo:

Electrico.prototype.sonido = function() {
    console.log("no hago sonidos");
}

Electrico.prototype.motorUnico = function() {
    console.log("No hay combustion interna");
}

const tesla = new Electrico("Model S", 2022, '%50');
const nissan = new Carro("tsuru", 2017);

console.log(tesla);
console.log(nissan);

tesla.sonido();
nissan.sonido();