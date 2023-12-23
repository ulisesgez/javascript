/*
Esta caracteristica nos va a dejar validar que la informacion este presente y que no rompa el
aplicativo y que el dia de mañana la interfaz presente lo que debe de presentar, por lo tanto,
vamos a poder validar y no romper el flujo de nuestra aplicacion.
*/

const users = {
    yo: {
        country: 'MX'
    },
    ana: {
        country: 'CO'
    }
}

console.log(users.yo.country);//MX
console.log(users.yo.age);//undefined, puede romper nuestro codigo
console.log(users.luis.country);//Error
console.log(users?.luis?.country);//undefined, validacion.
