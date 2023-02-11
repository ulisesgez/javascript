/*
Es un metodo que no necesita que la clase se defina para poder ser creado:
NOs permite proteger la data, haciendo que nuestras variables sean privadas por convención.
*/
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
        this.raza = null;
    }
    /* No se usa por eso getters y setters
    modificarRaza(){
        this.raza = "otra";
    } */
    //modificamos valor:
    set setRaza(newName){
        this.raza = newName;
    }
    //obtener valor:
    get getRaza(){
        return this.raza;
    }
}

//No podemos llamar a un objeto igual a la clase

const perro = new Perro("perro", 5, "marron", "doberman")
const gato = new Animal("gato", 6, "negro");
const pajaro = new Animal("pajaro", 7, "verde");

Perro.setRaza = "Pedro";//Pedro, buen setter
document.write(perro.getRaza);//pedro

//Otro ejemplo:

/*
setters y getters son metodos especiales que permiten establecer y obtener los valores
de atributos de nuestra clase

Son funciones a traves de las cuales
podemos leer o modificar un atributo del objeto de manera segura.
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
        this.velocidad = null;
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
    get getVelocidad() {
        return this.velocidad;
    }
    set setVelocidad(velocidad) {
        this.velocidad = velocidad;
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

console.log(tesla.getVelocidad);//null
tesla.setVelocidad = "30km/h";
console.log(tesla.getVelocidad);//30km/h