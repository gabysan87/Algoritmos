// 1.Convertir cadenas a mayúsculas:
// Enunciado: Dado un array de cadenas, convierte cada cadena a mayúsculas y devuelve el nuevo array.
// Entrada: ['hola', 'mundo', 'javascript']
// Salida: ['HOLA', 'MUNDO', 'JAVASCRIPT']

const arrays =  ['hola', 'mundo', 'javascript']

const result = (arr) => {
    return arr.map((item) => item.toUpperCase())
} 

console.log(result(arrays))

// Multiplicar elementos de dos arrays:

// Enunciado: Dados dos arrays del mismo tamaño, multiplica los elementos correspondientes de ambos arrays y devuelve un nuevo array con los resultados.
// Entrada: [1, 2, 3], [4, 5, 6]
// Salida: [4, 10, 18]

const multiplicarArray1 = [1, 2, 3] 
const multiplicarArray2 = [4, 5, 6] 

const result2 = (arr1, arr2) => {
 return arr1.map((item, index) => item * arr2[index])
}

console.log(result2(multiplicarArray1, multiplicarArray2))

// 3.Enunciado: Dado un array de números, eleva al cuadrado cada elemento y devuelve un nuevo array con los resultados.
// Entrada: [2, 4, 6, 8]
// Salida: [4, 16, 36, 64]

const raiseSquare = [2, 4, 6, 8]

const result3 = (array) => {
    return array.map((item) => item * item)
}

console.log(result3( raiseSquare))

// Transformar Precios: Implementa una función llamada transformarPrecios que tome como parámetro el array de productos y un factor de transformación. La función debe devolver un nuevo array donde los precios de cada producto se han multiplicado por el factor dado.
// Entrada

const productos = [
    { id: 1, nombre: 'Producto A', precio: 50, disponible: true },
    { id: 2, nombre: 'Producto B', precio: 30, disponible: false },
    { id: 3, nombre: 'Producto C', precio: 20, disponible: true },
];
const factorTransformacion = 1.1;

const result4 = (array, factor) => {
    return array.map((item) => {
    return {
        ...item,
        precio: Math.round(item.precio * factor)
    }
    })
}

console.log(result4(productos, factorTransformacion))

   

//  Salida Esperada: [
//   { id: 1, nombre: 'Producto A', precio: 55, disponible: true },
//   { id: 2, nombre: 'Producto B', precio: 33, disponible: false },
//   { id: 3, nombre: 'Producto C', precio: 22, disponible: true }
// ]
