// /Calcular promedio

// / Escribe una función que calcule el promedio de los números en una lista dada.

// Nota: Las matrices vacías deberían devolver 0.

const  findAverage = (array) => {
    // your code here
    return array.reduce((acc, curr) => acc + curr ,0) / array.length || 0
  }
  console.log(findAverage([1,1,1]))
  console.log(findAverage([1,2,3]))
  console.log(findAverage([1,2,3,4]))