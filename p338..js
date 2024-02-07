// validar un string que al menos tenga al menos 4 vocales

const searchVowels = (str) =>{
let regex  = /[aeiou]/g

    return str.match(regex).length > 4

}

console.log(searchVowels("murcielago"))
console.log(searchVowels("Hola"))