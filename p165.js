// Comprobar numeros primos.

    const primeNumbers = (num) => {
        if(num<=1) return false
        for(let i=2; i<=Math.sqrt(num); i++){
            if(num % i === 0)return false
        }
        return true
    }


console.log(primeNumbers([1,2,3,4,5,6,7,8,9]))


//Extraer los numeros primos:
// verificar en un array de numeros cuales son numeros primos 


const numberPrime = (num) => {

return num.filter((item) => {
    for (let i = 2; i < item; i++) {
        if (item % i === 0) {
        return false;
        }
    }
    return item !== 1;
    }
);
}
console.log(numberPrime([2, 4, 7, 9, 11, 15, 16, 17, 18])) // [2, 7, 11, 17]