//Objeto, pares clave y valor:
const user = {
    "name": "ulises",
    "lastname": "gutierrez",
    slaudar() {
        return 'hello'//Las funciones no se añaden al JSON
    }
}
//objeto no valido de JSON, solo usable en nuestro sistema:
console.log(user);

//Convertir objeto a json, es posible usarlo en otro sistema por la conversion:
console.log(JSON.stringify(user));