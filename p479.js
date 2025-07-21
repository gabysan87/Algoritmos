// Ejercicio 1 – Combinar arrays con spread y eliminar duplicados

const frutas1 = ["manzana", "pera", "mango"];
const frutas2 = ["mango", "piña", "sandía"];

const result = (arr1, arr2) => {
  return [...new Set([...arr1, ...arr2])];
};

// 🧠 Reto:
// Crea un nuevo array llamado frutasUnicas que combine ambos arrays
// y elimine frutas duplicadas usando el operador spread.
// 🟢 Salida esperada:
console.log(result(frutas1, frutas2));
//salida
// ["manzana", "pera", "mango", "piña", "sandía"]

// Ejercicio 2 – Filtrar y agrupar con desestructuración y rest
const productos = [
  { nombre: "camisa", precio: 20 },
  { nombre: "pantalón", precio: 30 },
  { nombre: "gorra", precio: 10 },
  { nombre: "chaqueta", precio: 50 },
];

// 🎯 Reto:
// Usa desestructuración para separar el primer producto en una variable principal
// y los demás en un array llamado otrosProductos.

const [nombre, ...otrosproductos] = productos;

console.log(nombre);
console.log(otrosproductos);
