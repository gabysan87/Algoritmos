// Verificar cuales son los numeros pares e impares.

const numberPairImpar = (number) => {
    // return number.filter((item) => item % 2 === 0)
    return number.map((item) => item % 2 === 0 ? `${item} Es par` : `${item} Es ìmpar`)
}
console.log(numberPairImpar([2,5,6,7,10,35,]))