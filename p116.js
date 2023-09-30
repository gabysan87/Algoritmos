// repetición de cuerda
// Escriba una función que acepte un número entero ny una cadena scomo parámetros y devuelva una cadena srepetida exactamente nveces.

// Ejemplos (entrada -> salida)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

const repeatStr = (n, s) => {
    return s.repeat(n);;
  }

  console.log(repeatStr(3, "*"));
  console.log(repeatStr(5, "#"));
  console.log(repeatStr(2, "ha "));