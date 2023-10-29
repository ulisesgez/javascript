/*
Con la mayoría de los detalles internos de OOJS (JavaScript Orientado a Objetos) explicados,
este artículo muestra cómo crear clases "hijo" (constructores) que heredan características
de sus clases "padre". Además, presentamos algunos consejos sobre cuándo y dónde puedes
usar OOJS y cómo se crean las clases con la sintaxis moderna de ECMAScript.
*/
class Course {
  constructor({
    name,
    classes = [],
    isFree = false,
    lang = "spanish",
  }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }

  get name() {
    return this._name;
  }

  set name(nuevoNombrecito) {
    if (nuevoNombrecito === "Curso Malito de Programación Básica") {
      console.error("Web... no");
    } else {
      this._name = nuevoNombrecito; 
    }
  }
}

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica",
  isFree: true,
});
const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
  name: "Curso Practico de HTML y CSS",
  lang: "english",
});


class LearningPath {
  constructor({
    name,
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: [
    cursoProgBasica,
    cursoDefinitivoHTML,
    cursoPracticoHTML,
  ],
});

const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [
    cursoProgBasica,
    "Curso DataBusiness",
    "Curso Dataviz",
  ],
});

const escuelaVgs = new LearningPath({
  name: "Escuela de Vidweojuegos",
  courses: [
    cursoProgBasica,
    "Curso de Unity",
    "Curso de Unreal",
  ],
})

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
  
  class FreeStudent extends Student {
    constructor(props) {
      super(props);
    }
  
    approveCourse(newCourse) {
      if (newCourse.isFree) {
        this.approvedCourses.push(newCourse);
      } else {
        console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
      }
    }
  }
  
  class BasicStudent extends Student {
    constructor(props) {
      super(props);
    }
  
    approveCourse(newCourse) {
      if (newCourse.lang !== "english") {
        this.approvedCourses.push(newCourse);
      } else {
        console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés");
      }
    }
  }
  
  class ExpertStudent extends Student {
    constructor(props) {
      super(props);
    }
  
    approveCourse(newCourse) {
      this.approvedCourses.push(newCourse);
    }
  }
  
  
  
  const juan = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
      escuelaWeb,
      escuelaVgs,
    ],
  });
  
  const miguelito = new BasicStudent({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
      escuelaWeb,
      escuelaData,
    ],
  });

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