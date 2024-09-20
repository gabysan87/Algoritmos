// Calcular la suma de precios de productos por categoría
// Problema: Dado un array de productos con su categoría y precio, calcula la suma de los precios por cada categoría.
let productos = [
  { nombre: "Camisa", categoria: "Ropa", precio: 20 },
  { nombre: "Pantalón", categoria: "Ropa", precio: 30 },
  { nombre: "Laptop", categoria: "Electrónica", precio: 1000 },
  { nombre: "Móvil", categoria: "Electrónica", precio: 500 }
];


const priceByCategory = (arr) => {
return arr.reduce((acc, {categoria, precio}) => {
  acc[categoria] = (acc[categoria] || 0) + precio;
  return acc
})
}
console.log(priceByCategory(productos))

// salida
// {
//   "Ropa": 50,
//   "Electrónica": 1500
// }