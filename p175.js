// devolver la cantidad de vocales 

const findVowels  =(str) => { 
    return str.replace(/[^aeiou\W]/g, "").length
}

console.log(findVowels("gabrielá"))