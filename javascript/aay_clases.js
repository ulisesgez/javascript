/*
Clases:
Las clases de javascript, introducidas en ECMAScript 2015, son una mejora sintáctica
sobre la herencia basada en prototipos de JavaScript. La sintaxis de las clases no introduce
un nuevo modelo de herencia orientada a objetos en JavaScript. Las clases de JavaScript
proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia.

Constructor:
El constructor es un método especial que se ejecuta en el momento de instanciar la clase.
*/

// Objetos literales
const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
      "Curso Definitivo de HTML y CSS",
      "Curso Práctico de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito) {
      this.cursosAprobados.push(nuevoCursito);
    },
  };
  
  // Prototipos
  function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }
  Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
  
  const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
      "Curso de Introducción a la Producción de Videojuegos",
      "Curso de Creación de Personajes",
    ],
  );
  
  // Prototipos con la sintaxis de clases
  class Student2 {
    constructor({
      name,
      cursosAprobados = [],
      age,
      email,
    }) {
      this.name = name;
      this.email = email;
      this.age = age;
      this.cursosAprobados = cursosAprobados;
    }
  
    aprobarCurso(nuevoCursito) {
      this.cursosAprobados.push(nuevoCursito);
    }
  }
  
  const miguelito = new Student2({
    name: "Miguel",
    age: 28,
    email: "miguelito@platzi.com",
  });

  //Ventajas de las clases:

  class LearningPath {

  }
  
  const escuelaWebb = new LearningPath();
  const escuelaDataa = new LearningPath();
  const escuelaVgss = new LearningPath();
  
  class Student {
    constructor({
      name,
      email,
      username,
      twitter = undefined,
      instagram = undefined,
      facebook = undefined,
      approvedCourses = [],
      learningPaths = [],
    }) {
      this.name = name;
      this.email = email;
      this.username = username;
      this.socialMedia = {
        twitter,
        instagram,
        facebook,
      };
      this.approvedCourses = approvedCourses;
      this.learningPaths = learningPaths;
    }
  }
  
  const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
      escuelaWeb,
      escuelaVgs,
    ],
  });
  
  const miguelito2 = new Student({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
      escuelaWeb,
      escuelaData,
    ],
  });











  
//Otro ejemplo:
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
console.log(jesus.greeting);//hello

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

console.log(tesla);//Carro { modelo: 'Model S', anio: 2022 }
console.log(nissan);//Carro { modelo: 'tsuru', anio: 2017 }

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

//Otro ejemplo:

class LearningPath {
    constructor({
        id,
        name,
        courses = [],
    }) {
        this.id = id;
        this.name = name;
        this.courses = courses;
    }
    addCourse(course) {
        this.courses.push(course);
    }
    replaceCourse(oldCourse, newCourse) {
        const oldCourseIndex = this.courses.findIndex(course => course.id === oldCourse.id);
        
        if (oldCourseIndex !== -1) {
            this.courses[oldCourseIndex] = newCourse;
        }
        return this.courses;
    }
    deleteCourse(oldCourse) {
        const courseIndex = this.courses.findIndex(course => course.id === oldCourse.id);
        this.courses.splice(courseIndex, 1);
        
        return this.courses;
    }
}

const escuelaWeb = new LearningPath()
const escuelaData = new LearningPath()
const escuelaVgs = new LearningPath()

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        aprovedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.aprovedCourses = aprovedCourses;
        this.learningPaths = learningPaths;
    }
}

const carlos = new Student ({
    name: "carlos",
    username: "carlitos",
    learningPaths: [
        escuelaWeb
    ]
})