// Buscar elemento en un array de objetos:

// Enunciado: Escribe una función que busque un elemento en un array de objetos por una propiedad específica y devuelva el objeto encontrado.
// Ejemplo de entrada y salida:
//   const estudianteEncontrado = buscarEstudiantePorId(estudiantes, 2);
//   console.log(estudianteEncontrado);
  // Salida: { id: 2, nombre: 'María' }/

  const student = [
    { id: 1, nombre: 'Luis' },
    { id: 2, nombre: 'María' },
    { id: 3, nombre: 'Ana' }
  ];

  const studentFound =  (arr, search) => arr.find((item) => item.id === search)

  console.log(studentFound(student, 2))