// Encontrar la cadena más larga en un array de cadenas de texto y mostrar su índice: - Entrada: ["uva", "plátano", "sandía", "kiwi"] - Salida: {cadenaMasLarga: "sandía", indice: 2}

const longestChain = ["uva", "plátano", "sandía", "kiwi"];

const result = (str) => {
  let fruitsFind = str.reduce((acc, curr) =>
    acc.length > curr.length ? acc : curr
  );
  let indexFruit = str.indexOf(fruitsFind);

  return {
    cadenaMasLarga: fruitsFind,
    indice: indexFruit,
  };
};

console.log(result(longestChain));

// Calcular el promedio de cada columna en una matriz de números y mostrar los resultados en un nuevo array:  Entrada: [[2, 3, 4], [1, 2, 3], [5, 6, 7]] Salida: [2.67, 3.67, 4.67]

const calculateAverage = [
  [2, 3, 4],
  [1, 2, 3],
  [5, 6, 7],
];

const resultAverage = (array) => {
  return array.map(
    (item) => item.reduce((acc, curr) => acc + curr, 0) / item.length
  );
};

console.log(resultAverage(calculateAverage));

// Su trabajo es devolver una única matriz que tenga primero los números ordenados en orden ascendente, seguidos de las cadenas ordenadas en orden alfabético. Los valores deben mantener su tipo original.
// Tenga en cuenta que los números escritos como cadenas son cadenas y deben ordenarse con las otras cadenas. Entrada: ["Banana", "Orange", "Apple", "Mango", 0, 2, 2]. Salida: [ 0, 2, 2, 'Apple', 'Banana', 'Mango', 'Orange' ]

const orderArray = ["Banana", "Orange", "Apple", "Mango", 6, 0, 20, 2, 3, 5];

const resultOrder = (arr) => {
  let numberOrder = arr.filter((num) => typeof num === "number").sort((num1, num2) => num1 - num2);

  let letterOrder = arr.filter((item) => typeof item === "string").sort((a, b) => a.localeCompare(b));

  return [...numberOrder, ...letterOrder];
};

console.log(resultOrder(orderArray));
