// Dado un arreglo de objetos que representan productos en un inventario, cada uno con un nombre, un precio y una categoría, queremos realizar las siguientes operaciones:

// Filtrar los productos que son de la categoría "electronics".
// De esos productos filtrados, aplicar un descuento del 20% en su precio.
// Encontrar el primer producto que tiene un precio inferior a 100 después de aplicar el descuento.


const productos = [
    { nombre: "Laptop", precio: 800, categoria: "electronics" },
    { nombre: "Teléfono móvil", precio: 600, categoria: "electronics" },
    { nombre: "Cámara", precio: 150, categoria: "electronics" },
    { nombre: "Silla", precio: 120, categoria: "furniture" },
    { nombre: "Mesa", precio: 200, categoria: "furniture" },
];

const filterCategories = (array) => {
    const result = array.filter((item) => item.categoria === "electronics")
    return result.map((element) => ({
        ...element,
        precio: element.precio - (element.precio  * 20 / 100)
    })) 
    
    
}
const firstUnder = (arr) => arr.find((item) => item.precio < 100);

// Encontrar el primer producto con precio inferior a 100

console.log(filterCategories(productos))
console.log(firstUnder(productos))

// Salida:

// Filtrar productos de categoría "electronics":
// Resultado:

// [
//     { nombre: "Laptop", precio: 800, categoria: "electronics" },
//     { nombre: "Teléfono móvil", precio: 600, categoria: "electronics" },
//     { nombre: "Cámara", precio: 150, categoria: "electronics" }
// ]

// Aplicar un 20% de descuento a los precios:
// Resultado:

// [
//     { nombre: "Laptop", precio: 640, categoria: "electronics" },  // 800 - 160
//     { nombre: "Teléfono móvil", precio: 480, categoria: "electronics" },  // 600 - 120
//     { nombre: "Cámara", precio: 120, categoria: "electronics" }  // 150 - 30
// ]

// Encontrar el primer producto con un precio inferior a 100:
// Resultado: 
// undefined (en este caso, no hay productos con precio inferior a 100).