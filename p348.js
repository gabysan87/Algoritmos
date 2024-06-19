// Se necesita un algoritmo que tome un array de objetos de estudiantes con sus calificaciones y devuelva un objeto con el promedio de calificaciones de cada estudiante.
// Entrada:
const estudiantes = [
  { nombre: 'Juan', calificaciones: [85, 90, 95] },
  { nombre: 'María', calificaciones: [75, 80, 85] },
  { nombre: 'Pedro', calificaciones: [90, 95, 100] }
];

const promedio = (arr) => {

    return arr.reduce((acc, current)=>{
        const  {nombre, calificaciones} = current
    acc[nombre] = calificaciones.reduce((prev, actual) => prev += actual ) / calificaciones.length
return acc
 },{})
}

console.log(promedio(estudiantes ))
// Salida:
// {
//   'Juan': 90,
//   'María': 80,
//   'Pedro': 95
// }