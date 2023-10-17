// Buscar un elemento en un arreglo: Crea un programa que busque un elemento en específico en un arreglo y muestre el elemento

// Entrada ([1,2,3,4,20], 20))
// Salida 20

const searchForAnElement = (arr, num) => {
  let search = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return arr[i];
    }
  }
};

console.log(searchForAnElement([1, 2, 3, 4, 20], 20));
