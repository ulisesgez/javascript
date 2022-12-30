let products = [
    { name: "bike", cost: 3000 },
    { name: "tv", cost: 2500 },
    { name: "book", cost: 320 },
    { name: "mobile", cost: 10000 },
    { name: "laptop", cost: 20000 },
    { name: "keyboard", cost: 500 },
    { name: "earphones", cost: 2000 }
];

//Metodos para recorrer el contenido del array:

//Filter: Nos ayuda a filtar ciertas cosas, el filter va a validar si algo es verdad o falso y lo va a meter en un nuevo array, este metodo no modificara el array original que es products.

let filterProducts = products.filter(function(product){
    return product.cost <= 500
});

//Filtra los articulos menores o iguales a 500
//De cierta forma crea un nuevo array con los productos que se filtraron
//book y keyboard

console.log(filterProducts);

//Metodos para recorrer el contenido del array:

//Map: nOs ayudara a mapear ciertos articulos, de igual forma, este metodo nos va a generar un nuevo array, no va a modificar el array que ya tenemos:

let computers = [
    { brand: "apple", cost: 50000 },
    { brand: "dell", cost: 15000 },
    { brand: "samsung", cost: 13000 },
    { brand: "hp", cost: 10000 },
    { brand: "toshiba", cost: 14000 },
    { brand: "lenovo", cost: 18000 },
    { brand: "asus", cost: 25000 }
];

// Con esto le pedimos que nos regrese de todos los articulosel nombre de los articulos:
 
let brandComputers = computers.map(function(computer){
    return computer.brand
});

console.log(brandComputers);

//Metodos para recorrer el contenido del array:

//Find: 