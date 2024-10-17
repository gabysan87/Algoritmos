// Agrupar estudiantes por calificación y calcular el total de puntaje por grupo
// Descripción: Se tiene una lista de estudiantes con su nombre, calificación y puntaje. Queremos agrupar a los estudiantes por calificación y calcular el total de puntaje para cada grupo..
const estudiantes = [
    { nombre: "Juan", calificacion: "A", puntaje: 85 },
    { nombre: "Ana", calificacion: "B", puntaje: 78 },
    { nombre: "Pedro", calificacion: "A", puntaje: 90 },
    { nombre: "Laura", calificacion: "C", puntaje: 65 },
    { nombre: "Sofia", calificacion: "B", puntaje: 82 }
];

const calculateStudents = (arr) => {
return arr.reduce((acc, curr) => {
    acc[curr.calificacion] =  acc[curr.calificacion] || {totalPuntaje: 0, estudiantes: 0}
    // acc[curr.calificacion].totalPuntaje += curr.puntaje;
    acc[curr.calificacion].totalPuntaje =  acc[curr.calificacion].totalPuntaje + curr.puntaje;
    // acc[curr.calificacion].estudiantes += 1; 
    acc[curr.calificacion].estudiantes =  acc[curr.calificacion].estudiantes + 1
    return acc
}, {})
}

console.log(calculateStudents(estudiantes))
// {
//     A: { totalPuntaje: 175, estudiantes: 2 },
//     B: { totalPuntaje: 160, estudiantes: 2 },
//     C: { totalPuntaje: 65, estudiantes: 1 }
//   }