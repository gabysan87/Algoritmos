// Enunciado:Dado un array de objetos que representan estudiantes, cada uno con un nombre y un array de calificaciones, crea una función que actualice todas las calificaciones de un estudiante específico añadiendo un valor extra a cada calificación.
//Entrada:
const estudiantes = [
  { nombre: "Carlos", calificaciones: [70, 80, 90] },
  { nombre: "Ana", calificaciones: [60, 85, 75] },
  { nombre: "Luis", calificaciones: [88, 92, 85] },
];

const estudianteNombre = "Ana";
const extraPuntos = 5;

const studentCalif = (arr, student, pts) => {
  return arr.map((item) => {
    if (item.nombre === student) {
      return {
        ...item,
        calificaciones: item.calificaciones.map((element) => element + pts),
      }
    }else {
        return item
    }
  });
};

console.log(studentCalif(estudiantes, estudianteNombre, extraPuntos))

  //Salida:
//   ({ nombre: "Carlos", calificaciones: [70, 80, 90] },
//   { nombre: "Ana", calificaciones: [65, 90, 80] },
//   { nombre: "Luis", calificaciones: [88, 92, 85] })
// ];
