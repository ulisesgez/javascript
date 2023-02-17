/*
Llamada de vueltas o funcion de devolucion: Es una función que se va a ejecutar después
de que la otra lo haga. Es una función que le puedes pasar a otra como argumento y
que se ejecuta despues de que se haya completado cualquier operacion o alguna
operacion pero no tiene por que ser asincrona.

Es una funcion que se pasa a otra funcion como argumento para su ejecucion posterior.
*/

//Ejemplo basico:

 setTimeout(() => {
    console.log('hola mundo');
 }, 1000);

//Otro ejemplo:

function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
};

console.log(calc(2, 2, sum));//4

//Otro ejemplo:

function saludo(nombre) {
    console.log(`Hola ${nombre}`);
}

setTimeout(saludo, 2000, 'ulises');//Hola ulises

//Otro ejemplo:

const getUsuarioById = (id, callback) => {
    const usuario = {
        id,
        nombre: 'ulises'
    }
    setTimeout(() => {
        callback(usuario);
    }, 1500);
}
//la funcion es el callback que recibe getUsuarioById
getUsuarioById(10, ( usuario ) => {
    console.log(usuario.id);
    console.log(usuario.nombre);
});

/*
no asincrono:

function modify(array, callback) {
    //hacemos algo ...
    array.push('midu')
    //después hacemos algo ....
    callback()
}

const names = ['gartiel', 'vedaskies', 'tomimelo']

modify(names, function() {
    console.log('he modificado el array');
})
//he modificado el array

//asincrono:
*/

function modify(array, callback) {
    //hacemos algo ...
    array.push('midu')
    //después hacemos algo ....
    setTimeout(function() {
        callback(array)
    }, 3000)//se ejecutara despues de 3 segundos, sin esto funciona igual
}

const names = ['gartiel', 'vedaskies', 'tomimelo']

modify(names, function(array) {
    console.log(`he modificado el array y ahora es de ${array.length} elementos`);
})

//he modificado el array y ahora es de 4 elementos

//Otro ejemplo, aqui no es callback:

function one() {
    console.log("step 1");
}

function two() {
    console.log("step 2");
}

one();//step 1
two();//step 2

//Ahora lo convertimos:

function one(callback) {
    console.log("step 1");
    callback();
}

function two() {
    console.log("step 2");
}

one(two);//step 1 / step 2

//Otro ejemplo:

function miFuncion(fn) {
    fn()
}

function saludar() {
    console.log("holaMundo");
}

miFuncion(saludar);//holaMundo

//Otro ejemplo:

const frutas = ['manzana', 'pera', 'sandia', 'uvas', 'fresas'];
frutas.forEach(frutas => {
    console.log(frutas);
})
/*
'manzana'
'pera'
'sandia'
'uvas'
'fresas'
*/

//Otro ejemplo:

let order = (callback) => {
    console.log("order placed, please call production");
    callback();
}

let production = () => console.log("order received, starting production");

//order placed, please call production / order received, starting production

//Otro ejemplo:
/*
let stocks = {
    fruits: ["strawberry", "grapes", "banana"],
    liquid: ["water", "ice"],
    holder: ["conde", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

console.log("start");

function order(fruitName, callback) {
    setTimeout(function() {
        console.log(`${stocks.fruits[fruitName]} was selected`);
    },2000);
    callback();
}

function production(){
    setTimeout(function() {
        console.log("production has started");
    },0);
}

console.log("end");

order(0, production);

let stocks = {
    fruits: ["strawberry", "grapes", "banana"],
    liquid: ["water", "ice"],
    holder: ["conde", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}
let order = (fruitName, callback) => {
    setTimeout(() => {
        console.log(`${stocks.fruits[fruitName]} was selected`);
    },2000);
    callback();
};

let production = () => {
    setTimeout(() => {
        console.log("production has started");
    },0000);
};

order(0, production);

//production has started
//strawberry was selected

//En este no comenzara la produccion hasta seleccionar la fruta:

let stocks = {
    fruits: ["strawberry", "grapes", "banana"],
    liquid: ["water", "ice"],
    holder: ["conde", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

console.log("start");

function order(fruitName, callback) {
    setTimeout(function() {
        console.log(`${stocks.fruits[fruitName]} was selected`);
        callback();
    },2000);
}

function production(){
    setTimeout(function() {
        console.log("production has started");
    },0);
}

console.log("end");

order(0, production);

//start
//end
//strawberry was selected
//production has started
*/

//Otro ejemplo:

function cuadradoCallback(value, callback) {
    setTimeout(() => {
        callback(value, value*value);
    }, 0 | Math.random()*100);
}

//callbackhell, mala idea para manejo de errores, mejor recurrir a las promesas.

cuadradoCallback(0, (value, result) => {
    console.log("Inicia callback");
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallback(1, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallback(2, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
            cuadradoCallback(3, (value, result) => {
                console.log(`Callback: ${value}, ${result}`);
                cuadradoCallback(4, (value, result) => {
                    console.log(`Callback: ${value}, ${result}`);
                    cuadradoCallback(5, (value, result) => {
                        console.log(`Callback: ${value}, ${result}`);
                    });
                });
            });
        });
    });
});

//callbackhell:

/*
const empleados = [
    {
        id: 1,
        nombre: 'ulises'
    },
    {
        id: 2,
        nombre: 'ruben'
    },
    {
        id: 3,
        nombre: 'laura'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    },
];

//funcion que nos permite traer la informacion de un empleado:

const getEmpleado = (id) => {
    const empleado = empleados.find(e => e.id === id);
    //validar que existe el empleado:
    if (empleado) {
        return empleado;
    } else {
        return `Empleado ${id} no existe`
    }
}

console.log(getEmpleado( 1 ));//{ id: 1, nombre: 'ulises' }
*/

const empleados = [
    {
        id: 1,
        nombre: 'ulises'
    },
    {
        id: 2,
        nombre: 'ruben'
    },
    {
        id: 3,
        nombre: 'laura'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    },
];

//funcion que nos permite traer la informacion de un empleado:

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;
    //validar que existe el empleado:
    if (empleado) {
        //El null es para el error
        callback(null, empleado.nombre);
    } else {
        callback(`Empleado ${id} no existe`)
    }
}

const getSalario = (id, callback) => {
    const salario = salarios.find(s => s.id === id)?.salario;
    //validar que existe el empleado:
    if (salario) {
        //El null es para el error
        callback(null, salario);
    } else {
        callback(`Empleado ${id} no existe`)
    }
}

const id = 1;//Aqui modificamos:

//err para que no siga la ejecucion si es que no existe el empleado con determinado id:
getEmpleado( id, (err, empleado) => {
    if(err) {
        console.log('Error!');
        return console.log(err);
    }
    console.log('Empleado existe');
    console.log(empleado.nombre);
});

getSalario( id, (err, salario) => {
    if(err) {
        return console.log(err);
    }
    console.log(salario);
});

//Peticiones a APIs usando Callbacks:
//Instalar: npm install xmlhttprequest --save

const XMLHttpRequest = require('xmlhttprequest');
const API = 'http://api.escuelajs.co/api/v1';
//valor de la url, callback o informacion que va a retornar o error:
function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    //open, abrir conexion, get tipo de peticion, url, valor de true para habilitar:
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function (event) {
        //validar tipo de estado, 4 es cuando se ha completado la llamada:
        if(xhttp.readyState === 4) {
            //validar status:
            if(xhttp.stattus === 200) {
                //nulo, transformacion de la informacion:
                callback(null, JSON.parse(xhttp.responseText));
            }
        } else {
            const error = new Error('Error ' + url_api);
            return callback(error, null);
        }
    }
    xhttp.send();
}

/*
Corregido:

const XMLHttppRequest = requiere('xmlhttprquest'); //llamado al XmlHttpRequest
const API = 'https://api.escuelajs.co/api/v1'; //API en mayúscula porque es una referencia que no va a cambiar

functionfetchData(urlApi, callback){ //urlApi: no confundir y colocar API
	let xhttp = new XMLHttppRequest(); //referencia a new XMLHttpRequest

	xhttp.open('GET', urlApi, true); //petición "obtener" con true para habilitarlo
	xhttp.onreadystatechange = function(event) { //escucha diferentes estados de la solicitud y conocer cuando está disponible la información
	if(xhttp.readyState === 4) { //si el estado ha sido completada la llamada
		if(xhttp.status === 200 ){ //el servido responde de forma correcta
			callback(null, JSON.parse(xhttp.responseText)); //dentro de xhttp.responseTex recibimos lo que entrega el servidor en texto y se hace la transformación en JSON
		}
	} else {
		const error = newError('Error' + urlApi);
		return callback(error,null); //es null porque no se está regresando ningún dato
	}
	}
	xhttp.send();
}
*/

/*
Corregido final:

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://api.escuelajs.co/api/v1";

//funcion principal que obtendrá la informacion del producto como un objeto
function fetchData(urlApi, callback) {
    //inicializar un objeto de tipo XMLHttpRequest
    let xhttp = new XMLHttpRequest();
    //El metodo .open realiza la petición de apertura de comunicación, el metodo puede ser 'GET' o 'POST', luego se envia la URL, si es asincrono (true o false), usuario y contraseña. En esta caso solo se utiliza el metodo, la url y async
    xhttp.open('GET', urlApi, true);
    //en este metodo Almacena el nombre de la función que se ejecutará cuando el objeto XMLHttpRequest cambie de estado
    xhttp.onreadystatechange = function (event) {
        //el atributo readyState define el estado del objeto XMLHttpRequest
        //0 No inicializado
        //1 Loading
        //2 ejecutado
        //3 interactuando
        //4 completado
        if (xhttp.readyState === 4) {
            //si la respuesta de la API es exitosa (200 Ok)
            if (xhttp.status === 200) {
                //se ejecuta el callback recibiendo como argumentos un objeto, como la respuesta de la API es un texto plano, el metodo JSON.parse tranformará este texto en un objeto.
                //El atributo devuelve un DOMString que contiene la  respuesta a la consulta como un texto o null si la consulta no tuvo exito o aun no ha sido completada.
                callback(null, JSON.parse(xhttp.responseText));
                //si la respuesta de la API no es exitosa se captura el error
            } else {
                //se inicializa un objeto de tipo Error donde se le envian como argumentos un mensaje de error y la URL de la API para conocer en dónde se produjo el error
                const error = new Error("Error" + urlApi);
                //se ejecuta el callback recibiendo como argumentos el error y null debido a que no se pudo obtener el objeto
                return callback(error, null);
            }
        }
    //el método .send() envia la petición al servidor
  }
  xhttp.send();
}

//se invoca el metodo fetchData() pasandole como argumentos la varible API concatenada con la cadena 'products' para acceder a la URL de la API deseada, y una función anónima que recibe 2 parámetros (un objeto de error y un arreglo que almacena todos los objetos traidos por la API).
fetchData(`${API}/products`, function (error1, data1) {
    //se valida si existe un error, en caso de que exista se detiene el proceso y se imprime el error
    if (error1) return console.error(error1);
    //se invoca nuevamente la función fetchData con el fin de acceder a un objeto puntual del arreglo data1, se envia como parámetros la url de la API apuntando al atributo del primer objeto de arreglo data1 y nuevamente una función anónima.
    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
        //si en este punto se identifica un error se imprime en consola y se detiene el proceso
        if (error2) return console.error(error2);
        //Se invoca nuevamente la funcion fetchData con el fin de acceder a la categoria, se envían como parametros la url de la API con la concatenación de 'Categories' y el atributo Id de categoria del objeto data2 de la función anterior
        //en este caso puntual se hace uso de Optional Caining el cual hace una evalucación de las propiedades de un objeto y en vez de arrojar un error devuelve undefined en caso que la propiedad no exista o sea null.
        //igual que las anteriores e envia una funcion anonima con 2 argumentos, un objeto Error y un objeto de datos
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
            //se valida si existe error, en caso de que exista se detiene el proceso y se imprime el error
            if (error3) return console.error(error3);
            //Se imprime el objeto en la posición 1 del arreglo de los objetos obtenidos en el metodo invocado inicialmente
            console.log(data1[0]);
            //Se imprime el titulo del objeto que se consultó en la seguna invocación de la función
            console.log(data2.title);
            //Se imprime el nombre de la categoria a la que pertenece el objeto que se consultó en la seguna invocación del método.
            console.log(data3.name);
        });
  });
});
*/