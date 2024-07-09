// Ordenar mis libros de texto
// ¡AYUDA! ¡Jason no puede encontrar su libro de texto! Faltan dos días para la fecha del examen y ¡los libros de texto de Jason están todos desordenados! Ayúdelo a ordenar una lista (ArrayList en java) llena de libros de texto por tema, para que pueda estudiar antes del examen.

// La clasificación NO debe distinguir entre mayúsculas y minúsculas.

const sorter = (textbooks) => {
    return textbooks.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1)
}

console.log(sorter(["Algebra", "History", "Geometry", "English"]))
console.log(sorter(['Alg#bra', '$istory', 'Geom^try', '**english']))