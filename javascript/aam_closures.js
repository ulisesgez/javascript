/*
Closure:
Los closures en JavaScript son una característica fundamental del lenguaje que
permite a las funciones recordar el estado de su entorno de ejecución, incluso
después de que la función haya sido invocada. Esto permite a las funciones
mantener un estado privado y protegido de variables y funciones internas,
lo que proporciona una mayor flexibilidad y seguridad en el código.

Un closure se crea cuando una función es declarada dentro de otra función.
La función interna tiene acceso al ámbito de la función externa, lo que significa
que puede acceder a las variables y funciones declaradas dentro de la función externa.
Además, un closure también tiene acceso a las variables y funciones globales.

Cuando una funcion cualquiera accede a una variable fuera de su contexto.
Permiten acceder al ambito de una funcion exterior desde una funcion interior.
En javascript, las clausuras se crean cada vez que una funcion es creada.
*/

const myGlobal = 0;

function myFunction() {
  const myNumber =  1;
  console.log(myGlobal);//0
  function parent() {//funcion interna, closure
    const inner = 2;
    console.log(myNumber, myGlobal);//1 0
    function child() {
      console.log(inner, myNumber, myGlobal);//2 1 0
    }
    return child();//llamamos a la funcion interna
  }
  return parent();//llamamos a la funcion interna
}

myFunction();
/*
0
1 0
2 1 0
*/

//Otro ejemplo:

function saludar() {
  let userName = 'Oscar'
  
  function displayUserName() {
    return `hello ${userName}`;
  }
  return displayUserName;
}

const g = saludar();
console.log(g);
console.log(g());

/*
ƒ displayUserName() {
    return `hello ${userName}`;
  }
VM54:12 hello Oscar

Otro ejemplo:
No funciona la alcancia:
function moneybox(coins) {
  let saveCoins = 0;
  saveCoins += coins;
  console.log(`money box: $ ${saveCoins}`);
}

moneybox(5);
moneybox(10);
*/

function moneybox(coins) {
  let saveCoins = 0;
  
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`money box: $ ${saveCoins}`);//money box: $ 5 | money box: $ 15
  }
  return countCoins;//retornamos la funcion interna
}

const myMoneybox = moneybox();
myMoneybox(5);//money box: $ 5
myMoneybox(10);//money box: $ 15
myMoneybox(20);//money box: $ 35

const moneyboxAna = moneybox();
moneyboxAna(300);//money box: $ 300
moneyboxAna(10);//money box: $ 10
moneyboxAna(25);//money box: $ 25