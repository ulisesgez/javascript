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

const comparacion = (num) => {
    return num* num;
};

//Arrow function, rteturn implicito:

const comparacion = num => num * num;

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