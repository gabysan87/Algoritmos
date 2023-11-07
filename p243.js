//  Dadas dos matrices, a1 y a2, ordene los elementos de a2 según el índice de la palabra en a1 que comienza con la misma letra.

// Ejemplo 1
// a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
// a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

// returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']

// Ejemplo 2
// a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin']
// a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo']

// returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']
// Cada elemento de las matrices comenzará con una letra única, por lo que solo habrá una coincidencia para cada elemento.

let a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
let a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

const matrixSameLetter = (a1, a2) => {
return a1.map((item) => a2.find((value) => value[0] === item[0]))
}

console.log(matrixSameLetter(a1, a2))