//si todo a ha sido reuelto:

const promise1 = new Promise((resolve, reject) => reject('reject'));
const promise2 = new Promise((resolve, reject) => resolve('resolve'));
const promise3 = new Promise((resolve, reject) => resolve('resolve2'));

//fallar la primera y tener resolve de la segunda y de la tercera:
Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));
/*
[
    {status: 'rejected', reason: 'reject'}
    {status: 'fulfilled', value: 'resolve'}
    {status: 'fulfilled', value: 'resolve2'}
]
*/