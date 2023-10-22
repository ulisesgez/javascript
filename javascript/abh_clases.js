/*
Clases:
Las clases de javascript, introducidas en ECMAScript 2015, son una mejora sintáctica
sobre la herencia basada en prototipos de JavaScript. La sintaxis de las clases no introduce
un nuevo modelo de herencia orientada a objetos en JavaScript. Las clases de JavaScript
proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia.

Constructor:
El constructor es un método especial que se ejecuta en el momento de instanciar la clase.
*/
class TransbordadorEspacial {
    constructor(planetaDestino) {
        this.planetaDestino = planetaDestino;//Asignamos el valor del parametro
        //a la propiedad del objeto(this)
    }
}

var zeus = new TransbordadorEspacial("Jupiter");//Jupiter
console.log(zeus.planetaDestino);

var apolo = new TransbordadorEspacial("Marte");//Marte
console.log(apolo.planetaDestino);

class User {
    //metodo:
    greeting() {
        return "hello";
    }
};

const jesus = new User();
console.log(jesus.greeting);

class UserTwo {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return "hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
};

const ana = new UserTwo('Ana');
console.log(ana.greeting());//Hello Ana

//Relacion con seccion de prototipos:

class Carro {
    constructor(modelo, anio) {
        //Atributos:
        this.modelo = modelo;
        this.anio = anio;
    }
    //Metodos:
    acelerar () {
        console.log(`run run`);
    }
}


const tesla = new Carro("Model S", 2022);
const nissan = new Carro("tsuru", 2017);

console.log(tesla);
console.log(nissan);

tesla.acelerar();

//Otro ejemplo:
//Relacion con seccion de metodos

class animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
}

let perro = new animal("perro", 5, "marron");
let gato = new animal("gato", 6, "negro");
let pajaro = new animal("pajaro", 7, "verde");

document.write(perro);
document.write(perro.color);
console.log(perro);

document.write(perro.info);
document.write(gato.info);
document.write(pajaro.info);