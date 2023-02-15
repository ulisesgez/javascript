/*
Metodos que nos permiten conservar la referencia de un scope en particular y utilizarlo
por ejemplo en alguna invocacion o en algun codigo para eso nos sirve call apply y bind.
*/

console.log(this);//objeto window(contexto global) en javascript de los navegadores
console.log(this);//objeto global en nodejs
console.log(this === window);//true

this.lugar = "Contexto Global"

function saludar() {
    console.log(`${this.lugar}`);
}

function depedir(despedida, aQuien) {
    console.log(`${despedida} ${aQuien} desde el ${this.lugar}`);
}

saludar();//Contexto Global
depedir("bye", "ulises");//bye ulises desde el Contexto Objeto

const obj = {
    lugar:"Contexto Objeto"
}

saludar.call(obj);//En lugar de imprimir Contexto Global, imprime Contexto Objeto
saludar.apply(obj);//En lugar de imprimir Contexto Global, imprime Contexto Objeto

depedir.call(obj, "adios", "ulises");//adios ulises desde el Contexto Objeto
depedir.call(null, "adios", "ulises");//adios ulises desde el Contexto Global
depedir.call(this, "adios", "ulises");//adios ulises desde el Contexto Global
depedir.apply(obj, ["nos vemos", "ulises"]);//nos vemos ulises desde el Contexto Objeto

//Ahora con bind:

const persona = {
    nombre: 'ulises',
    saludar: function() {
        console.log(`HOLA ${this.nombre}`);
    }
}

persona.saludar();//HOLA ulises

/*
const otraPersona = {
    //Referencia de la propiedad saludar
    saludar: persona.saludar
}

otraPersona.saludar();//HOLA undefined, por que no tiene propiedad nombre.

Ahora de esta forma:

const otraPersona = {
    //Enlaza el contexto de persona:
    saludar: persona.saludar.bind(persona)
}

otraPersona.saludar();//HOLA ulises
*/
this.nombre = "window";

const otraPersona = {
    //Enlaza el contexto de persona:
    saludar: persona.saludar.bind(this)
}

otraPersona.saludar();//HOLA window


//Otro ejemplo con Call y paso de parametros:

let mouseOne = {
    marca: 'razer',
    modelo: '21212',
    color:'black',
    caracteristicas: function(microprocesador) {//no lleva this al pasarse como parametro:
      return this.marca + ', ' + this.modelo + ', ' + this.color + microprocesador;
    }
  }
  
  let mouseTwo = {
    marca: 'logitech',
    modelo: '01010',
    color:'green',
  }
  
  console.log(mouseOne.caracteristicas('arm'));
  //Ahora queremos ver las caracteristicas de mouseTwo:
  console.log(mouseOne.caracteristicas.call(mouseTwo, 'arm'));
  
  //Apply, ocurre lo mismo que en call:
  
  let tvOne = {
    marca: 'samsung',
    modelo: '21212',
    color:'black',
    caracteristicas: function(pulgadas) {//no lleva this al pasarse como parametro:
      return this.marca + ', ' + this.modelo + ', ' + this.color + pulgadas;
    }
  }
  
  let tvTwo = {
    marca: 'lg',
    modelo: '01010',
    color:'green',
  }
  
  console.log(tvOne.caracteristicas(50));
  //Ahora queremos ver las caracteristicas de tvTwo, en cuestion de parametros es diferente::
  let arreglo = [40];
  console.log(tvOne.caracteristicas.apply(tvTwo, arreglo));
  //console.log(tvOne.caracteristicas.apply(tvTwo, [40]));//tambien se ppuede pasar asi