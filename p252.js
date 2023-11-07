// Encontrar valores máximos y mínimos de una lista
// Su tarea es crear dos funciones ( max y min, o maximum y minimum, etc., según el idioma) que reciban una lista de números enteros como entrada y devuelvan el número más grande y más bajo de esa lista, respectivamente.

// Ejemplos (Entrada -> Salida)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notas
// Puede considerar que no habrá matrices/vectores vacíos.

const min = function(list){
    
    return Math.min(...list);
}

const max = function(list){
    
    return Math.max(...list);
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(min([42, 54, 65, 87, 0]));
console.log(max([4,6,2,1,9,63,-134,566]));