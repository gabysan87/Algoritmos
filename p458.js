// Dado un array de palabras, utiliza filter para conservar solo aquellas palabras cuyo índice en el array sea par y cuya longitud sea mayor a 4.

["apple", "pear", "banana", "kiwi", "grape"]


const arrayWords = (arr) => {
    return arr.filter((items, index) => index % 2 === 0 && items.length > 4)
}

console.log(arrayWords(["apple", "pear", "banana", "kiwi", "uva"]))


//salida
// ["apple", "banana"]