/*
Computed Properties / Propiedades dinamicas:
Las propiedades computadas nos permiten generar llaves dinamicas en un objeto.
*/
let aleatorio = Math.round(Math.random()*100 + 4);//aleatorio entre 4 y 104
const objUsuarios = {
    propiedad: "Valor",//propiedad estatica.
    [`id_${aleatorio}`]: "Valor aleatorio"//propiedad dinamica.
}
console.log(objUsuarios);//{}
const usuarios = ["ulises", "irma", "miguel", "karla"];

usuarios.forEach((usuario, index) => objUsuarios[`ìd_${index}`] = usuario);
console.log(objUsuarios);//{ìd_0: 'ulises', ìd_1: 'irma', ìd_2: 'miguel', ìd_3: 'karla'}

//{propiedad: 'Valor', id_24: 'Valor aleatorio', ìd_0: 'ulises', ìd_1: 'irma', ìd_2: 'miguel', …}