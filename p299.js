// Ejercicio 3: Sumar propiedades
// Planteamiento: Calcula la suma de una propiedad específica en un array de objetos.
// Entrada
const productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Teléfono", precio: 500 },
  { nombre: "Tablet", precio: 300 },
];

// Salida
// Calcular el precio total de los productos
// 2000

const sumProperties = (arr, precio) => {
 return arr.reduce((acc, curr) => acc + curr.precio, 0 );
};

console.log(sumProperties(productos, "precio"));
