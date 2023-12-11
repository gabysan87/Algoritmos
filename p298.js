// Ejercicio 2: Ordenar por propiedad
// Planteamiento: Ordena un array de objetos según una propiedad dada.
// Entrada
const libros = [
    { titulo: 'JavaScript', paginas: 300 },
    { titulo: 'HTML & CSS', paginas: 200 },
    { titulo: 'React', paginas: 450 }
  ];
// Salida
// Ordenar libros por número de páginas de forma ascendente
// [{ titulo: 'HTML & CSS', paginas: 200 }, { titulo: 'JavaScript', paginas: 300 }, { titulo: 'React', paginas: 450 }]

const sortBooksAscending = (arr) => {
return arr.sort((libro1,libro2) => libro1.paginas - libro2.paginas)
}
 console.table(sortBooksAscending(libros))
 