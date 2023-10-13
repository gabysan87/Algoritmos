const almuerzos = [
  { principal: "arepa", postre: "helado" },
  { principal: "tacos", postre: "torta de queso" },
  { principal: "pizza", postre: "galletas" },
  { principal: "sushi", postre: "quesillo" },
];

// const platosPrincipales = [];
// for(let i = 0; i < almuerzos.length; i++){
//     platosPrincipales.push(almuerzos[i].principal)
// }
// console.log(platosPrincipales)

// primero declaro un array vacio

// usando el metodo map

const platosPrincipales = almuerzos.map((comida) => {
    return comida.principal
})

console.log(platosPrincipales)

// el metodo map crea un nuevo array 