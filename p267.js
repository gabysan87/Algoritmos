// dado un array de numeros enteros la suma de todo los elementos pares

const numberPar = [1,2,3,4,5,6]

const sumNum = (arr) => {
    // return arr.filter((item) => item % 2 === 0).reduce((acc,curr) => acc + curr)
    return arr.reduce((acc, item)=>(acc += item % 2 === 0 && item),0)
}

console.log(sumNum(numberPar))


// dado un string determinar si es palindromo

const result = (str) => {
    return str.split("").reverse().join("") === str

//     const arr=str.split(' ')
//   if(arr===arr.reverse()){
//    return true
//   }
}

console.log(result("radar"))

// dado un numero entero invierte el numero entero 

const numberInver = [1,2,3,4,5]

const result2 = (num) => {
return num.reverse()
}

console.log(result2(numberInver))

 

const invert = (num) => {
return +num.toString().split("").reverse().join("")
// return Number(String(number).split('').reverse().join(''))
}

console.log(invert(12345))