/*
Asincronia:
Javascript por default corre una tarea a la vez, sincronismo.
¿Comopodemos ocupar asincronismo a nuestro favor en javascript?
Javascript Engine: Motor de javascript que corre en el navegador, nos servira como intrprete
entre mi código js y la computadora.
JUs in time compiler: Proceso en el engine.
V8: Motor de Javascript de Chrome, practicamente cada navegador tiene un motor diferente.

Global Environment: Una vez que corre nuestro archivo de javascript en el engine,
antes de empezar a traducirlo, lo primero que hace en el navegador genera
un entorno global, este entorno es un objeto principal al cual se le llama WINDOW,
al generar este entorno global que hace 3 cosas, 2 de ellas muy imporatntes:

1. Global Object, este objeto es igual a WINDOW.
2. this, genera una variable que se llama THIS, this es igual a este objeto global,
this es igual a WINDOW. This es es una variable que hace referencia a window,
window == this -> true

Execution Context: Ya que genero este contexto global o este entorno global,
corre nuestro codigo a traves de un stack de tareas que las va a ir apilando de una en una.

js -> Parser -> AST(Abstract Syntax Tree) -> Interpreter -> (*) -> Bytecode
(*) -> (Profiler(Monitor) -> Compiler -> Optimized Code) -> Bytecode
(Profiler(Monitor) -> Compiler -> Optimized Code) ->  hoisting

3. Outer Environment.

Single thread (synchronous) y Multi thread: O hilos son las unidades basicas de ejecucion
de cada proceso que realiza nuestra maquina. 1 hilo o multiples hilos, javascript es de 1 hilo.

Memory heap: Donde se van a almacenar los valores de las variables y las funciones.
Basicamente se podria ver como una repisa para almacenar datos.

Call stack: Como se van a mandar a llamar los valores 
de las variables y las funciones (Global Object).
Tenemos una pila y las tareas se van a empezar a apilar de abajo hacia arriba, de
una hacia la ultima, y tenemos que sar la ultima que mandamos a llamar.
El objeto global se encuentra hasta abajo, que este es el objeto que nos da el
navegador una vez que se inicializa nuestro javascript (sincronia, 1 tarea a la vez)

Garbage collection: Una vez que ya no se esta usando el callstack, simplemente
se hace un mark y despues sweep. Tomando como ejemplo tenemos una variable
en la que le asignamos un valor y depues lo cambiamos, asi que ese valor pasado
se elimina, cuidado con el overstack.

stackoverflow: Tienes tu callstack , en donde se inicia tu lista de tareas y
empiezan a apilarse las tareas, empezamos con el objeto global que es el
primer objeto que nos genera la pagina al momento de que se inicializa
nuestro codigo js y todo el codigo que ya empieza a ejecutar, empieza a
agregarlo como tareas al callstack. Al desbordamiento de traeas del stack o pila
se le conoce como stackoverflow, al suceder esto crashamos el navegador,
ejemplo un bucle infinito.

Runtime: Se encuentra en los navegadores.

Event loop: Observador

callback queue = Bandeja de espera de tareas terminadas
*/

//Codigo sincrono bloqueante:

(() => {
    console.log("codigo sincrono");
    console.log("inicio");
    
    function dos() {
        console.log("dos");
    }
    
    function uno() {
        console.log("uno");
        dos();
        console.log("tres");
    }
    
    uno();
console.log("fin");
})();
/*
call stack - console.log("codigo sincrono");
call stack - console.log("inicio");
call stack - uno(); - se queda en la call stack
call stack - console.log("uno");
call stack - dos(); - se queda en la call stack
call stack - console.log("dos");
call stack - dos(); - sale del call stack 
call stack - console.log("tres");
call stack - uno(); - sale del call stack
call stack - console.log("fin");
*/

//Codigo asincrono no bloqueante:

(() => {
    console.log("codigo asincrono");
    console.log("inicio");
    function dos() {
        setTimeout(function() {
            console.log("dos");
        }, 1000);
    }
    function uno() {
        setTimeout(function() {
            console.log("uno");
        }, 0);
        dos();
        console.log("tres");
    }
    uno();
    console.log("fin");
})();
/*
call stack - console.log("codigo asincrono");
call stack - console.log("inicio");
call stack - uno(); - se queda en la call stack
call stack - setTimeout(function() { console.log("uno"); }, 0);
web apis - anonymous() - 0
callback queue - anonymous() - 0
call stack - dos(); - se queda en la call stack
call stack - setTimeout(function() { console.log("dos"); }, 1000);
web apis - anonymous() - 1000
call stack - dos(); - sale del call stack
callback queue - anonymous() - 1000
call stack - console.log("tres");
call stack - uno(); - sale del call stack
call stack - console.log("fin");
call stack - anonymous() - 0 - se queda en la call stack
call stack - console.log("uno");
call stack - anonymous() - 0 - sale del call stack
call stack - anonymous() - 1000 - se queda en la call stack
call stack - console.log("dos");
call stack - anonymous() - 1000 - sale del call stack
*/