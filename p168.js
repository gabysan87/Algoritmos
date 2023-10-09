// Verificar en un array cuales elementos son palindromos.

const palindromo = (arr) => {
    // return arr.map((item) => item.split("").reverse().join("") === item)
    // return arr.filter((item) => item.split("").reverse().join("") === item)
    return arr.filter((item) => item.split("").reverse().join("").toLowerCase() === item.toLowerCase())
}

console.log(palindromo(["Oso","arepera", "anita","anitalavalatina","hola"]))