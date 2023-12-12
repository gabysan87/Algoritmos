// Ejercicio 5: Eliminar duplicados
// Planteamiento: Elimina objetos duplicados de un array basándote en una propiedad.
// Entrada
const estudiantes = [
    { nombre: 'Marta', codigo: '001' },
    { nombre: 'Juan', codigo: '002' },
    { nombre: 'Marta', codigo: '001' }
  ];
  const result = (arr) => {
    return [...new Set(arr)]
  }

  console.log(result(estudiantes))
  // Salida
  // Eliminar duplicados por código
  // [{ nombre: 'Marta', codigo: '001' }, { nombre: 'Juan', codigo: '002' }]