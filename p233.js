// Números pares en una matriz
// Dado un conjunto arrayde números, devuelve una nueva matriz de longitud numberque contiene los últimos números pares de la matriz original (en el mismo orden). La matriz original no estará vacía y contendrá al menos números pares.

// Por ejemplo:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

const evenNumbers = (array, number) => {
    // good luck

    return array.filter((num) => num % 2  === 0).slice(-number)
  }

  console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))