console.log('---> url <---');
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
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);