// Calcular el promedio de los valores de una propiedad de un array de objetos:
// Ejemplo:
// Entrada: [{nombre: "Camiseta", precio: 20.99}, {nombre: "Pantalón", precio: 35.99}, {nombre: "Zapatos", precio: 49.99}], "precio"
// Salida: 35.99

const object = [
    { nombre: "Camiseta", precio: 20.99 },
    { nombre: "Pantalón", precio: 35.99 },
    { nombre: "Zapatos", precio: 49.99 },
  ];

const calculateAverage = (arr) => {
    let promedio = arr.reduce((acc, curr) => acc + curr.precio
    ,0) / arr.length
    return +promedio.toFixed(2)
}

console.log(calculateAverage(object))

