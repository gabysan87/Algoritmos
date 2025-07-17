// Desestructuración de arrays (🧪 Entrada / Salida)

// Entrada:
const frutas = ["manzana", "pera", "mango", "piña", "uva"];

// Reto:
// Extrae la primera fruta en una variable llamada primera
// y el resto de frutas en un array llamado resto.

// const primera = frutas[0];
// const  [_, ...frutas] = resto
const [primera, ...resto] = frutas;

// Salida esperada:
console.log(primera); // "manzana"
console.log(resto); // ["pera", "mango", "piña", "uva"]
