// escribe una funcion que reciba un numero como parametro y devolver la cantidad de pares e impares.

const numberOfEvenAndOdd = (num) => {
    const result = Math.floor(num / 2)
    return {
        pares: result,
        impares: result % 2 === 0 ? result : result + 1
    }
}

console.log(numberOfEvenAndOdd(122))