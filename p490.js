//1-  Crea una función minMax(a, b, c) que devuelva el mayor y el menor de los tres números usando solo if.

const minMax = (a, b, c) => {
  let mayor = a;
  let menor = a;

  //nro. mayor
  if (a >= b && a >= c) {
    mayor = a;
  } else if (b >= a && b >= c) {
    mayor = b;
  } else {
    mayor = c;
  }

  //nro. menor
  if (a <= b && a <= c) {
    menor = a;
  } else if (b <= a && b <= c) {
    menor = b;
  } else {
    menor = c;
  }
  return `Mayor: ${mayor}, Menor: ${menor}`;
};
console.log(minMax(5, 2, 8));
console.log(minMax(2, 4, 1));
console.log(minMax(3, 3, 2));

//2- Contraseña segura
// Crea una función validarPassword(password) que:
// Devuelva "Segura" si tiene al menos 8 caracteres y contiene un número.
// Devuelva "Insegura" en caso contrario.

const validatePassword = (password) => {
  const containsNumber = /\d/.test(password);
  if (password.length >= 8 && containsNumber) {
    return "Segura";
  } else {
    return "Insegura";
  }
};
console.log(validatePassword("hola11234"));
console.log(validatePassword("holaaaa"));

//3-  Juego de adivinanza
// Crea una función adivinarNumero(numeroUsuario) que:
//Compare numeroUsuario con un número secreto (definido en la función).
// Devuelva "Acertaste" si son iguales.
// Devuelva "Demasiado alto" si el número del usuario es mayor.
// Devuelva "Demasiado bajo" si es menor.

const secretNumber = 7;
const guessNumber = (userNumber) => {
  if (userNumber === secretNumber) {
    return "Acertaste";
  } else if (userNumber > secretNumber) {
    return "Demasiado alto";
  } else {
    return "Demasiado bajo";
  }
};
console.log(guessNumber(5));
console.log(guessNumber(7));
console.log(guessNumber(6));
console.log(guessNumber(10));

//4- Crea una función calcularDescuento(totalCompra, tipoCliente) que:
// Si el tipoCliente es "premium", aplica un 20% de descuento.
// Si es "regular":
// Si la compra es mayor o igual a $1000, aplica 10% de descuento.
// Si no, aplica 5% de descuento.
// Si es otro tipo, no aplica descuento.

const calculateDiscount = (totalPurchase, customerType) => {
  if (customerType === "premium") {
    return totalPurchase - totalPurchase * 0.2;
  } else if (customerType === "regular") {
    if (totalPurchase >= 1000) {
      return totalPurchase - totalPurchase * 0.1;
    } else {
      return totalPurchase - totalPurchase * 0.05;
    }
  } else {
    return totalPurchase;
  }
};

console.log(calculateDiscount(1500, "premium"));
console.log(calculateDiscount(1200, "regular"));
console.log(calculateDiscount(800, "regular"));
console.log(calculateDiscount(500, "inivitado"));

// 5-Crea una función cajero(saldo, monto, operacion) que:
// Si la operacion es "deposito", suma el monto al saldo y devuelve el nuevo saldo.
// Si es "retiro":
// Si el monto es menor o igual al saldo, resta y devuelve el nuevo saldo.
// Si es mayor, devuelve "Fondos insuficientes".
// Si la operación no es válida, devuelve "Operación inválida".

const cajero = (saldo, monto, operacion) => {
  if (operacion === "deposito") {
    return monto + saldo;
  } else if (operacion === "retiro") {
    if (monto <= saldo) {
      return saldo - monto;
    } else {
      return "Fondos insuficientes";
    }
  } else {
    return "Operación inválida";
  }
};
console.log(cajero(100, 200, "deposito"));
console.log(cajero(200, 300, "retiro"));
console.log(cajero(300, 100, "retiro"));
console.log(cajero(100, 200, "transferencia"));

// 6- Crea una función tipoTriangulo(a, b, c) que:
// Verifique si los lados forman un triángulo válido (la suma de dos lados siempre mayor que el tercero).
// Si es válido:
// Devuelva "Equilátero" si los tres lados son iguales.
// Devuelva "Isósceles" si solo dos lados son iguales.
// Devuelva "Escaleno" si todos son diferentes.
// Si no es válido, devuelve "No es un triángulo".

const triangleType = (a, b, c) => {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "No es un triangulo";
  } else if (a === b && b === c) {
    return "Equilátero";
  } else if (a === b || a === c || b === c) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }
};
console.log(triangleType(5, 5, 5));
console.log(triangleType(5, 5, 3));
console.log(triangleType(4, 5, 6));
console.log(triangleType(1, 2, 5));
