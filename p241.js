// Deben incluirse todos los caracteres que no sean vocales, incluidos los caracteres no alfabéticos (espacios, comas, etc.).

// Ejemplos:
// vowelOne( "abceios" ) // "1001110"
// vowelOne( "aeiou, abc" ) // "1111100100"

const vowelOne = (str) => {

    return str.split("").map((item) => {
        return item.replace(/[aeiou]/gi, "") ? 0 : 1
    }).join("")

}

console.log(vowelOne("abceios"))
console.log(vowelOne("aeiou, abc"))
