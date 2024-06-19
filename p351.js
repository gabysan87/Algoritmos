// Calcular Impuestos por Categoría de Producto:
// Se necesita un algoritmo que tome un array de objetos de productos con su precio y categoría,
//y devuelva un objeto con la suma total de impuestos para cada categoría, considerando un impuesto del 10% sobre el precio.
//Entrada:
const productos = [ 
    { nombre: "Laptop", precio: 1200, categoria: "Electrónica" },
    { nombre: "Camiseta", precio: 20, categoria: "Ropa" },
    { nombre: "Teléfono", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 10, categoria: "Libros" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
  ];

  const calculateProduct = (arr) => {
    return arr.reduce((acc, curr, _index, array) => {
        const categoryFilter = array.filter((item) => item.categoria === curr.categoria)
        acc[curr.categoria] = categoryFilter.reduce((acum, current) => acum + current.precio, 0) * 0.1 
        return acc
    },{})
  }

console.log(calculateProduct(productos))
  //Salida:
  // {
  //   'Electrónica': 200,
  //   'Ropa': 7,
  //   'Libros': 1
  // }