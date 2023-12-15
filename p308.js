// Eliminar personas con edades impares:

// Planteamiento: Elimina del array a las personas cuyas edades son números impares.

const personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 30 },
  { nombre: "Carlos", edad: 22 },
  { nombre: "Ana", edad: 28 }
];
const result = (arr) => {
  return arr.filter((item) => item.edad % 2 === 0)
} 

console.log(result(personas))

// Salida: [{ nombre: "María", edad: 30 }, { nombre: "Carlos", edad: 22 }, { nombre: "Ana", edad: 28 }]