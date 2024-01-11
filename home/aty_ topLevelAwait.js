/*
npm install node-fetch

Products.js

import fetch from "node-fetch";

const response = await fetch("https://api.escuelajs.co/api/v1/products");
const products = await response.json();

export { products };

Top-level-await.js

import { products } from "./products.js";

console.log(products);
console.log("Hey!!");
*/