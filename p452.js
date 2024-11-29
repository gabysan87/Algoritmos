// Doble de Números con Condición de Índice Par
// Enunciado: Dado un arreglo de números, crear un nuevo arreglo donde cada número se duplica si su índice es par. Si el índice es impar, el número debe permanecer igual.

// Ejemplo de Entrada: [1, 2, 3, 4]


const numberIndex = (arr) => {
    return arr.map((num, index) => index % 2 === 0 ? num * 2 : num)
}
console.log(numberIndex([1, 2, 3, 4]))

// Ejemplo de Salida: [2, 2, 6, 4]
