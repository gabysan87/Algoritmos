// Tienes un array de productos con su precio y descuento en porcentaje. Necesitas generar un nuevo array donde cada producto tenga el precio final calculado después de aplicar el descuento.
// Entrada: 
const productos = [
    { nombre: "Laptop", precio: 1000, descuento: 10 },
    { nombre: "Celular", precio: 500, descuento: 5 },
    { nombre: "Tablet", precio: 300, descuento: 15 },
    { nombre: "Monitor", precio: 200, descuento: 20 }
];

// Función que toma un array de productos y devuelve un nuevo array con el precio final después de aplicar el descuento

//creo una funcion que toma un array de productos
const productPrice = (arr) => {


     // se usa el metodo 'map()' para iterar el array y generar un nuevo array con los precios finales
 
    //se desestructuran directamente las propiedades nombre, precio y descuento del objeto producto para poder trabajar con ellas más fácilmente.
return arr.map(({nombre, precio, descuento }) => {

    // Calculamos el precio final restando el descuento
        // Fórmula: precioFinal = precio - (precio * descuento / 100)
    const precioFinal = (precio - (precio * descuento / 100)).toFixed(2) // 1ero se multiplica luego se resta y al final se colocan los decimales con el toFixed

    // Devolvemos un nuevo objeto con el nombre del producto y su precio final
    return {nombre, precioFinal}
})
}

console.log(productPrice(productos))

// Salida : [
//     { nombre: "Laptop", precioFinal: "900.00" },
//     { nombre: "Celular", precioFinal: "475.00" },
//     { nombre: "Tablet", precioFinal: "255.00" },
//     { nombre: "Monitor", precioFinal: "160.00" }
// ]