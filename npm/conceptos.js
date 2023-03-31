/*
NPM:
Es el acrónimo de Node Package Manager. Es un sistema de gestión de paquetes (o “módulos”)
para el lenguaje de programación JavaScript, especialmente diseñado para ser utilizado con el
entorno de ejecución JavaScript Node.js. Sirve para facilitar la instalación, actualización y
eliminación de librerías y herramientas de código abierto que son útiles para desarrollar
aplicaciones JavaScript. Además, permite a los desarrolladores compartir y reutilizar código,
ahorrando tiempo y esfuerzo en el desarrollo de sus proyectos.

Un sistema de gestión de paquetes es una herramienta informática que se encarga de automatizar
el proceso de instalación, actualización y eliminación de programas o librerías en un sistema
operativo. Estos paquetes suelen contener código fuente o ejecutable, así como documentación
y otros recursos necesarios para su funcionamiento. Los sistemas de gestión de paquetes
permiten a los desarrolladores y administradores de sistemas instalar, actualizar y desinstalar
fácilmente software en sus sistemas, ahorrando tiempo y esfuerzo, y asegurando la
compatibilidad entre las diferentes dependencias de los paquetes.

Inicializar proyecto npm:
npm init

o bien:
npm init -y

“name”: “npm-init” —> Podemos ponerle un nombre sin embargo toma por defecto el de la carpeta.
“version”: “1.0.0” —> Podemos cambiar segun el caso, dependiendo un cambio mayor o uno menor
“description”:"" —> Podemos hacer una breve descripcion del proyecto.
“entry point”: “(index.js)” —> Punto de entrada del proyecto.
“test command”: —> Podemos incluir los comandos para validar nuestro codigo.
“git repository”: —> Podemos incluir el repositorio para mantenerlo en la nube
“keywords”: [“javascript”, “angular”, “node”] —> Que va a utilizar nuestro proyecto.
“author”: "Alexa Pulido<pulidoaleXXXXXXX> —> Persona que crea el proyecto
“license”: “MIT” —> Licencias, la mas utilizada es MIT, permite distribuir nuestro codigo.

resultado, un archivo package.json:

{
  "name": "npm",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

Dependencias:

Las dependencias de desarrollo son aquellos paquetes que necesitamos en un proyecto mientras
estamos desarrollándolo, pero una vez tenemos el código generado del proyecto, no vuelven a
hacer falta. Los paquetes instalados con el flag --save-dev o -D se instalan en esta modalidad,
guardándolos en la sección devDependences del fichero package.json.

Por otro lado, las dependencias de producción son aquellos paquetes que necesitamos tener en la
web final generada, como librerías Javascript necesarias para su funcionamiento o paquetes
similares. Los paquetes instalados con el flag --save-prod, -P o directamente sin ningún flag
se instalan en esta modalidad, guardándolos en la sección dependences del fichero package.json.
.
Veamos un ejemplo de instalación con ambos tipos de paquetes:

# Instala en modalidad de desarrollo el paquete "gh-pages"
$ npm install --save-dev gh-pages

+ gh-pages@3.1.0
added 50 packages from 12 contributors and audited 92 packages in 1.998s

# Instala en modalidad de producción la librería "Howler"
$ npm install howler

+ howler@2.2.0
added 1 package from 1 contributor and audited 93 packages in 1.615s

En el primer caso estamos instalando el paquete gh-pages, una librería y comando CLI para 
desplegar fácilmente un proyecto en GitHub Pages. Como se trata de un paquete que no es 
necesario incluir en la web final (se utiliza en desarrollo para desplegar), pues lo instalamos 
con los flags --save-dev o -D.

En el segundo caso, estamos instalando el paquete Howler, una librería Javascript que permite 
manipular y gestionar archivos multimedia de audio desde el navegador. En este caso se trata 
de una librería JS que si estará incluida en la versión definitiva de la página, por lo que 
la instalaremos con el flag --save-prod, -P o sin indicar ninguno, ya que es la opción por 
defecto.

Instalar Dependencias:

npm install moment
npm install eslint --save-dev —> dependencia que solo va a ser utilizada en el entorno de desarollo
npm install react --save —> dependencia para ser llevada a produccion.

Paquetes Globales
npm install -g
Ver lista de los paquetes
npm list

Ver lista de paquetes globlales
npm list -g
*/