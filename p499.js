// Ejercicio 1 — Promedio de edades
const personas = [
  { nombre: "Emma", edad: 25 },
  { nombre: "Carlos", edad: 30 },
  { nombre: "Ana", edad: 28 },
  { nombre: "Laura", edad: 22 },
];
// Salida esperada:
// Promedio: 26.25

const averageAge = (array) => {
  return array.reduce((acc, curr) => acc + curr.edad, 0) / array.length;
};
console.log(averageAge(personas));
