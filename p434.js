//Enunciado:
//Dado un array de objetos que representan empleados, donde cada empleado tiene un nombre, años de experiencia, y un array de idiomas que habla, crea una función que devuelva una lista de empleados que tengan más de 5 años de experiencia y hablen más de un idioma.
//Entrada:
const empleados = [
    { nombre: "Sofia", experiencia: 6, idiomas: ["español", "inglés"] },
    { nombre: "David", experiencia: 4, idiomas: ["español"] },
    { nombre: "Elena", experiencia: 10, idiomas: ["español", "francés", "inglés"] },
  ];

const selectEmployees = (arr) => {
    return arr.filter((item) => item.experiencia > 5 && item.idiomas.length > 1)
}

console.log(selectEmployees(empleados))

//Salida:
// [
//     { nombre: "Sofia", experiencia: 6, idiomas: ["español", "inglés"] },
//     { nombre: "Elena", experiencia: 10, idiomas: ["español", "francés", "inglés"] }
//   ]