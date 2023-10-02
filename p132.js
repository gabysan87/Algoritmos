// Dado un conjunto de números, devuelve el inverso aditivo de cada uno. Todo lo positivo se vuelve negativo y lo negativo se vuelve positivo.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// Puede suponer que todos los valores son números enteros. No mute la matriz/lista de entrada.

const invert = (array) => {
    return array.map((item) => item * -1)
}
// array => array.map(num => -num);



 console.log(invert([1,2,3,4,5]))
 console.log(invert([1,-2,3,-4,5]));
 console.log(invert([]))
 console.log(invert([0]))