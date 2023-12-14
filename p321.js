// / crear una función que reciba un array de strings y una letra como parametro , debe devolver en un nuevo array los strings que comiencen por esa letra

// entrada : [Apple", "Arandano", "Banana", "azucar"], "a"
// salida : [ 'Apple', 'Arandano', 'azucar' ]

// const comiencenPorLetra = (str,letra) => {
// return str.filter((item) => item[0].toLowerCase() === letra )
// }

// console.log(comiencenPorLetra(["Apple", "Arandano", "Banana", "azucar"], "a"))

const letteArray = ["Apple", "Arandano", "Banana", "azucar"];

const comiencenPorLetra = (str, letra) => {
  return str.filter((item) => item[0].toLowerCase() === letra);
};

console.log(comiencenPorLetra(letteArray, "a"));
