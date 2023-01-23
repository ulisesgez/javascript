/*
Introducidas a partir de ECMAS 6
Es una expresion de funcion que nos va a permitir tener una
alternativa a una funcion, que normalmente las conocemos como function

Diferencias y limitaciones:

No tiene sus propios enlaces a this o super y no se debe usar como métodos.
No tiene argumentos o palabras clave new.target.
No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
No se puede utilizar como constructor.
No se puede utilizar yield dentro de su cuerpo.
*/

//Funcion normal:

function comparacion(num) {
    return num * num;
};

//Arrow function:

const comparacionUno = (num) => {
    return num* num;
};

//Arrow function, rteturn implicito:

const comparacionDos = num => num * num;

//Otro ejemplo:

const sumarFuncion = (a, b) => a + b;
resultado = sumarFuncion(3, 5);
console.log(resultado);//8

//Otro ejemplo:

const saludar = (nombre)=>{
    let frase = `hola ${nombre} ¿como estas?`;
    document.write(frase);
}
saludar("oscar");

/*
En esta sección se retomara el mismo tema pero de otra fuente:

Función expresada se genera cuando a una variable le asignas el valor de una función anonima.
Funcion anonima:
*/

const bienvenido = function() {
    console.log(`Hola, bienvenido`);
}

bienvenido();

//Arrow Function:

const adios = () => {
    console.log(`Adios, nos vemos`);
}

adios();

/*
Cuando tenemos una sola linea en la funcion, podemos omitir la llaves y dejar la funcion asi:
Mas expresivo, aqui no recibe parametros por lo que se colocan parentesis: () =>:

const adios = () => console.log(`Adios, nos vemos`);

adios();

Recibir parametros en funciones flecha, aqui podemos quitar los parentesis: () => ,
esto solo ocurre si tenemos un parametro:
*/

const miNombre = otroNombre => console.log(`Hola me llamo Ulises y tu nombre es ${otroNombre}`);
miNombre('Irma');


//Return implicito:

const multiplicar = (a, b) => a + b;
console.log(multiplicar(9, 9));//81

const funcionVariasLineas = () => {
    console.log('a');
    console.log('b');
    console.log('c');
}

funcionVariasLineas();// a b c

//Iteracion:

const numeros = [1, 2, 3, 4, 5];
numeros.forEach((element, index) => console.log(`${element} esta en la posición ${index}`));
//1 esta en la posición 0
//2 esta en la posición 1
//3 esta en la posición 2
//4 esta en la posición 3
//5 esta en la posición 4