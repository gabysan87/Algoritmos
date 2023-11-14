// Adición Array2Binary

// Dada una matriz que contiene solo números enteros, suma todos los elementos y devuelve el equivalente binario de esa suma.

// Si la matriz contiene algún elemento no entero (por ejemplo, un objeto, un flotante, una cadena, etc.), devuelve falso.

// Nota: La suma de una matriz vacía es cero.

// arr2bin([1,2]) == '11'
// arr2bin([1,2,'a']) == false

const arr2bin = (arr) => {
  //GET STARTED
  if (arr.some((element) => typeof element !== "number")) {
    return false;
  } else {
    return arr.reduce((acc, curr) => acc + curr, 0).toString(2);
  }
};

console.log(arr2bin([1, 2]));
console.log(arr2bin([1, 2, 3, 4, 5]));
console.log(arr2bin([1, 10, 100, 1000]));
console.log(arr2bin([1, 2, "a"]));
