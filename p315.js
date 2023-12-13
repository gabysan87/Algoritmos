// Ejercicio 6: Clasificar por Categoría
// Planteamiento: Clasifica objetos en un nuevo array por una propiedad específica.

// Entrada:

const productos = [
  { nombre: 'Laptop', categoria: 'Electrónica' },
  { nombre: 'Botas', categoria: 'Moda' },
  { nombre: 'Libro', categoria: 'Libros' },
  { nombre: 'Tablet', categoria: 'Electrónica' }
];

const result = (arr) =>{ 
    const category = {}
    arr.map((item) => { 
        category[item.categoria] = arr.filter((elem) => elem.categoria === item.categoria)
})
return category
}

console.table(result(productos))

// Salida:

// Clasificar productos por categoría
// // { 'Electrónica': [{ nombre: 'Laptop', categoria: 'Electrónica' }, { nombre: 'Tablet', categoria: 'Electrónica' }], 
// 'Moda': [{ nombre: 'Botas', categoria: 'Moda' }],
//  'Libros': [{ nombre: 'Libro', categoria: 'Libros' }] }