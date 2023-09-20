// Encontrar el número más grande:

// Enunciado: Escribe una función que encuentre el número más grande en un array de números.

const largestNumber = (num) => {

    return num.sort((a,b) => b - a)[0]
}


console.log(largestNumber([10, 5, 7, 20, 3])) // Salida: 20