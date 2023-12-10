//Ejercicio 11: Obtener autor con más libros
/* Enunciado: Crea una función que devuelva el autor que tiene más libros en un array dado de libros. */

let libros11 = [
    { titulo: "El señor de los anillos", autor: "J.R.R. Tolkien" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    { titulo: "El hobbit", autor: "J.R.R. Tolkien" },
    { titulo: "Crónica de una muerte anunciada", autor: "Gabriel García Márquez" },
    { titulo: "Harry Potter", autor: "J.K. Rowling" },
    { titulo: "El código Da Vinci", autor: "Dan Brown" },
    { titulo: "Ángeles y demonios", autor: "Dan Brown" }
  ];

  const autorConMasLibros = (arr) => {
    return arr.sort((aut1, aut2) => aut1.autor.localeCompare(aut2.autor))
}
  
  console.table(autorConMasLibros(libros11)); // Salida: "J.R.R. Tolkien"