
// Matrices de suma

// Escribe una función que tome una matriz de números y devuelva la suma de los números. Los números pueden ser negativos o no enteros. Si la matriz no contiene ningún número, entonces deberías devolver 0.

// Ejemplos
// Entrada: [1, 5.2, 4, 0, -1]
// Salida:9.2

// Entrada: []
// Salida:0

// Entrada: [-2.398]
// Salida:-2.398

// Suposiciones
// Puedes asumir que solo te dan números.
// No puede asumir el tamaño de la matriz.
// Puede asumir que obtiene una matriz y, si la matriz está vacía, devuelve 0.
// Lo que estamos probando
// Estamos probando bucles básicos y operaciones matemáticas. Esto es para principiantes que recién están aprendiendo bucles y operaciones matemáticas.
// Los usuarios avanzados pueden encontrar esto extremadamente fácil y pueden escribirlo fácilmente en una línea.

// Sum Numbers
const sum = (numbers) => {

   return numbers.reduce((acc, curr) => acc + curr, 0)
    
};

console.log(sum([]));
console.log(sum([1, 5.2, 4, 0, -1]));