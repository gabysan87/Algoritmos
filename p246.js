// Supongamos que tenemos un array de objetos que representan estudiantes universitarios. Cada objeto tiene las siguientes propiedades: name (nombre del estudiante), age (edad del estudiante), major (carrera que estudia el estudiante) y grades (array de calificaciones del estudiante en diferentes materias). Queremos implementar una función que calcule el promedio de calificaciones de todos los estudiantes en una carrera determinada y que devuelva un objeto que contenga el promedio y la cantidad de estudiantes de la carrera.

  // Ejemplo de Entrada: calculateAverageByMajor(students, 'ingeniería')
  // Ejempĺo de salida : { average: 7.6, numberOfStudents: 2 }

const students = [
    { name: 'Juan', age: 21, major: 'ingeniería', grades: [8, 7, 9, 8, 10] },
    { name: 'María', age: 20, major: 'medicina', grades: [9, 9, 9, 8, 10] },
    { name: 'Pedro', age: 22, major: 'ingeniería', grades: [6, 7, 7, 8, 6] },
    { name: 'Ana', age: 19, major: 'arquitectura', grades: [7, 8, 6, 7, 9] },
    { name: 'Carlos', age: 20, major: 'medicina', grades: [8, 7, 9, 9, 10] }
  ];


const calculateAverageByMajor = (arr, value) => {


    let studentsIngener = arr.filter((item)=> item.major === value).map((element) => element.grades.reduce((acc, curr) => acc + curr)/arr.length)
    let promedio = studentsIngener.reduce((acc, curr)=>acc + curr)/2
    return  {average: promedio , numberOfStudents: studentsIngener.length }
}
    // let arrayConcat = 0
    //     let result = 0
    //   return arr.filter((item) =>  item.major === value).reduce((acc, curr, index, array) => {
        
    //     curr.grades.forEach(element => {
    //         console.log(element)
    //         arrayConcat += element 
    //         result += 1
    //         console.log(result)
    //     });
               
    //     acc.average = arrayConcat / result

    //     acc.numberOfStudents = array.length
    //     console.log(array.length)
      
    //     // Ejempĺo de salida : { average: 7.6, numberOfStudents: 2 }
    //     return acc
    //   },{})
    


console.log(calculateAverageByMajor(students, 'ingeniería'))