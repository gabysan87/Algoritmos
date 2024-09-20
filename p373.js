// Sumar todos los valores de un objeto


const sumObjectValues = (obj) => {
return Object.values(obj).reduce((acc, curr) => acc + curr,0)
}


console.log(sumObjectValues({a: 1, b: 2, c: 3}));  // 6
console.log(sumObjectValues({x: 10, y: 20, z: 30}));  // 60