// Eliminar Duplicados en un Arreglo:

// Planteamiento: Escribe una función que elimine los elementos duplicados de un arreglo y devuelva un nuevo arreglo con valores únicos.

// Ejemplo:

// Entrada: [1, 2, 2, 3, 4, 4, 5]
// Salida: [1, 2, 3, 4, 5]


// const numDuplicate = (arr) => {
// return [...new Set(arr)]
// }
// console.log(numDuplicate([1, 2, 2, 3, 4, 4, 5]))

const removeDuplicates = [1, 2, 2, 3, 4, 4, 5] 
const result = (arr) => {
    return [...new Set(arr)]
}

console.log(result(removeDuplicates))


// dado un array de string, devuelve las palabras que son palindromo

const arrPalindrome = ["oso", "ana", "banco"]

const validatePalindromo = (arr) => {
    return arr.filter((item) => item.split("").reverse().join("") === item)

}
console.log(validatePalindromo(arrPalindrome))

// se usa el metodo filter para que me devuelve un nuevo array con aquellos elementos que cumplan la condicion, 
// dentro de la funcion utilizo el metodo split para que divida la cadena en una matriz,
//  luego uso el metodo reverse que me sirve para invertir el orden de los elementos de un array,
//   al final uso el metodo join el cual une los elementos de una matriz en una cadena y lo comparamos con la igualdad estricta === con eleemento (item)