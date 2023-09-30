// // Obtener la media de una matriz

// Es el final del año académico, momento fatídico de tu informe escolar. Se deben calcular los promedios. Todos los estudiantes se acercan a ti y te ruegan que les calcules su promedio. Fácil ! Sólo necesitas escribir un guión.

// Devuelve el promedio de la matriz dada redondeado hacia abajo a su número entero más cercano.

// La matriz nunca estará vacía.

const getAverage = (marks) => {
    //TODO : calculate the downward rounded average of the marks array
    const result = marks.reduce((acc, curr) => acc + curr) / marks.length 
    return Math.floor(result)

    // return Math.floor(marks.reduce((acc, curr) => acc + curr) / marks.length);

  }

console.log(getAverage([2,2,2,2]))
console.log(getAverage([1,2,3,4,5,]));
console.log(getAverage([1,1,1,1,1,1,1,2]));