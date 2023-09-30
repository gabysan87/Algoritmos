// Suma de positivos

// Obtienes una serie de números y devuelves la suma de todos los positivos.

// Ejemplo [1,-4,7,12]=>1 + 7 + 12 = 20

// Nota: si no hay nada que sumar, la suma predeterminada es 0.

const positiveSum = (arr)  => {
    let suma = 0;
    arr.forEach((numero) => {
      if (numero > 0) {
        suma += numero;
      }
    });
    return suma;
  }
 


console.log(positiveSum([1,2,3,4,5]))

// declaro una variable con el parametro 0, luego para iterar en cada elemento utilizo el metodo forEach declarando la condicional numero es mayor que 0 para que el nro sea positivo 