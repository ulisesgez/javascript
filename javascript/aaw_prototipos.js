//Función constructora:

function Animal(nombre, genero) {
    //Atributos:
    this.nombre = nombre;
    this.genero = genero;

    //Metodos:
    this.sonar = function() {
        console.log(`Hago sonido por que estoy vivo`);
    }
}

const snoopy = new Animal("snoopy", "macho");
const lolaBunny = new Animal("lola", "hembra");

console.log(snoopy);
console.log(lolaBunny);

//Funcion constructora, donde asignamos los metodos al prototipo, no a la función como tal:

function Carro(modelo, anio) {
    //Atributos:
    this.modelo = modelo;
    this.anio = anio;

}

//Metodo agregado al prototipo de la funcion constructora:

Carro.prototype.acelerar = function() {
    console.log(`run run`);
}

const tesla = new Carro("Model S", 2022);
const nissan = new Carro("tsuru", 2017);

console.log(tesla);
console.log(nissan);

tesla.acelerar();