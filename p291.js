// Ejercicio 1: Filtrar objetos por propiedad
// Planteamiento:
// Dado un array de objetos, filtra los objetos que tienen una propiedad específica igual a un valor dado.

const person = [
  { name: "Juan", age: 25 },
  { name: "Maria", age: 30 },
  { name: "Carlos", age: 22 },
];

const filtrarPorEdad = (arr, age) => {
  return arr.filter((item) => item.age >= age);
};

const resultado = filtrarPorEdad(person, 25);
console.log(resultado);
