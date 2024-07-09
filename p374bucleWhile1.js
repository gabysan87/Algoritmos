//Bucle While: Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia

// Ejercicio 1: Suma de los primeros N números naturales
// Enunciado:
// Escribe un programa en JavaScript que pida al usuario un número N y calcule la suma de los primeros N números naturales utilizando un bucle while.

let N = 5;
let suma = 0;
let i = 1;

while (i <= N) {
 
    suma += i; // suma += i: Suma el valor actual de i a suma.
    i++; // i++: Incrementa el contador i en 1 en cada iteración.
    
}

console.log("La suma de los primeros " + N + " números naturales es: " + suma);

// Iteraciones del Bucle while:

// Iteración 1: i = 1, suma = 0 + 1 = 1
// Iteración 2: i = 2, suma = 1 + 2 = 3
// Iteración 3: i = 3, suma = 3 + 3 = 6
// Iteración 4: i = 4, suma = 6 + 4 = 10
// Iteración 5: i = 5, suma = 10 + 5 = 15
