// Escriba un programa que muestre los n primeros elementos de una lista.
// Ejemplo
// largest(2, [7,6,5,4,3,2,1])
// => [6,7]


//divide y venceras
//1- ordenar de  menor a mayor
//2- lo corto con el metodo slice(tomo lo que necesito)
//3- se toma la longitud -el argumento n


const largestElement = (n, arr) => {
return arr.sort((a,b) => a - b).slice(arr.length - n)
};

console.log(largestElement(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(largestElement(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(largestElement(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5]));
console.log(largestElement(3, [5, 1, 5, 2, 3, 1, 2, 3, 5]));
console.log(largestElement(7, [9, 1, 50, 22, 3, 13, 2, 63, 5])); 
