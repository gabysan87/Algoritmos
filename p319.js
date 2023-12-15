// Filtrar Productos por Disponibilidad: Implementa una función llamada filtrarProductosPorDisponibilidad que tome como parámetros el array de productos y un valor de disponibilidad (true o false), y devuelva un nuevo array que contenga solo los productos que tienen la disponibilidad proporcionada.

// Salida Esperada: [
//   { id: 2, nombre: 'Producto B', precio: 30, disponible: false }
// ]
const productos = [
    { id: 1, nombre: 'Producto A', precio: 50, disponible: true },
    { id: 2, nombre: 'Producto B', precio: 30, disponible: false },
    { id: 3, nombre: 'Producto C', precio: 20, disponible: true },
];
const disponibilidadFiltrada = false;

const filtrarProductosPorDisponibilidad = (arr, disp) => {
return arr.filter((item) => item.disponible === disp)
}

console.log(filtrarProductosPorDisponibilidad(productos,disponibilidadFiltrada))