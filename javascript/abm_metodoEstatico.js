/* Es un metodo que no necesita que la clase se defina para poder ser creado:*/
class Animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    //metodo:
    verInfo(){
        document.write(this.info + "<br>");
    }
}

class Perro extends Animal {
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = raza;
    }
    //metodo estatico, por que no se estan usando las propiedades

    static ladrar(){
        alert("wof, wof!")
    }
}

//Relacion con seccion de clases

//No podemos llamar a un objeto igual a la clase

let gato = new Animal("gato", 6, "negro");
let pajaro = new Animal("pajaro", 7, "verde");

Perro.ladrar();//wof, wof

//Otro ejemplo, tomando otra referencia:

/*
Metodo estatico es aquel que se puede ejecutar sin necesidad de instanciar la clase.
*/

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

class Electrico extends Carro {
    constructor(modelo, anio, carga) {
        //super manda a llamar el constructor de la clase padre:
        super(modelo, anio);
        this.carga = carga;
    }

    //Sobreescritura de metodos del prototipo padre en el hijo:
    acelerar() {
        console.log("no hago sonidos");
    }
    motorUnico() {
        console.log("No hay combustion interna");
    }
    //Ejemplo de metodo estatico:
    static queSoy() {
        console.log("Los autos eléctricos son aquellos cuyo motor es capaz de convertir la energía de una batería en energía mecánica");
    }
}

//Ejecutando metodo estatico:
Electrico.queSoy();

const tesla = new Electrico("Model S", 2022, "%80");
const nissan = new Carro("tsuru", 2017);

console.log(tesla);
console.log(nissan);

tesla.acelerar();
nissan.acelerar();