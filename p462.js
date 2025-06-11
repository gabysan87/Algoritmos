// empieza con "J"
// Enunciado: Dado un arreglo de objetos que representan estudiantes con su nombre y calificación, filtra aquellos con calificación mayor o igual a 60, transforma los nombres de los estudiantes aprobados a mayúsculas y encuentra el primero cuyo nombre comience con la letra "J". Utiliza filter, map y find con sus parámetros item, index y array.

const estudiantes = [
    { nombre: "Ana", calificacion: 50 },
    { nombre: "Juan", calificacion: 85 },
    { nombre: "Pedro", calificacion: 70 },
    { nombre: "Julia", calificacion: 60 }
  ];

  const filterStudent = (array) => {
    const notesStudent = array.filter((item) => item.calificacion >= 60)
    return notesStudent.map((name) => name.nombre.toUpperCase()).find((element) => element.startsWith("J"))
  }

 

console.log(filterStudent(estudiantes))

// salida 
//   "JUAN"