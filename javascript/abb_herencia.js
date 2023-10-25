/*
Con la mayoría de los detalles internos de OOJS (JavaScript Orientado a Objetos) explicados,
este artículo muestra cómo crear clases "hijo" (constructores) que heredan características
de sus clases "padre". Además, presentamos algunos consejos sobre cuándo y dónde puedes
usar OOJS y cómo se crean las clases con la sintaxis moderna de ECMAScript.
*/
//El constructor es un método especial que se ejecuta en el momento de instanciar la clase.
//Relacion con seccion de clases:

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
}

const tesla = new Electrico("Model S", 2022, "%80");
const nissan = new Carro("tsuru", 2017);

console.log(tesla);
console.log(nissan);

tesla.acelerar();
nissan.acelerar();

//Relacion con seccion de clases:

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
    ladrar(){
        alert("wof, wof!")
    }
}

//No podemos llamar a un objeto igual a la clase
let perro = new Perro("perro", 5, "marron", "doberman");
let gato = new Animal("gato", 6, "negro");
let pajaro = new Animal("pajaro", 7, "verde");

perro.verInfo();
perro.ladrar();
gato.verInfo();
pajaro.verInfo();
gato.ladrar();//NO es posible