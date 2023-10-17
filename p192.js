// Crear una función que reciba un array de número como parámetro, devolver un nuevo array con solo los números pares, utilizando un bucle for.

const arrNumber = (num) => {
  let result = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0){
        result.push(num[i])
    }
  }
  return result
};

console.log(arrNumber([1, 2, 3, 4, 5]))
