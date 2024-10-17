// Tienes un array de productos con su precio y descuento en porcentaje. Necesitas generar un nuevo array donde cada producto tenga el precio final calculado después de aplicar el descuento.
// Entrada: 
const productos = [
    { nombre: "Laptop", precio: 1000, descuento: 10 },
    { nombre: "Celular", precio: 500, descuento: 5 },
    { nombre: "Tablet", precio: 300, descuento: 15 },
    { nombre: "Monitor", precio: 200, descuento: 20 }
];

const productPrice = (arr) => {
    // Calculamos el precio final aplicando el descuento
return arr.map(({nombre, precio, descuento }) => {
    const precioFinal = (precio - (precio * descuento / 100)).toFixed(2) // 1ero se multiplica luego se resta y al final se colocan los decimales con el toFixed
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