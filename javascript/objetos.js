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
