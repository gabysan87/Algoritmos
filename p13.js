// 3 Planteamiento: Calificar la edad de una persona.
// Entrada: Un número entero que representa la edad.
// Salida: "Eres menor de edad" si la edad es menor que 18, o "Eres mayor de edad" si la edad es igual o mayor a 18.

const ageOfPerson = (age) => {
  // return age >= 18 ? "Eres mayor de edad" : "Eres menor de edad"

  if (age >= 18) {
    return "Eres mayor de edad";
  } else {
    return "Eres menor de edad";
  }
}

console.log(ageOfPerson(18));
console.log(ageOfPerson(17));
