// Crea un array de objetos que representen libros. Cada objeto debe tener propiedades como "título", "autor" y "año de publicación". Luego, utiliza un método para encontrar el libro más antiguo en el array y imprimir su título y año de publicación en la consola.

//Ejemplo de entrada:

const books = [
  { título: "1984", autor: "George Orwell", año: 1949 },
  { título: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967 },
  { título: "El viejo y el mar", autor: "Ernest Hemingway", año: 1952 },
  { título: "Matar a un ruiseñor", autor: "Harper Lee", año: 1960 }
]

const sheare = (a, b) => a.año - b.año
const sheareBook = (arr) => {
//     const {autor, ...objectFound} = arr.sort(sheare)[0]
// return objectFound
const {título, año} = arr.sort(sheare)[0]
return {título, año} 
    }

const sheareBooksReduce = (arr) => { 
return arr.reduce((acc,item) => { 
    acc = acc.año < item.año ? acc : item
   const {título, año} = acc
   return {título, año} 
})
}

console.log(sheareBooksReduce(books))
console.log(sheareBook(books))


// Ejemplo de salida:

// { título: "1984", autor: "George Orwell", año: 1949 }