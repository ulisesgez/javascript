let aleatorio = Math.round(Math.random()*100 + 4);//mas 4 para no tomar los del array
const objUsuarios = {
    propiedad: "Valor",
    [`id_${aleatorio}`]: "Valor aleatorio"
}
console.log(objUsuarios);//{}
const usuarios = ["ulises", "irma", "miguel", "karla"];

usuarios.forEach((usuario, index) => objUsuarios[`ìd_${index}`] = usuario);
console.log(objUsuarios);//{ìd_0: 'ulises', ìd_1: 'irma', ìd_2: 'miguel', ìd_3: 'karla'}

//{propiedad: 'Valor', id_24: 'Valor aleatorio', ìd_0: 'ulises', ìd_1: 'irma', ìd_2: 'miguel', …}