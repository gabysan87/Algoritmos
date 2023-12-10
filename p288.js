// /3)Filtrar palabras que empiezan con una letra específica:
// Planteamiento: Escribe una función que tome un array de palabras y una letra como entrada, y devuelva un nuevo array con las palabras que empiezan con la letra dada.

// Entrada: ["apple", "banana", "avocado", "grape"], Letra: "a"
// Retorno: ["apple", "avocado"]/

const wordsThatBegin = (arr, letter) => {
return arr.filter((item) => item[0] === letter)
}

console.log(wordsThatBegin(["apple", "banana", "avocado", "grape"], "a"))