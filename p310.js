// Encontrar Objeto Mínimo
// Planteamiento: Encuentra el objeto con el valor mínimo en una propiedad específica.

// Entrada:

const productos = [
  { nombre: 'Laptop', precio: 1200 },
  { nombre: 'Teléfono', precio: 500 },
  { nombre: 'Tablet', precio: 300 }
];

const valorMinimo = (arr) => {
    return arr.reduce((acc, curr) => curr.precio < acc.precio ? curr : acc);
}

console.log(valorMinimo(productos))


// Salida:
// Encontrar el producto más económico
// { nombre: 'Tablet', precio: 300 }