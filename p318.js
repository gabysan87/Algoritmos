// Encontrar Producto por ID: Implementa una función llamada encontrarProductoPorId que tome como parámetros el array de productos y un ID, y devuelva el objeto del producto correspondiente al ID dado.


// Salida Esperada: { id: 2, nombre: 'Producto B', precio: 30, disponible: false }

const productos = [
    { id: 1, nombre: 'Producto A', precio: 50, disponible: true },
    { id: 2, nombre: 'Producto B', precio: 30, disponible: false },
    { id: 3, nombre: 'Producto C', precio: 20, disponible: true },
];

const idBuscado = 2;

const encontrarProductoPorId = (arr,id) => {
return arr.find((item) => item.id === id)
}

console.log(encontrarProductoPorId(productos, idBuscado))