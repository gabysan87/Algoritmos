// Transformar Precios: Implementa una función llamada transformarPrecios que tome como parámetro el array de productos y un factor de transformación. La función debe devolver un nuevo array donde los precios de cada producto se han multiplicado por el factor dado.

// Salida Esperada: [
//   { id: 1, nombre: 'Producto A', precio: 55, disponible: true },
//   { id: 2, nombre: 'Producto B', precio: 33, disponible: false },
//   { id: 3, nombre: 'Producto C', precio: 22, disponible: true }
// ]

const productos = [
    { id: 1, nombre: 'Producto A', precio: 50, disponible: true },
    { id: 2, nombre: 'Producto B', precio: 30, disponible: false },
    { id: 3, nombre: 'Producto C', precio: 20, disponible: true },
];

const factorTransformacion = 1.1;

const transformarPrecios = (arr,factor ) =>{
return arr.map((item) => {
    return {
     ...item, 
     precio: item.precio * factor
    }
})
}

console.log(transformarPrecios(productos, factorTransformacion))