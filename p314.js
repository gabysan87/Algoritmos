// Rango de Edades
// Planteamiento: Filtra objetos dentro de un rango específico de edades.

// Entrada:


const personas = [
  { nombre: 'Juan', edad: 20 },
  { nombre: 'Ana', edad: 22 },
  { nombre: 'Carlos', edad: 25 },
  { nombre: 'Luisa', edad: 30 },
  { nombre: 'Luisa', edad: 29 }
];

const result = (arr) => {
 return arr.filter((item) => item.edad >= 22 && item.edad <= 25)
}

console.log(result(personas))


// Salida:
// Filtrar personas entre 22 y 25 años
// [{ nombre: 'Ana', edad: 22 }, { nombre: 'Carlos', edad: 25 }]