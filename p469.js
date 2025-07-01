// Es par o impar
// Crea una función que reciba un número y devuelva "Es par" o "Es impar".

const esPar = (num) => {
  return num % 2 === 0 ? "Es  par" : "Es impar";
};

console.log(esPar(5));
console.log(esPar(10));

// Dado un numero, crea una función que devuelva "Es positivo" si el número es mayor que cero, "Es negativo" si es menor que cero, y "Es cero" si es igual a cero.

const esPositivoNegativoCero = (num) => {
  if (num > 0) {
    return "Es positivo";
  } else if (num < 0) {
    return "Es negativo";
  } else {
    return "Es cero";
  }
};

console.log(esPositivoNegativoCero(5));
console.log(esPositivoNegativoCero(0));
console.log(esPositivoNegativoCero(-5));

// Mayor de dos números
// Recibe dos números y retorna el mayor.

const numberMayor = (num1, num2) => {
  return Math.max(num1, num2);
};
console.log(numberMayor(10, 20));
console.log(numberMayor(15, 2));

// Saludo personalizado
// Recibe un nombre y retorna "Hola, [nombre]!".
