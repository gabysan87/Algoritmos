// Ejercicio 9: Actualizar propiedad
// Planteamiento: Actualiza el valor de una propiedad en todos los objetos de un array.

// Entrada
const productos = [
  { nombre: 'Portátil', precio: 1200 },
  { nombre: 'Teléfono', precio: 500 },
  { nombre: 'Tablet', precio: 300 }
];

const porcentaje = 1.10

const increasePrice = (arr, factor ) => {
    return arr.map((price) => {
        return {
            ...price,
            precio: price.precio * factor
        }
        
    })
}

console.log(increasePrice(productos, porcentaje))

 // Salida
// Incrementar el precio de todos los productos en un 10%
// [{ nombre: 'Portátil', precio: 1320 }, { nombre: 'Teléfono', precio: 550 }, { nombre: 'Tablet', precio: 330 }]