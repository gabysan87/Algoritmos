// Encontrar Producto por ID: Implementa una función llamada encontrarProductoPorId que tome como parámetros el array de productos y un ID, y devuelva el objeto del producto correspondiente al ID dado.


// Salida Esperada: { id: 2, nombre: 'Producto B', precio: 30, disponible: false }

const productos = [
    { id: 1, nombre: 'Producto A', precio: 50, disponible: true },
    { id: 2, nombre: 'Producto B', precio: 30, disponible: false },
    { id: 3, nombre: 'Producto C', precio: 20, disponible: true },
];

// const idBuscado = 2

// const encontrarProductoPorId = (array, id) => {
// return array.find((elem) => elem.id === id)
// }

// console.log(encontrarProductoPorId(productos,idBuscado))

// Filtrar Productos por Disponibilidad: Implementa una función llamada filtrarProductosPorDisponibilidad que tome como parámetros el array de productos y un valor de disponibilidad (true o false), y devuelva un nuevo array que contenga solo los productos que tienen la disponibilidad proporcionada.

const disponibilidadFiltrada = false;

const filtrarProductosPorDisponibilidad = (arr, value) => {
    return arr.filter((elem) => elem.disponible === value)
} 

console.log(filtrarProductosPorDisponibilidad(productos,disponibilidadFiltrada))