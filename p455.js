// Enunciado
// Dado un arreglo de objetos que representan estudiantes, cada uno con un nombre, una edad y una calificación (nota final), queremos realizar las siguientes operaciones:

// Filtrar los estudiantes que tienen una calificación mayor o igual a 60 (aprueban).
// De esos estudiantes aprobados, crear un nuevo arreglo que contenga solo los nombres.
// Encontrar el primer estudiante que tiene 18 años o más.



const estudiantes = [
    { nombre: "Juan", edad: 17, calificacion: 75 },
    { nombre: "Ana", edad: 19, calificacion: 85 },
    { nombre: "Carlos", edad: 16, calificacion: 55 },
    { nombre: "María", edad: 18, calificacion: 60 },
    { nombre: "Luis", edad: 20, calificacion: 42 },
];


const filterNotes = (arr) =>  arr.filter((calif) => calif.calificacion >= 60 )

const studentAprob =  (arr) => filterNotes(arr).map((item) => item.nombre )

const firstSeniorstudent = (array) => array.find((student) => student.edad >= 18)

console.log(filterNotes(estudiantes))
console.log(studentAprob(estudiantes))
console.log(firstSeniorstudent(estudiantes))
// Salida:

// Filtrar estudiantes aprobados (calificación >= 60):
// Resultado:

// [
//     { nombre: "Juan", edad: 17, calificacion: 75 },
//     { nombre: "Ana", edad: 19, calificacion: 85 },
//     { nombre: "María", edad: 18, calificacion: 60 }
// ]

// Crear un nuevo arreglo con solo los nombres de los estudiantes aprobados:
// Resultado:

// ["Juan", "Ana", "María"]

// Encontrar el primer estudiante con 18 años o más:
// Resultado:

// { nombre: "Ana", edad: 19, calificacion: 85 }
