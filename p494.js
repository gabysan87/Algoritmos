// Dado un arreglo de objetos que representan productos con su nombre y precio, calcular el precio total de todos los productos que cuesten más de $10, usando el método reduce().

const products = [
  { nombre: "Manzana", precio: 8 },
  { nombre: "Pan", precio: 12 },
  { nombre: "Leche", precio: 15 },
  { nombre: "Agua", precio: 5 },
];

const totalPriceOverTen = (items) => {
  return items
    .filter((item) => item.precio > 10)
    .reduce((acc, curr) => acc + curr.precio, 0);
};
console.log(totalPriceOverTen(products)); // Salida esperada: 27 (12 + 15)
