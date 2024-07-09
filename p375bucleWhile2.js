
// Ejercicio 2: Contar dígitos de un número
// Enunciado:
// Escribe un programa en JavaScript que pida al usuario un número entero y cuente cuántos dígitos tiene utilizando un bucle while

let num = 12345;
let i = 0; // Almacena el conteo de los dígitos del número. Inicialmente, se establece en 0.

while (num != 0) {
    num = Math.floor(num / 10); // Divide el número por 10 y toma la parte entera de la división. Este paso elimina el último dígito del número.
    i++; //Incrementa el contador de dígitos en 1 en cada iteración
}

console.log("El número tiene " + i + " dígitos.");


//Iteraciones del Bucle while:

// Iteración 1: numero = Math.floor(12345 / 10) = 1234, digitos = 0 + 1 = 1
// Iteración 2: numero = Math.floor(1234 / 10) = 123, digitos = 1 + 1 = 2
// Iteración 3: numero = Math.floor(123 / 10) = 12, digitos = 2 + 1 = 3
// Iteración 4: numero = Math.floor(12 / 10) = 1, digitos = 3 + 1 = 4
// Iteración 5: numero = Math.floor(1 / 10) = 0, digitos = 4 + 1 = 5