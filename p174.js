// devolver las palabras que sean Palindromo

const findThePalindromo = (arr) => {
return arr.filter((item) => item.split("").reverse().join("") === item)
}

console.log(findThePalindromo(["ana", "arepera", "oso", "hola", "banco"]))

const findThePalindromo2 = (arr) => {
    return arr.filter((item) => item.split("").reverse().join("").toLowerCase() === item.toLowerCase())
    }
    
    console.log(findThePalindromo2(["ana", "arepera", "oso", "hola", "banco"]))