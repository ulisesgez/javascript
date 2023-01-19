/*
Introducidas a partir de ECMAS 6
*/

const sumarFuncion = (a, b) => a + b;
resultado = sumarFuncion(3, 5);
console.log(resultado);//8

//Otro ejemplo:

const saludar = (nombre)=>{
    let frase = `hola ${nombre} ¿como estas?`;
    document.write(frase);
}
saludar("oscar");