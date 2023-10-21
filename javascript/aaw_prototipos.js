//Objeto literal y prototipos:
const natalia = {
    nombre: "Natalia",
    edad: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS"
    ],
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
};
natalia.cursosAprobados.push("Curso de Responsive Design");
console.log(natalia);//Agregamos un nuevo curso al objeto literal

natalia.edad += 1;
console.log(natalia);//Agregamos un año a la edad del objeto literal

console.log(natalia.cursosAprobados);//Imprimimos los cursos aprobados del objeto literal
natalia.aprobarCurso("Curso de JavaScript");
console.log(natalia);//Agregamos un nuevo curso al objeto literal

//Prototipos:
function Student(nombre, edad, cursosAprobados) {
    this.nombre = nombre;
    this.edad = edad;
    this.cursosAprobados = cursosAprobados;
    /*
    this.aprobarCurso = function(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
    */
}
//Agregamos un metodo al prototipo de la funcion constructora:
Student.prototype.aprobarCurso = function(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
}

//Creamos un nuevo objeto a partir de la funcion constructora:
const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de Introduccion a la Produccion de Videojuegos",
        "Curso de Programacion Basica"
    ]
);

console.log(juanita);//Imprimimos el objeto creado a partir de la funcion constructora.
juanita.aprobarCurso("Curso de Videojuegos en Unity");
console.log(juanita);//Agregamos un nuevo curso al objeto creado a partir de la funcion constructora.

//Otra forma de crear un prototipo:
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