// Ejercicio 2: Calcular promedio de propiedades
// Planteamiento:
// Dado un array de objetos con propiedades numéricas, calcula el promedio de una propiedad específica.

const product = [
    {name: "Lapto", price: 1200},
    {name: "Telefono", price: 800},
    {name: "Tablet", price: 500}
]

const calculateAverage = (arr, price) => {
    const result = arr.reduce((acc, curr) => {
        return acc + curr.price
    }, 0)
return result / arr.length
}
console.log(calculateAverage(product, 'price'))