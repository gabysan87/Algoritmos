// numero factorial

const factorial = (num) => {
let result = 1
for (let i = 1; i <= num; i++){
    result = result * i
}
return result
}

console.log(factorial(5))


// otra opcion para resolver Factorial 
const factorial2 = (num) => {
    if (num < 2) return 1;
    return num * factorial(num -1)
}
console.log(factorial2(5))
    

//CON EL BUCLE WHILE

const factorialWhile = (num) => {
    let result = 1;
    let i = 1;
    while (i <= num) {
        result *= i;
        i++;
    }
    return result;
}

console.log(factorialWhile(5));  // Output: 120
