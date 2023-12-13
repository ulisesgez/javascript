/*
Atributos y metodos estaticos:
Los atributos y metodos estaticos son aquellos que no necesitan una instancia
de la clase para ser accedidos.
Para crear un atributo estatico se utiliza la palabra reservada static
seguida del nombre del atributo.
*/
class duck {
    static sound = "quack";
    static quack() {
        console.log(this.sound);
    }
}
console.log(duck.sound); // quack
duck.quack(); // quack

//Métodos estáticos del prototipo Object:
const juan = {
    name: "Juan",
    age: 20,
    approvedCourses: ["Course 1"],
    addCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
};
/*
Asi era como accediamos a la imformacion de un objeto:
juan.addCourse("Course 2");
Ahora vereos como acceder a la informacion de un objeto con metodos estaticos:
*/
Object.keys(juan); // ["name", "age", "approvedCourses", "addCourse"]
Object.getOwnPropertyNames(juan); // ["name", "age", "approvedCourses", "addCourse"]
Object.entries(juan); // [["name", "Juan"], ["age", 20], ["approvedCourses", Array(2)], ["addCourse", ƒ]]
//para verlo:
console.log(Object.entries(juan));//[["name", "Juan"], ["age", 20], ["approvedCourses", Array(2)], ["addCourse", ƒ]]

/*
Metodos estaticos:
Se va a asociar con nuestra clase y no con los objetos que se creen de esta clase,
sin embargo a un metodo estatico si le podemos pasar como argumentos un objeto.
Es un metodo que no necesita que la clase se defina para poder ser creado:
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