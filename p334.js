// 1.// Eliminar Propiedad
// Planteamiento: Elimina una propiedad específica de todos los objetos en un array.

// Entrada:

const estudiantes = [
  { nombre: 'Juan', edad: 20, promedio: 85 },
  { nombre: 'Ana', edad: 22, promedio: 92 },
  { nombre: 'Carlos', edad: 25, promedio: 88 }
];

const deleteProperty = (arr) => {
    return arr.filter((item) => delete item.promedio)
}

console.log(deleteProperty(estudiantes))
// Eliminar la propiedad 'promedio' de todos los estudiantes