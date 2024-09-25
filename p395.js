// contar la cantidad total de productos vendidos

let ventas = [
    { producto: "Laptop", cantidad: 1},
    { producto: "Teclado", cantidad: 2},
    { producto: "Laptop", cantidad: 3},
    { producto: "Raton", cantidad: 5},
]

const totalProduct = (array) => {
return array.reduce((acc, curr) => acc + curr.cantidad, 0)
}
console.log({total: totalProduct(ventas)})