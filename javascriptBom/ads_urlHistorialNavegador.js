console.log('---> url <---');
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.pathname);

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