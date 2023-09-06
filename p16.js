// 6 Planteamiento: Verificar si un estudiante aprobó o reprobó un examen.
// Entrada: La calificación obtenida en el examen (número entero).
// Salida: "Aprobado" si la calificación es mayor o igual a 60, o "Reprobado" si es menor a 60.

const studentExam = (number) => {
  // return number >= 60 ? "Aprobado" : "Reprobado"
  if (number >= 60) {
    return "Aprobado";
  } else {
    return "Reprobado";
  }
};

console.log(studentExam(76));
console.log(studentExam(55));
console.log(studentExam(60));
