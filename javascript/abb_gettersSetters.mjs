/*
Es un metodo que no necesita que la clase se defina para poder ser creado:
Nos permite proteger la data, haciendo que nuestras variables sean privadas por convención.
Get leer la informacion del atributo y set para modificarlo. El metodo get no se puede llamar igual
que nuestra propiedad, asi que en muchas ocasiones se acostumbra que en las propiedades
utilicemos un guion bajo antes del nombre de la propiedad.
*/
class Persona{
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
}

let personaUno = new Persona('juan', 'perez');
console.log(personaUno.nombre);//juan, get
personaUno.nombre = "carlos"//set
console.log(personaUno.nombre);//carlos, get

//Otro ejemplo:

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

//Otro ejemplo, el guion bajo solo es un identificador que el valor no sera modificado:

class Libro {
    constructor(autor) {
        this._autor = autor
    }
    get autor() {
        console.log("se llama el getter");
        return this._autor;
    }
    set autor(nuevoAutor) {
        console.log("se llama el setter");
        this._autor = nuevoAutor;
    }
}

const libro = new Libro("anonimo");
console.log(libro.autor);//anonimo

libro.autor = "gino smith";
console.log(libro.autor);//gino smith

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

//Otro ejemplo:

function videoPlay(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se está reproduciendo desde la url " + urlSecreta);
  }
  function videoStop(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Pausamos la url " + urlSecreta);
  }
  
  export class PlatziClass {
    constructor({
      name,
      videoID,
    }) {
      this.name = name;
      this.videoID = videoID;
    }
  
    reproducir() {
      videoPlay(this.videoID);
    }
    pausar() {
      videoStop(this.videoID);
    }
  }
  


  class Course {
    constructor({
      name,
      classes = [],
    }) {
      this._name = name;
      this.classes = classes;
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
  });
  
  const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
  });
  const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
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