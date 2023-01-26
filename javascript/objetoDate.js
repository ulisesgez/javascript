console.log(Date);//Imprime varios datos, entre elos la fecha, hora, region

let fecha = new Date();
console.log(fecha.getDate());//Imprime dia del mes.
console.log(fecha.getDay());//Numero del dia de la semana, domingo -> 0.
console.log(fecha.getMonth());//NUmero del mes
console.log(fecha.getFullYear());//Año actual
console.log(fecha.getHours());//Hora de 0 a 24
console.log(fecha.getMinutes());// Minutos
console.log(fecha.getSeconds());// Segundos
console.log(fecha.getMilliseconds());// Milisegundos

//Formas mas humanas:

console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getTimezoneOffset());


