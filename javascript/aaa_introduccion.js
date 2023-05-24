/*
¿Qué es JavaScript?
JavaScript se introdujo en 1995 como una forma de agregar programas a páginas web en el
navegador Netscape Navigator. El lenguaje ha sido desde entonces adoptado por todos los otros
navegadores web principales. Ha hecho que las aplicaciones web modernas sean posibles:
aplicaciones con las que puedes interactuar directamente, sin hacer una recarga de página
para cada acción. JavaScript también es utilizado en sitios web más tradicionales para
proporcionar diversas formas de interactividad e ingenio. Es importante tener en cuenta que
JavaScript casi no tiene nada que ver con el lenguaje de programación llamado Java.
El nombre similar fue inspirado por consideraciones de marketing, en lugar de buen juicio.
Cuando JavaScript estaba siendo introducido, el lenguaje Java estaba siendo fuertemente
comercializado y estaba ganando popularidad. Alguien pensó que era una buena idea intentar
cabalgar sobre este éxito. Ahora estamos atrapados con el nombre.
Después de su adopción fuera de Netscape, un documento estándar fue escrito para describir
la forma en que debería funcionar el lenguaje JavaScript, para que las diversas piezas de
software que decían ser compatibles con JavaScript en realidad estuvieran hablando del mismo
lenguaje. Este se llamo el Estándar ECMAScript, por Ecma International que hizo la
estandarización. En la práctica, los términos ECMAScript y JavaScript se puede usar
indistintamente, son dos nombres para el mismo lenguaje.
Hay quienes dirán cosas terribles sobre JavaScript. Muchas de estas cosas son verdaderas.
Cuando estaba comenzando a escribir algo en JavaScript por primera vez, rápidamente comencé
a despreciarlo. El lenguaje aceptaba casi cualquier cosa que escribiera, pero la interpretaba
de una manera que era completamente diferente de lo que quería decir. Por supuesto, esto
tenía mucho que ver con el hecho de que no tenía idea de lo que estaba haciendo, pero hay
un problema real aquí: JavaScript es ridículamente liberal en lo que permite.
La idea detrás de este diseño era que haría a la programación en JavaScript más fácil para
los principiantes. En realidad, lo que mas hace es que encontrar problemas en tus programas
sea más difícil porque el sistema no los señalará por ti.
Sin embargo, esta flexibilidad también tiene sus ventajas. Deja espacio para muchas técnicas
que son imposibles en idiomas más rígidos, y como verás (por ejemplo en el Capítulo 10) se
pueden usar para superar algunas de las deficiencias de JavaScript. Después de aprender el
idioma correctamente y luego de trabajar con él por un tiempo, he aprendido a querer a JavaScript.
Ha habido varias versiones de JavaScript. ECMAScript versión 3 fue la versión mas ampliamente
compatible en el momento del ascenso de JavaScript a su dominio, aproximadamente entre 2000
y 2010. Durante este tiempo, se trabajó en marcha hacia una ambiciosa versión 4, que planeaba
una serie de radicales mejoras y extensiones al lenguaje. Cambiar un lenguaje vivo y
ampliamente utilizado de una manera tan radical resultó ser políticamente difícil y el
trabajo en la versión 4 fue abandonado en 2008, lo que llevó a la versión 5, mucho menos
ambiciosa, que se publicaría en el 2009. Luego, en 2015, una actualización importante,
incluyendo algunas de las ideas planificadas para la versión 4, fue realizada.
Desde entonces hemos tenido actualizaciones nuevas y pequeñas cada año.
El hecho de que el lenguaje esté evolucionando significa que los navegadores deben mantenerse
constantemente al día, y si estás usando uno más antiguo, puede que este no soporte todas las
mejoras. Los diseñadores de lenguajes tienen cuidado de no realizar cualquier cambio que pueda
romper los programas ya existentes, de manera que los nuevos navegadores puedan todavía
ejecutar programas viejos.

JavaScript es un lenguaje de secuencias de comandos multiplataforma orientado a objetos que
se utiliza para hacer que las páginas web sean interactivas (por ejemplo, con animaciones
complejas, botones en los que se puede hacer clic, menús emergentes, etc.). También hay
versiones más avanzadas de JavaScript del lado del servidor, como Node.js, que le permiten
agregar más funciones a un sitio web que la descarga de archivos (como la colaboración en
tiempo real entre varias computadoras). Dentro de un entorno de host (por ejemplo, un
navegador web), JavaScript se puede conectar a los objetos de su entorno para proporcionar
control programático sobre ellos.

JavaScript contiene una biblioteca estándar de objetos, como Array, Datey Math, y un conjunto
básico de elementos de lenguaje como operadores, estructuras de control y sentencias.
Core JavaScript se puede extender para una variedad de propósitos al complementarlo con
objetos adicionales; Por ejemplo:

El JavaScript del lado del cliente amplía el lenguaje principal al proporcionar objetos para
controlar un navegador y su Modelo de objetos de documento (DOM). Por ejemplo, las extensiones
del lado del cliente permiten que una aplicación coloque elementos en un formulario HTML y
responda a eventos del usuario, como clics del mouse, entrada de formulario y navegación de
página.
JavaScript del lado del servidor amplía el lenguaje central al proporcionar objetos relevantes
para ejecutar JavaScript en un servidor. Por ejemplo, las extensiones del lado del servidor
permiten que una aplicación se comunique con una base de datos, proporcionen continuidad de
información de una invocación a otra de la aplicación o realicen manipulaciones de archivos
en un servidor.
Esto significa que en el navegador, JavaScript puede cambiar la apariencia de la página web
(DOM). Y, del mismo modo, el JavaScript de Node.js en el servidor puede responder a
solicitudes personalizadas enviadas por código ejecutado en el navegador.

JavaScript y Java
JavaScript y Java son similares en algunos aspectos, pero fundamentalmente diferentes en
otros. El lenguaje JavaScript se parece a Java, pero no tiene el tipado estático ni la
verificación de tipos fuerte de Java. JavaScript sigue la mayoría de las sintaxis de
expresiones de Java, las convenciones de nomenclatura y las construcciones básicas de flujo
de control, razón por la cual se cambió el nombre de LiveScript a JavaScript.

A diferencia del sistema de clases en tiempo de compilación de Java construido por
declaraciones, JavaScript admite un sistema de tiempo de ejecución basado en una pequeña
cantidad de tipos de datos que representan valores numéricos, booleanos y de cadena.
JavaScript tiene un modelo de objetos basado en prototipos en lugar del modelo de objetos
basado en clases más común. El modelo basado en prototipos proporciona una herencia dinámica;
es decir, lo que se hereda puede variar para objetos individuales. JavaScript también admite
funciones sin ningún requisito declarativo especial. Las funciones pueden ser propiedades de
objetos, ejecutándose como métodos vagamente tipificados.

JavaScript es un lenguaje de forma muy libre en comparación con Java. No tiene que declarar
todas las variables, clases y métodos. No tiene que preocuparse por si los métodos son
públicos, privados o protegidos, y no tiene que implementar interfaces. Las variables,
los parámetros y los tipos de devolución de funciones no se escriben explícitamente.

Java es un lenguaje de programación basado en clases diseñado para una ejecución rápida y
seguridad de tipos. La seguridad de tipo significa, por ejemplo, que no puede convertir un
entero de Java en una referencia de objeto o acceder a la memoria privada corrompiendo el
código de bytes de Java. El modelo basado en clases de Java significa que los programas
consisten exclusivamente en clases y sus métodos. La herencia de clases de Java y la
tipificación fuerte generalmente requieren jerarquías de objetos estrechamente acoplados.
Estos requisitos hacen que la programación Java sea más compleja que la programación
JavaScript.

Por el contrario, JavaScript desciende en espíritu de una línea de lenguajes más pequeños y
de escritura dinámica, como HyperTalk y dBASE. Estos lenguajes de secuencias de comandos
ofrecen herramientas de programación a un público mucho más amplio debido a su sintaxis más
sencilla, funcionalidad incorporada especializada y requisitos mínimos para la creación de
objetos.
*/