// Ejercicio 5: Fusionar arrays de objetos
// Planteamiento:
// Dada una lista de arrays de objetos, fusiona todos los objetos en un solo array.

const array1 = [{ id: 1, nombre: 'Juan' }];
const array2 = [{ id: 2, nombre: 'María' }, { id: 3, nombre: 'Carlos' }];

const fusionarArrays = (arr1, arr2) => {
    // return [...arr1, ...arr2]
    return arr1.concat(arr2)
}

console.log(fusionarArrays(array1, array2))