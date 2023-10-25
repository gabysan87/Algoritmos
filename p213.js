
const libro = {
    titulo: "Aprendiendo JavaScript",
    autor: "Carlos Azaustre",
    numPaginas: 100,
    editorial: "carlosazaustre.es",
    precio: "24,90",
  };
  
//   Usando forEach
//   const props = Object.getOwnPropertyNames(libro);
//   props.forEach(name => {
//     let valor = Object.getOwnPropertyDescriptor(libro, name).value
//     console.log(`La prop ${name} contiene: ${valor}`)
//   })

//For In

// for (let prop in libro){
//     console.log(`La prop ${prop} contiene: ${libro[prop]}`)
// }

//acceder a propiedades con punto y array 
console.log(libro.titulo)
console.log(libro["titulo"])

// cambio el valor de una propiedad
libro.titulo = "Desarrollo Web con React"
console.log(libro.titulo)

// crear un variable
let pages = "numPaginas";
console.log(libro[pages])
console.log(libro)
