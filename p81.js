// Dividir un array en partes:

// Enunciado: Escribe una función que divida un array en partes más pequeñas de un tamaño específico.
// Ejemplo de entrada y salida:
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const partes = dividirArray(numeros, 3);
// console.log(partes);
// Salida: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]/

const splitArray = (arr, partes) => {
  const longitudParte = arr.length / partes;
  const result = [];
  for (let i = 0; i < arr.length; i += longitudParte) {
    result.push(arr.slice(i, i + longitudParte));
}
return result;
};


console.log(splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
