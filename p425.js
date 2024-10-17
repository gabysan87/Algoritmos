// Agrupar productos por categoría y calcular el inventario total de cada categoría
// Descripción: Se tiene una lista de productos con su categoría y stock (cantidad disponible). Queremos agrupar los productos por categoría y calcular el total de inventario en cada categoría.

const productos = [
    { nombre: "Laptop", categoria: "Electrónica", stock: 5 },
    { nombre: "Celular", categoria: "Electrónica", stock: 10 },
    { nombre: "Mesa", categoria: "Muebles", stock: 3 },
    { nombre: "Silla", categoria: "Muebles", stock: 7 },
    { nombre: "Cafetera", categoria: "Electrodomésticos", stock: 4 }
];

const groupByCategory = (arr) => {
return arr.reduce((acc, {categoria, stock}) => {
    // Si no existe la categoría en el acumulador, inicializamos con totalStock y productos.
    acc[categoria] = acc[categoria] || {totalStock: 0, productos: 0}

    //suma el stock del producto actual al total de la categoría.
    acc[categoria].totalStock += stock

    // Incrementar el número de productos en la categoría.
    acc[categoria].productos += 1

    return acc
},{})

}

console.log(groupByCategory(productos))
// {
//     Electrónica: { totalStock: 15, productos: 2 },
//     Muebles: { totalStock: 10, productos: 2 },
//     Electrodomésticos: { totalStock: 4, productos: 1 }
//   }