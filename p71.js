// Escribe un programa que determine si un carácter ingresado es una vocal o una consonante.

const isVowelORConsonant = (letter) => {
    const vowels = ["a", "e", "i", "o", "u"];

    if(vowels.includes(letter)){
        return "Es una vocal"
    }
    else {
        return "Es consonante"
    }
}

console.log(isVowelORConsonant("a"))
console.log(isVowelORConsonant("b"))
