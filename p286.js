//Ejercicio 10: Ordenar libros por autor y título
/* Enunciado: Crea una función que ordene un array de libros por autor y, dentro de cada autor, por título alfabéticamente. */

let libros10 = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    { titulo: "El hobbit", autor: "J.R.R. Tolkien" },
    { titulo: "El señor de los anillos", autor: "J.R.R. Tolkien" },
    { titulo: "Crónica de una muerte anunciada", autor: "Gabriel García Márquez" }
  ];
  
  const ordenarPorAutorYTítulo = (arr) => {
    return arr.sort((title1, title2) => title1.titulo.localeCompare(title2.titulo))
  }
  
  
  console.table(ordenarPorAutorYTítulo(libros10));
  
  //Salida: 
  // [
  //   { titulo: "Crónica de una muerte anunciada", autor: "Gabriel García Márquez" },
  //   { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  //   { titulo: "El hobbit", autor: "J.R.R. Tolkien" },
  //   { titulo: "El señor de los anillos", autor: "J.R.R. Tolkien" }
  // ]
