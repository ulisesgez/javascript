/*
Proxies:
Un proxy es un objeto que envuelve a otro y le permite interceptar operaciones
como la lectura de propiedades, antes de que se lleven a cabo.
Es un nuevo mecanismo de js, que te permite crear un
objeto basado en un objeto literal inicial.
*/

const persona = {
    nombre: "",
    apellido: "",
    edad: 0
}

//handler o manejador(similar al event loop),  que tambien debe ser un objeto:

const manejador = {
    //objeto, cada una de las propiedades, valor que va arecibir cada una de las propiedades.
    //set va a estar haciendo las validaciones que necesitemos para que no modifique la
    //estrucutra del objeto de la cop8ia de lacula se esta basando
    set(obj, prop, valor) {
        //Validando que no exiista, como por ejemplo twitter:
        if(Object.keys(obj).indexOf(prop)===-1) {
            return console.error(`la propiedad ${prop} no existe en el objeto persona`);
        }
        //Al objeto en cuestion, en cada una de las propiedades que aqui estoy modificando
        //en cada una de las lineas de codigo le voy a asignar el valor que me esta dando el
        //usuario en el proxy:
        obj[prop] = valor;
    }
}

const ulises = new Proxy(persona, manejador);
console.log(ulises);//Proxy
ulises.nombre = "ulises";
ulises.apellido = "gutierrez";
ulises.edad = 24;
//Validemos twitter, hay que validarlo en el manejador si no la propiedad twitter
//aparecera en nuestro objeto y en nuestro proxy:
ulises.twitter = "@techwithulises"
console.log(ulises);//{ nombre: "", apellido: "", edad: 0 }