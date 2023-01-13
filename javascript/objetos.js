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

/*
Objeto: Algo fisico al paradigma de javascript
 */
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
