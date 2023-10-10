// Verificar en un array cuales elementos son palindromos.

const palindromo = (arr) => {
    // return arr.map((item) => item.split("").reverse().join("") === item) devuelve un booleano 
    // return arr.filter((item) => item.split("").reverse().join("") === item) devuelve todas las palabras que son palindromo
    return arr.filter((item) => item.split("").reverse().join("").toLowerCase() === item.toLowerCase())
    // palindromo si tiene letras mayusculas
}
console.log(palindromo(["oso","arepera", "anita","anitalavalatina","hola"]))