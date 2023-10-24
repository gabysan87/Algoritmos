
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

for (let prop in libro){
    console.log(`La prop ${prop} contiene: ${libro[prop]}`)
}
