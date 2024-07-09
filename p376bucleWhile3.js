//Ejercicio 3: Factorial de un número
// Enunciado:
// Escribe un programa en JavaScript que pida al usuario un número entero positivo N y calcule su factorial utilizando un bucle while.

let number = 5;
let factorial = 1; //Almacena el resultado del cálculo del factorial. Inicialmente, se establece en 1 porque el factorial de 0 es 1
let i = 1; //Es un contador que comienza en 1 y se incrementa en cada iteración del bucle while

while (i <= number) {
    factorial *= i; //Multiplica el valor actual de factorial por i y actualiza factorial.
    i++;
}

console.log("El factorial de " + number + " es: " + factorial);

//Iteraciones del Bucle while:

// Iteración 1: i = 1, factorial = 1 * 1 = 1
// Iteración 2: i = 2, factorial = 1 * 2 = 2
// Iteración 3: i = 3, factorial = 2 * 3 = 6
// Iteración 4: i = 4, factorial = 6 * 4 = 24
// Iteración 5: i = 5, factorial = 24 * 5 = 120