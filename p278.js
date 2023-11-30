
// 1- Enunciado: Crea una función que reciba un array de números y devuelva la suma de todos los elementos.

const sumNumber = [1,2,3,4,5]

const result = (number) => {
    return number.reduce((num1, num2) => num1 + num2)
}

// método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

console.log(result(sumNumber))

// 2 - Crea una función que reciba dos arrays y devuelva un nuevo array con los elementos comunes entre ambos.

const array1 = [1,2,3,4,5]
const array2 = [3,4,5,6,7]

const commonElements = (arr1, arr2) => {
    return arr1.filter((num) => arr2.includes(num))
}

console.log(commonElements(array1,array2))

// se utiliza el metodo filter para crear un nuevo array que contiene solo los elementos que están presentes tanto en arr1 como en arr2. La función includes se utiliza para verificar si un elemento específico está presente en el segundo array (arr2).

// Ejercicio 3:
// Enunciado: Escribe una función que reciba un array de palabras y devuelva un nueva array con la longitud de cada palabra.

const array = ['JavaScript', 'Python', 'HTML', 'CSS'];

const wordLength = (letter) => {
    return letter.map((item) => item.length)
}

console.log(wordLength(array))

//map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos. uso length para que devuelva la cantidad de elementos 

// Ejercicio 4:
// Escribe una función que invierta un array dado.


const array4 = [1, 2, 3, 4, 5]

const invertAnArray = (numb) => {
return numb.reverse()
}

console.log(invertAnArray(array4))

//reverse() invierte el orden de los elementos de un array

// Ejercicio 5:
// Enunciado: Crea una función que elimine los elementos duplicados de un array.

const array5 = [1, 2, 3, 2, 4, 5, 1];

const removeDuplicates = (number) => {
return [...new Set(number)]
}

console.log(removeDuplicates(array5))

// Ejercicio 6:
// Enunciado: Escribe una función que encuentre el número mayor en un array de números.

const array6 = [10, 5, 8, 20, 15];

const biggerNumber = (num6) => {
    return Math.max(...num6)
}

console.log(biggerNumber(array6))

// Ejercicio 7:
// Enunciado: Crea una función que cuente la cantidad de elementos impares en un array de números.

const array7 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const contarImpares = (num) => {
    
    return num.filter((number) => number % 2 !== 0).length 
}

console.log(contarImpares(array7))

// filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada, ength para poder contar la cantidad de elementos que son impares 



// Ejercicio 8:
// Enunciado: Escribe una función que concatene dos arrays.

const array8A = [1, 2, 3];
const array8B = [4, 5, 6]

const concatenateTwoArray = (arr1,arr2) => {
    return [...arr1, ...arr2]
}

console.log(concatenateTwoArray(array8A, array8B))

// Ejercicio 9:
// Enunciado: Crea una función que determine si un array está ordenado de forma ascendente.

const array9 = [1, 2, 3, 4, 5];

const isOrderedAscending = (number) => {
    return number.every((elemento, indice) => (indice === 0 || elemento >= number[indice - 1])) 
    }

// Ejemplo de salida
console.log(isOrderedAscending(array9)); //

// Ejercicio 10:
// Enunciado: Escribe una función que devuelva los primeros n elementos de un array.

// Ejemplo de entrada
const array10 = [10, 20, 30, 40, 50];
const n = 3;

const primerosNElementos = (arr, n) => {
 return arr.slice(0,n)
}

// Ejemplo de salida
console.log(primerosNElementos(array10, n))

// el método slice se utiliza para obtener una porción del array que va desde el índice 0 hasta n (sin incluir n)

// Ejercicio 11:
// Enunciado: Escribe una función que encuentre el índice de un elemento específico en un array.

const array11 = [10, 20, 30, 40, 50];
const elementoBuscar = 30;

const indiceElemento = (array, num) => {
    return array.findIndex((number) => number === num)
}


// Ejemplo de salida
console.log(indiceElemento(array11, elementoBuscar));


// Ejercicio 12:
// Enunciado: Crea una función que sume los elementos en posiciones pares de un array.
// Ejemplo de entrada
const array12 = [1, 2, 3, 4, 5, 6];
const sumarElementosPares = (numPares) => {
return numPares.filter((item, index)=> index % 2 === 0).reduce((acc, item)=> acc + item)
}


// Ejemplo de salida
console.log(sumarElementosPares(array12)); // Salida esperada: 12 (1 + 3 + 5)

// Ejercicio 13:
// Enunciado: Escribe una función que elimine el último elemento de un array y devuelva el nuevo array.
const array13 = [1, 2, 3, 4, 5];

const  eliminarUltimoElemento = (number) => {
    const resut = number.pop()
    return number
}
// Ejemplo de salida
console.log(eliminarUltimoElemento(array13)); // Salida esperada: [1, 2, 3, 4]

// Ejercicio 14:
// Enunciado: Crea una función que combine dos arrays ordenados en un nuevo array ordenado.

// Ejemplo de entrada
const array14A = [1, 3, 5];
const array14B = [2, 4, 6];

const combinarArraysOrdenados = (arr1, arr2) => {
    return [...arr1, ...arr2].sort((num1, num2) => num1 - num2)

}
// Ejemplo de salida
console.log(combinarArraysOrdenados(array14A, array14B)); // Salida esperada: [1, 2, 3, 4, 5, 6]

// Ejercicio 15:
// Enunciado: Escribe una función que encuentre el segundo número más grande en un array de números.

// Ejemplo de entrada
const array15 = [10, 5, 8, 20, 15, 25];

const segundoNumeroMasGrande = (num) => {
return num.sort((a,b) => b - a)[1]
}

// Ejemplo de salida
console.log(segundoNumeroMasGrande(array15)); // Salida esperada: 15
