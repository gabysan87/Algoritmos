// Ejercicio 7: Combinar objetos
// Planteamiento: Combina dos arrays de objetos en uno solo.

// Entrada
const estudiantesA = [{ nombre: 'Ana', edad: 20 }, { nombre: 'Carlos', edad: 22 }];
const estudiantesB = [{ nombre: 'Luisa', edad: 21 }, { nombre: 'Miguel', edad: 23 }];

const combineArray = (arr1, arr2) => {
    return [...arr1, ...arr2]
}
console.table(combineArray(estudiantesA,estudiantesB))

// Salida
// Combinar los dos arrays en uno solo
// [{ nombre: 'Ana', edad: 20 }, { nombre: 'Carlos', edad: 22 }, { nombre: