// Desarrolla un programa que determine si un número es primo.

const numberPrime = (num) => {
return num.filter((item) => item >= 2 && item <= 3 || item % 2 !== 0 && item % 3 !== 0)
}

console.log(numberPrime(3))