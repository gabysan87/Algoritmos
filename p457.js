// Dado un array de calificaciones de estudiantes que van de 0 a 100, utiliza map para convertirlas a una escala de 0 a 10. Además, adjunta el índice de cada calificación en un objeto.


const studentGrades = (arr) => {
return arr.map((num, index) => {
    return  `index: ${index} scaledScore: ${num / 10}`
})
}


console.log(studentGrades([50, 75, 100, 30]))


//Salida:


// [
//   { index: 0, scaledScore: 5 },
//   { index: 1, scaledScore: 7.5 },
//   { index: 2, scaledScore: 10 },
//   { index: 3, scaledScore: 3 }
// ]