//Ejercicio 4: Imprimir números pares hasta N
// Enunciado:
// Escribe un programa en JavaScript que pida al usuario un número entero N y muestre todos los números pares desde 1 hasta N utilizando un bucle while.
let N = 10;
let i = 1;

console.log("Números pares hasta " + N + ":");
while (i <= N) {
    if (i % 2 == 0) { //Dentro del bucle, esta condición verifica si i es un número par (es decir, si el resto de dividir i por 2 es 0).
        console.log(i);
    }
    i++; //Si i es par, se imprime el valor de i.
}

//Iteraciones del Bucle while:

// Iteración 1: i = 1, no imprime (1 no es par)
// Iteración 2: i = 2, imprime 2
// Iteración 3: i = 3, no imprime (3 no es par)
// Iteración 4: i = 4, imprime 4
// Iteración 5: i = 5, no imprime (5 no es par)
// Iteración 6: i = 6, imprime 6
// Iteración 7: i = 7, no imprime (7 no es par)
// Iteración 8: i = 8, imprime 8
// Iteración 9: i = 9, no imprime (9 no es par)
// Iteración 10: i = 10, imprime 10

//Resumen del Proceso:
// El usuario introduce un número N.
// El programa inicializa un contador i en 1.
// Imprime una línea inicial indicando que se mostrarán los números pares hasta N.
// Utiliza un bucle while para iterar desde 1 hasta N.
// Dentro del bucle, verifica si i es par y, si es así, imprime i.
// Incrementa i en cada iteración.
// El bucle se detiene cuando i es mayor que N.
// Finalmente, el programa imprime todos los números pares desde 1 hasta N.
