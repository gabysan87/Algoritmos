// Ordenar baraja de cartas
// Escriba una función sort_cards()que ordene una lista barajada de cartas, de modo que cualquier lista de cartas dada se ordene por rango, sin importar la colección inicial.

// Todas las tarjetas de la lista se representan como cadenas, por lo que la lista ordenada de tarjetas se ve así:

// ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']

// Ejemplo:

// >>> sort_cards(['3', '9', 'A', '5', 'T', '8', '2', '4', 'Q', '7', 'J', '6', 'K'])
// ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']
// Sugerencia: Las pruebas tendrán muchas apariciones de tarjetas del mismo rango, además de variar en duración. Sin embargo, puedes asumir que esa lista de entrada siempre tendrá al menos 1 elemento.

const sortCards = (array) => {

  let ideal = "A23456789TJQK";
  return array.sort((a,b) => {
    return ideal.indexOf(a) - ideal.indexOf(b)
  })
     
}

console.log(sortCards([3,9,"A",5,"T",8,2,4,"Q",7,"J",6,"K"]))
console.log(sortCards(["J","J",2,"T",9,6]),([2,6,9,"T","J","J"]));
console.log(sortCards(["A",2,3,4,5,6,6,7,8,9,"T","J","Q","A"]))