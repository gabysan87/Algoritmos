
// Convertir Temperaturas de Celsius a Fahrenheit
// Enunciado: Dado un arreglo de temperaturas en grados Celsius, crear un nuevo arreglo que contenga las temperaturas convertidas a grados Fahrenheit. La fórmula para la conversión es: 

// F = C × 9/5 + 32
// .

// Ejemplo de Entrada: [0, 20, 100]

const tempCelsius = (arr) => {
return arr.map((item) => {
    return item * 9/5 + 32
})
}
console.log(tempCelsius([0, 20, 100]))

// Ejemplo de Salida: [32, 68, 212]