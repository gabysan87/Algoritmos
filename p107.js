
// ¿Qué tan bueno eres realmente?

// Recibirá una matriz con los puntajes de las pruebas de sus compañeros. ¡Ahora calcula el promedio y compara tu puntuación!

// ¡ Vuelve True si estás mejor, si no False!

// Nota:
// Tus puntos no están incluidos en la lista de puntos de tu clase. ¡Para calcular el punto promedio, puede agregar su punto a la matriz dada!

const betterThanAverage = (classPoints, yourPoints) => {
    // Your code here
   const promedioClase = [...classPoints, yourPoints].reduce((acc, curr) => acc + curr, 0) /  (classPoints.length + 1)
   return yourPoints > promedioClase

  //  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }

  
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9))

// estos enfoques calcularán el promedio de los puntajes de la clase, incluyendo tu puntuación, y luego compararán tu puntuación con el promedio para determinar si estás mejor que la clase. Devolverán true si tu puntuación es mayor que el promedio y false en caso contrario.