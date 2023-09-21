// Filtrar objetos por propiedad:
// Enunciado: Escribe una función que filtre un array de objetos en función de una propiedad específica.
// Ejemplo de entrada y salida:
// const categoriaFiltrada = filtrarPorCategoria(productos, 'Calzado');
// console.log(categoriaFiltrada);
// // Salida: [{ id: 2, nombre: 'Zapatos', categoria: 'Calzado' }]/

const product = [
  { id: 1, 
    nombre: "Camiseta", 
    categoria: "Ropa" },
  { id: 2, 
    nombre: "Zapatos", 
    categoria: "Calzado" },
  { id: 3, 
    nombre: "Laptop",
     categoria: "Electrónica" },
];

const filtrarPorCategoria = (arr, category) => arr.find((item) => item.categoria === category)
console.log(filtrarPorCategoria(product,"Calzado"))