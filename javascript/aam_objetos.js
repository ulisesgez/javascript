/*
Objeto: Algo fisico al paradigma de javascript.
Acceder de distintas formas:
*/

let a = new String("Hola");
//console.log(a)
const b = {}
console.log(b);
const c = new Object();
console.log(c);//{}
//dentro de un objeto a las variables se le van a llamar atributos/propiedades y a las funciones se les llama métodos */
const jon = {
  nombre: "Jon",
  apellido: "MirCha",
  edad: 35,
  pasatiempos: ["Correr", "Hacer ejercicio", "Dar clases"],
  soltero: false,
  contacto: {
    email: "jonmircha@gmail.com",
    twitter: "@jonmircha",
    movil: "5215512345678"
  },
  saludar: function () {
    console.log(`Hola :)`)//template string
  },
  decirMiNombre: function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y me puedes seguir como ${this.contacto.twitter} en twitter.`)//template string
  }
}

console.log(jon);//{nombre: 'Jon', apellido: 'MirCha', edad: 35, pasatiempos: ['Correr', 'Hacer ejercicio', 'Dar clases'], soltero: false, …}
console.log(jon["nombre"]);//Jon
console.log(jon["apellido"]);//MirCha
console.log(jon.nombre);//Jon
console.log(jon.apellido);//MirCha
console.log(jon.edad);//35
console.log(jon.soltero);//false
console.log(jon.pasatiempos);//['Correr', 'Hacer ejercicio', 'Dar clases']
console.log(jon.pasatiempos[1]);//Hacer ejercicio
console.log(jon.contacto);//{email: 'jonmircha@gmail', twitter: '@jonmircha', movil: '5215512345678'}
console.log(jon.contacto.twitter);//@jonmircha
jon.saludar();//Hola :)
jon.decirMiNombre();//Hola me llamo Jon MirCha y tengo 35 años y me puedes seguir como @jonmircha en twitter.
console.log(Object.keys(jon));//['nombre', 'apellido', 'edad', 'pasatiempos', 'soltero', 'contacto', 'saludar', 'decirMiNombre']
console.log(Object.values(jon));//['Jon', 'MirCha', 35, ['Correr', 'Hacer ejercicio', 'Dar clases'], false, {…}, ƒ, ƒ]
console.log(jon.hasOwnProperty("nombre"));//true
console.log(jon.hasOwnProperty("nacimiento"));//false

//Otro ejemplo:

let accesoObjeto = {
  1: "1",
  "dos": 2,
  tres: 3,
  "soy cuatro": 4,
  "cinco": 5
}
let posicionUno = 1
console.log(accesoObjeto[posicionUno]);//1
console.log(accesoObjeto["dos"]);//2
console.log(accesoObjeto.tres);//3
console.log(accesoObjeto["soy cuatro"]);//4
console.log(accesoObjeto.cinco);//5
console.log(accesoObjeto.tres[accesoObjeto.tres.length - 1]);//3

//Otro ejemplo:

function buscarElementoQuimico(simbolo) {
  let simbolosQuimicos = {
    "Al": "Aluminio",
    "S": "Azufre",
    "Cl": "Cloro",
    "He": "Helio",
    "B": "Boro",
    "Li": "Litio"
  }
  return simbolosQuimicos[simbolo];
}

console.log(buscarElementoQuimico( "Al"));
console.log(buscarElementoQuimico( "S"));
console.log(buscarElementoQuimico( "B"));

// detalleAuto es un metodo de objeto
let auto = {
    marca: "toyota",
    modelo: "Corolla",
    anio: 2020,
    detalleAuto: function(){
        console.log(`Auto: ${this.modelo} ${this.anio}`);
    }
};

console.log(auto);

//Queremos algo especifico?

console.log(auto.marca);

//Entrar a el metodo, que es la funcion que esta dentro del objeto:

console.log(auto.detalleAuto());

//Crear un nuevo objeto y añadirle propiedades:

let persona = new Object();
persona.nombre = 'hugo',
persona.direccion = 'san francisco',
persona.telefono = '7711223344'

console.log(persona);//{nombre: 'hugo', direccion: 'san francisco', telefono: '7711223344'}

//otra forma:

let personaDos = {};
personaDos.nombre = 'hugo',
personaDos.direccion = 'san francisco',
personaDos.telefono = '7711223344'

console.log(persona);//{nombre: 'hugo', direccion: 'san francisco', telefono: '7711223344'}

/*
Construir objetos de JavaScript

Es posible que haya escuchado el término objectantes.
Los objetos son similares a arrays, excepto que en lugar de usar índices para acceder
y modificar sus datos, accede a los datos en los objetos a través de lo que se llama properties.
Los objetos son útiles para almacenar datos de forma estructurada y
pueden representar objetos del mundo real, como un gato.
Aquí hay un objeto gato de muestra:
*/

const cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
};

/*
En este ejemplo, todas las propiedades se almacenan como cadenas, como name,
legsy tails. Sin embargo, también puede usar números como propiedades.
Incluso puede omitir las comillas para las propiedades de cadena de una sola palabra,
de la siguiente manera:
*/

const anotherObject = {
    make: "Ford",
    5: "five",
    "model": "focus"
};

/*
Sin embargo, si su objeto tiene propiedades que no son cadenas,
JavaScript las encasillará automáticamente como cadenas.
*/

/*
Acceso a propiedades de objetos con notación de puntos:

Hay dos formas de acceder a las propiedades de un objeto: notación de puntos ( .) 
y notación de corchetes ( []), similar a una matriz.

La notación de puntos es lo que usa cuando sabe el nombre de la propiedad a la
que intenta acceder con anticipación.

Aquí hay una muestra del uso de la notación de puntos ( .) para leer la
propiedad de un objeto:
*/

const myObj = {
    prop1: "val1",
    prop2: "val2"
};
const prop1val = myObj.prop1;
const prop2val = myObj.prop2;

/*
prop1valtendría un valor de la cadena val1y prop2valtendría un valor de la cadena val2.

Acceso a propiedades de objetos con notación de corchetes:

La segunda forma de acceder a las propiedades de un objeto es la notación de corchetes ( []).
Si la propiedad del objeto al que intenta acceder tiene un espacio en su nombre,
deberá usar la notación de corchetes.
Sin embargo, aún puede usar la notación de corchetes en las propiedades
del objeto sin espacios.

Aquí hay una muestra del uso de la notación de corchetes para leer
la propiedad de un objeto:
*/

const myObjThree = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
};
  
myObjThree["Space Name"];
myObjThree['More Space'];
myObjThree["NoSpace"];

/*
myObj["Space Name"]sería la cadena Kirk, myObj['More Space']sería la cadena 
Spocky myObj["NoSpace"]sería la cadena USS Enterprise.

Tenga en cuenta que los nombres de propiedad con espacios en ellos 
deben estar entre comillas (simples o dobles).
*/

//Acceso a propiedades de objetos con variables

/*
Otro uso de la notación de corchetes en objetos es acceder a
una propiedad que se almacena como el valor de una variable.
Esto puede ser muy útil para iterar a través de las propiedades
de un objeto o al acceder a una tabla de búsqueda.

Aquí hay un ejemplo del uso de una variable para acceder a una propiedad:
*/

const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);

/*
La cadena Dobermanse mostraría en la consola.

Tenga en cuenta que no usamos comillas alrededor
del nombre de la variable cuando lo usamos para
acceder a la propiedad porque estamos usando el
valor de la variable, no el nombre .
*/

//Actualización de propiedades de objetos

/*
Una vez que haya creado un objeto de JavaScript,
puede actualizar sus propiedades en cualquier momento,
tal como actualizaría cualquier otra variable.
Puede usar la notación de puntos o corchetes para actualizar.

Por ejemplo, veamos ourDog:
*/

const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

/*
Ya que es un perro particularmente feliz,
cambiemos su nombre a la cadena Happy Camper.
Así es como actualizamos la propiedad
de nombre de su objeto:
ourDog.name = "Happy Camper";o ourDog["name"] =
"Happy Camper";Ahora, cuando evaluamos ourDog.name,
en lugar de obtener Camper, obtendremos su nuevo nombre, Happy Camper.
*/

//Agregar nuevas propiedades a un objeto de JavaScript

/*
Puede agregar nuevas propiedades a los objetos de JavaScript
existentes de la misma manera que los modificaría.

Así es como agregaríamos una barkpropiedad a ourDog:

ourDog.bark = "bow-wow";

o

ourDog["bark"] = "bow-wow";

Ahora, cuando evaluemos ourDog.bark, obtendremos su ladrido, bow-wow.
Ejemplo:
*/

const yourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

yourDog.bark = "bow-wow";

//Eliminar propiedades de un objeto de JavaScript

/*
También podemos eliminar propiedades de objetos como este:
delete ourDog.bark;
Ejemplo:
*/

const miPerro = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
};

delete miPerro.bark;

/*
Después de la última línea que se muestra arriba, ourDogse ve así:
{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
*/

/*
Uso de objetos para búsquedas
Los objetos se pueden considerar como un almacenamiento de clave/valor,
como un diccionario. Si tiene datos tabulares, puede usar un objeto
para buscar valores en lugar de una switchdeclaración o una if/elsecadena.
Esto es más útil cuando sabe que sus datos de entrada están limitados a un cierto rango.

Este es un ejemplo de un objeto de artículo:
*/

const article = {
    "title": "How to create objects in JavaScript",
    "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
    "author": "Kaashan Hussain",
    "language": "JavaScript",
    "tags": "TECHNOLOGY",
    "createdAt": "NOVEMBER 28, 2018"
};
const articleAuthor = article["author"];
const articleLink = article["link"];
  
const value = "title";
const valueLookup = article[value];

/*
articleAuthores la cadena Kaashan Hussain, articleLinkes la cadena 
https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/
y valueLookupes la cadena How to create objects in JavaScript.
*/

/*
Probar objetos para propiedades

A veces es útil verificar si la propiedad de un objeto dado existe o no.
Podemos usar el .hasOwnProperty(propname)método de objetos para determinar
si ese objeto tiene el nombre de propiedad dado. .hasOwnProperty()
devoluciones trueo falsesi la propiedad se encuentra o no.
*/

const newObj = {
  top: "hat",
  bottom: "pants"
};

newObj.hasOwnProperty("top");//true
newObj.hasOwnProperty("middle");//false

//El primero hasOwnPropertyregresa true, mientras que el segundo regresa false.

//otro ejemplo:

function verificarPropiedad(obj, propiedad) {
  if(obj.hasOwnProperty(propiedad)) {
    return "Propiedad: " + obj[propiedad];
  } else {
    return "El objeto no tiene esta propiedad";
  }
}

var miCuaderno = {
  "color": "verde",
  "categoria": 3,
  "precio": 4.56
}

console.log(verificarPropiedad(miCuaderno, "color"));//Propiedad: verde
console.log(verificarPropiedad(miCuaderno, "origen"));//El objeto no tiene esta propiedad

/*
Manipulación de objetos complejos

A veces, es posible que desee almacenar datos en una estructura de datos flexible .
Un objeto JavaScript es una forma de manejar datos flexibles.
Permiten combinaciones arbitrarias de cadenas , números ,
valores booleanos , matrices , funciones y objetos .
He aquí un ejemplo de una estructura de datos compleja:
*/

const ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];

/*
Esta es una matriz que contiene un objeto dentro.
El objeto tiene varios metadatos sobre un álbum.
También tiene una formatsmatriz anidada.
Si desea agregar más registros de álbumes,
puede hacerlo agregando registros a la matriz de nivel superior.
Los objetos contienen datos en una propiedad, que tiene un formato de clave-valor.
En el ejemplo anterior, "artist": "Daft Punk"es una propiedad
que tiene una clave de artisty un valor de Daft Punk.

Nota: Deberá colocar una coma después de cada objeto de la matriz,
a menos que sea el último objeto de la matriz.
*/

/*
Acceso a objetos anidados

Se puede acceder a las subpropiedades de los objetos encadenando la notación
de punto o corchete.
Aquí hay un objeto anidado:
*/

let myPets = {
  type: "animals",
  list: {
    dog: "golden retriever",
    cat: "persian cat",
    bird: "parakeet"
  }
}

/*
myDog = myPets.list.dog;
console.log(myDog);//golden retriever
myCat = myPets.list.cat;
console.log(myCat);//persian cat
myBird = myPets.list.bird;
console.log(myBird);//parakeet

Otra forma de acceder:
*/

myDog = myPets["list"]["dog"];
console.log(myDog);//golden retriever
myCat = myPets[1].dog;
console.log(myCat);//persian cat
myBird = myPets["list"].bird;
console.log(myBird);//parakeet

//Aquí hay otro ejemplo:

const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

console.log(ourStorage.cabinet["top drawer"].folder2);//secrets
console.log(ourStorage.desk.drawer);//stapler

/*
ourStorage.cabinet["top drawer"].folder2sería la cadena secrets,
y ourStorage.desk.drawersería la cadena stapler.

Objetos Inmutable:
*/

let colores = {
  "r": "red",
  "g": "green",
  "b": "blue"
};

Object.freeze(colores);

delete colores.r;//no es posible eliminar
colores.b = "azul"//ya no es posible modificarla

//Otra forma de crear un objeto:

const crearPersona = (nombre, edad, idioma) => ({nombre, edad, idioma});
console.log(crearPersona("ulises", 25, "Español"));

//Funciones dentro objetos:

/*
const mascota = {
  nombre: "Max",
  presentar: function() {
    return `hola mi nombre es ${this.nombre}`
  }
}

console.log(mascota.presentar());//hola mi nombre es Max
*/

const mascota = {
  nombre: "Max",
  presentar () {
    return `hola mi nombre es ${this.nombre}`
  }
}

console.log(mascota.presentar());//hola mi nombre es Max

//Acceder con metodos get y set:

let computer = {
  marca: 'hp',
  modelo: '101010',
  color:'gris',
  ram: '16gb',
  get randomAccesMemory() {
    return this.ram;
  },
  set randomAccesMemory(randomAccesMemory) {
    this.ram = randomAccesMemory;
  },
  get caracteristicas() {
    return this.marca + ', ' + this.modelo + ', ' + this.color;
  }
}

console.log(computer.caracteristicas);
console.log(computer.randomAccesMemory);
console.log(computer.randomAccesMemory = '8gb');
console.log(computer.ram);

//Funcion constructor de obetos de tipo casa:

function Casa(calle, numero, colonia, cp){
  this.calle = calle;
  this.numero = numero;
  this.colonia = colonia;
  this.cp = cp;
}

let casita = new Casa('kenedy', '35', 'palmas', '334455');
console.log(casita);//{calle: 'kenedy', numero: '35', colonia: 'palmas', cp: '334455'}

//Call y paso de parametros en call:

let mouseOne = {
  marca: 'razer',
  modelo: '21212',
  color:'black',
  caracteristicas: function(microprocesador) {//no lleva this al pasarse como parametro:
    return this.marca + ', ' + this.modelo + ', ' + this.color + microprocesador;
  }
}

let mouseTwo = {
  marca: 'logitech',
  modelo: '01010',
  color:'green',
}

console.log(mouseOne.caracteristicas('arm'));
//Ahora queremos ver las caracteristicas de mouseTwo:
console.log(mouseOne.caracteristicas.call(mouseTwo, 'arm'));

//Apply, ocurre lo mismo que en call:

let tvOne = {
  marca: 'samsung',
  modelo: '21212',
  color:'black',
  caracteristicas: function(pulgadas) {//no lleva this al pasarse como parametro:
    return this.marca + ', ' + this.modelo + ', ' + this.color + pulgadas;
  }
}

let tvTwo = {
  marca: 'lg',
  modelo: '01010',
  color:'green',
}

console.log(tvOne.caracteristicas(50));
//Ahora queremos ver las caracteristicas de tvTwo, en cuestion de parametros es diferente::
let arreglo = [40];
console.log(tvOne.caracteristicas.apply(tvTwo, arreglo));
//console.log(tvOne.caracteristicas.apply(tvTwo, [40]));//tambien se ppuede pasar asi

/*
Ojetos literales:
Nueva forma de escribir atributos y metodos
*/

//Antes:

let nombre = 'pupi',
    edad = 7;

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function () {
        console.log('wof wof!');
    }
}

console.log(perro);
perro.ladrar();

//Ahora:

const dog = {
    nombre,
    edad,
    ladrar () {
        console.log('guau guau!');
    }
}

console.log(dog);
dog.ladrar();

//En funciones (antes):

/*
function newUser(user, age, country) {
    return {
        user: user,
        age: age,
        country: country
    }
}
Ahora:
*/

function newUser(user, age, country) {
    return {
        user,
        age,
        country
    }
}

console.log(newUser("yo", 20, "MX"));// { user: 'yo', age: 20, country: 'MX' }