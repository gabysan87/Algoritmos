// Crea un programa que determine si un número es par o impar.

const evenNumber = (num) => {
if (num % 2 === 0){
    return "Es par"
}
else {
    return "Es impar"
}
}

console.log(evenNumber(3))
console.log(evenNumber(5))
console.log(evenNumber(10))