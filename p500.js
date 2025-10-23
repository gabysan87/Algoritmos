// 🔹 Ejercicio 2 — Total de productos disponibles

// Enunciado:
// Tienes una lista de productos con su cantidad disponible.
// Calcula cuántas unidades totales hay sumando solo los productos con stock mayor a 0.
const productos = [
  { nombre: "Laptop", stock: 5 },
  { nombre: "Mouse", stock: 0 },
  { nombre: "Teclado", stock: 3 },
  { nombre: "Monitor", stock: 2 },
];
// Salida esperada:
// Total disponible: 10

const totalProducts = (array) => {
  const result = array
    .filter((item) => item.stock > 0)
    .reduce((acc, curr) => acc + curr.stock, 0);
  return `Total disponible: ${result}`;
};
console.log(totalProducts(productos));
