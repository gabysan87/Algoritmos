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

// Desestructuración de objetos
// Ejercicio 2
// Reto:
// Extrae el nombre y la edad en variables separadas.

// Entrada:
const persona = {
  nombre: "Emma",
  edad: 25,
  ciudad: "Medellín",
};

const { nombre, edad } = persona;

console.log(nombre);
console.log(edad);

// Spread en arrays
// Entrada:
const numeros = [1, 2, 3];
const nuevosNumeros = [0, ...numeros, 4, 5];

// Reto:
// ¿Qué imprime esto?
console.log(nuevosNumeros);

// Rest en funciones
// Ejercicio 4

// Entrada:
const sumar = (...numeros) => {
  return numeros.reduce((acc, cur) => acc + cur, 0);
};

// Reto:
// ¿Qué imprime esto?
console.log(sumar(1, 2, 3, 4, 5));
