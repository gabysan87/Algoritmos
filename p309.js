// Ejercicio 1: Calcular Promedio
// Planteamiento: Crea una función que calcule el promedio de una propiedad específica en un array de objetos.


const estudiantes = [
  { nombre: 'Juan', edad: 20 },
  { nombre: 'Ana', edad: 22 },
  { nombre: 'Carlos', edad: 25 }
];

const averageAge = (arr) => {
    const sumOfAges = arr.reduce((acc,curr) => acc + curr.edad,0)
    const result = sumOfAges/arr.length
    return result 
    }
    
  console.log(averageAge(estudiantes))
// Calcular el promedio de edades
// 22.33
