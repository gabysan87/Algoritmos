// 1- suma de dos numeros
// Crea una funcion que reciba dos numeros como parametros y devuelva su suma

const suma = (a, b) => {
  return a + b;
};

console.log(suma(5, 3));

// 2 - resta de dos numeros
// crea una funcion que reciba dos numeros como parametros y devuelva el restado de la resta de ambos.

const resta = (a, b) => {
  return a - b;
};

console.log(resta(5, 3));

// 3-multiplicacion de dos numeros
// crea una funcion que reciba dos numeros como parametros y devuelva el resultado de su multiplicacion

const multiplique = (a, b) => {
  return a * b;
};

console.log(multiplique(5, 3));

// 4- Division de dos numeros
// crea una funcion que reciba dos numeros como parametros y devuelva el resultado de su division. Asegurese de verificar si el divisor es 0 para evitar la division por cero.

const division = (a, b) => {
  if (b === 0) {
    return "No se puede dividir entre cero";
  }
  return a / b;
};

console.log(division(6, 3));
console.log(division(6, 0));

// 5- Resto de la division (módulo)
// crear una funcion que reciba dos numeros como parametros y devuelva el resta de la division (módulo)

const modulo = (a, b) => {
  return a % b;
};

console.log(modulo(5, 3));

// 6- Exponenciacion (potencia)
// crear una funcion que reciba dos numeros como parametros: el primero sera la base y el segundo sera el exponente, y devuelva el resultado de la base elevada al exponente.

const exponenciacion = (base, exponente) => {
  return base ** exponente;
};
console.log(exponenciacion(2, 3));

// 7-Incremento y decremento
// demostrar como se utilizan los operadores de incremento (++) y decremento (--) en una variable

let x = 5;
x++;
console.log(x);

let y = 10;
y--;
console.log(y);

//8-Uso combinado de operadores
// crear una funcion que calcule el resultado  de una operacion combinada de suma y multiplicacion, utilizando parentesis para definir el orden de las operaciones.

const calculo = (a, b, c) => {
  return (a + b) * c;
};
console.log(calculo(2, 3, 4));

//9-Operadores de asignacion combinados
//mostrar el  uso de operaciones de asignacion combinados += y *=

let num = 10;
num += 5;
console.log(num);

//10 Promedio
const promedio = (a, b, c) => {
  return (a + b + c) / 3;
};
console.log(promedio(10, 20, 30));

// 11- Area de rectangulo
const area = (base, altura) => {
  return base * altura;
};
console.log(area(10, 2));

//12- Perimetro de un cuadrado
const perimetro = (lado) => {
  return lado * 4;
};

//13-Calculo del area de un circulo 
const areaCirculo = (radio) => {
 return (Math.PI * Math.pow(radio, 2)).toFixed(2)
}
console.log(areaCirculo(7))

