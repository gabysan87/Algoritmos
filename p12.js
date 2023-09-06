// 2 Planteamiento: Verificar si un número es par o impar.
// Entrada: Un número entero.
// Salida: "Es par" si el número es divisible por 2, o "Es impar" si no lo es.

const verifyNumber = (num) => {
// return num % 2 === 0 ? "Es par" : "Es impar" 
    if (num % 2 === 0) {
      return "Es par";
    } else  {
      return "Es impar";
    }
  }

  console.log(verifyNumber(10));
  console.log(verifyNumber(5))

  