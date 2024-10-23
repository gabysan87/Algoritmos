// Enunciado:Dado un array de objetos que representan productos en una tienda, crea una función que filtre aquellos productos que pertenezcan a una categoría específica y tengan stock disponible mayor a un valor mínimo.
//Entrada:
const productos = [
  { id: 1, nombre: "Camisa", categoria: "ropa", stock: 10, precio: 20 },
  { id: 2, nombre: "Pantalón", categoria: "ropa", stock: 0, precio: 25 },
  {
    id: 3,
    nombre: "Televisor",
    categoria: "electrónica",
    stock: 5,
    precio: 300,
  },
  {
    id: 4,
    nombre: "Auriculares",
    categoria: "electrónica",
    stock: 15,
    precio: 50,
  },
];

const categoria = "electrónica";
const minimoStock = 5;

const result = (array) => {
return array.filter((item) => item.categoria === categoria && item.stock >= minimoStock)
}

console.table(result(productos))
//Salida:
// [
//   {
//     id: 3,
//     nombre: "Televisor",
//     categoria: "electrónica",
//     stock: 5,
//     precio: 300,
//   },
//   {
//     id: 4,
//     nombre: "Auriculares",
//     categoria: "electrónica",
//     stock: 15,
//     precio: 50,
//   },
// ];