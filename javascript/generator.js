/*
Nos va a permitir tener una función de tipo especial que nos va a retornar una serie de valores
según el valor dado recordando este recurso.
*/
function* iterate(array) {
    for(let value of array) {
        yield value;
    }
}

const it = iterate(['ulises', 'oscar', 'david', 'ana']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
/*
ulises
oscar
david
ana
undefined
*/
