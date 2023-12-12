// Ejercicio: Aplicar transformación a objetos
// Planteamiento: Aplica una transformación a todos los objetos de un array.
const estudiantes = [
  { nombre: 'Ana', calificaciones: [85, 90, 78] },
  { nombre: 'Juan', calificaciones: [92, 88, 95] },
  { nombre: 'María', calificaciones: [78, 87, 93] }
];
// [
//     { nombre: 'Ana', calificaciones: [ 90, 95, 83 ] },
//     { nombre: 'Juan', calificaciones: [ 97, 93, 100 ] },
//     { nombre: 'María', calificaciones: [ 83, 92, 98 ] }
//   ]

const transformarArray = (arr) => {
return  arr.map((item) => {
    return {
        ...item,
    calificaciones: item.calificaciones.map((element) => element + 5)
}
})
}

console.log(transformarArray(estudiantes))