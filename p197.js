
// Matriz mixta de suma
// Dada una matriz de números enteros como cadenas y números, devuelve la suma de los valores de la matriz como si todos fueran números.

// Devuelve tu respuesta como un número.

const sumMix = (x)  => {
    return x.reduce((acc, curr) => acc + Number(curr),0)
  }

  console.log(sumMix([9, 3, '7', '3']));
  console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])); 
  console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])); 