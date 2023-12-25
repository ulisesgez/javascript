/*
Objetos del BOM
*/console.log('---> url <---');
console.log(location);
console.log(location.origin);//ruta completa
console.log(location.protocol);//http o https
console.log(location.host);//dominio
console.log(location.hostname);//dominio
console.log(location.port);//puerto
console.log(location.href);//ruta completa
console.log(location.hash);//#hash
console.log(location.pathname);//ruta

console.log('---> history <---');
console.log(history);
console.log(history.length);
history.back(3)//Va 3 paginas hacia atras de acuerdo al historial
history.go(-3)//Va 3 paginas hacia atras de acuerdo al historial
history.forward(3)//Va 3 paginas hacia adelante de acuerdo al historial
history.go(3)//Va 3 paginas hacia atras de acuerdo al historial

console.log('---> navigator <---');
console.log(navigator);//Informacion del navegador
console.log(navigator.connection);//Informacion de la conexion
console.log(navigator.geolocation);//Informacion de la geolocalizacion
console.log(navigator.mediaDevices);//Informacion de los dispositivos multimedia
console.log(navigator.mimeTypes);//Informacion de los tipos de archivos
console.log(navigator.onLine);//Informacion de la conexion
console.log(navigator.serviceWorker);//Informacion de los serviceWorker
console.log(navigator.storage);//Informacion del almacenamiento
console.log(navigator.usb);//Informacion de los dispositivos usb
console.log(navigator.userAgent);//Informacion del navegador