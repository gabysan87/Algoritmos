// Encontrar el primer nombre con más de cierta cantidad de caracteres:
// Planteamiento: Escribe una función que tome un array de nombres y una longitud mínima como entrada, y devuelva el primer nombre en el array que tenga más caracteres que la longitud mínima.

// Entrada: ["Alice", "Bob", "Charlie", "David", "Eve"], Longitud mínima: 6
// Retorno: "Charlie"


const numberOfCharacters = ["Alice", "Bob", "Charlie", "David", "Eve", "gabriela"]

const result = (arr, long) => {
    return arr.find((item) => item.length > long)
}

console.log(result(numberOfCharacters,6))


