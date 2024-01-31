// Tienes un array de objetos que representan productos. Cada objeto tiene las siguientes propiedades: id, nombre, precio y disponible. Tu tarea es implementar funciones que realicen las siguientes operaciones:

// Encontrar Producto por ID: Implementa una función llamada encontrarProductoPorId que tome como parámetros el array de productos y un ID, y devuelva el objeto del producto correspondiente al ID dado.

// Datos : 

const productos = [
  { id: 1, nombre: 'Producto A', precio: 50, disponible: true },
  { id: 2, nombre: 'Producto B', precio: 30, disponible: false },
  { id: 3, nombre: 'Producto C', precio: 20, disponible: true },
];


const idDado = 2

const findProductById = (array, id) => {
    return array.find((elem) => elem.id === id)
}

console.log(findProductById(productos,idDado))

// ejercicio 2
// Filtrar Productos por Disponibilidad: Implementa una función llamada filtrarProductosPorDisponibilidad que tome como parámetros el array de productos y un valor de disponibilidad (true o false), y devuelva un nuevo array que contenga solo los productos que tienen la disponibilidad proporcionada.

const availability = false

const filterProductsByAvailability = (arr, value) => {
    return arr.filter((elem) => elem.disponible === value)
}

console.log(filterProductsByAvailability(productos,availability))

//crear una funcion que permita transformar 
// Transformar Precios: Implementa una función llamada transformarPrecios que tome como parámetro el array de productos y un factor de transformación. La función debe devolver un nuevo array donde los precios de cada producto se han multiplicado por el factor dado. 

const factored = 1.1

const transformPrice = (array, factor) => {
 return array.map((price) => { 
    return {
        ...price,
    precio: Math.round(price.precio * factor) 
    }
})
}

console.log(transformPrice(productos,factored))



