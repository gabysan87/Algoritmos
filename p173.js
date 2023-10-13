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
    