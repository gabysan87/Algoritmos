// Ordenar objetos por propiedad:

// Enunciado: Escribe una función que ordene un array de objetos por una propiedad específica.
// Ejemplo de entrada y salida:
// const personas = [
//   { nombre: 'Juan', edad: 30 },
//   { nombre: 'Ana', edad: 25 },
//   { nombre: 'Carlos', edad: 35 }
// ];
// const personasOrdenadas = ordenarPorEdad(personas);
// console.log(personasOrdenadas);
// Salida: [{ nombre: 'Ana', edad: 25 }, { nombre: 'Juan', edad: 30 }, { nombre: 'Carlos', edad: 35 }]/

const person = [
      { nombre: 'Juan', edad: 30 },
      { nombre: 'Ana', edad: 25 },
      { nombre: 'Carlos', edad: 35 }
    ];

const peopleOrdered = person.sort((a,b) => a.edad - b.edad)

console.log(peopleOrdered)