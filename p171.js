// recibe un array de numero y devolver los numeros primos 

const primeNumber = (arr)  => {
    return arr.filter((num) => {
        if (num <=1) return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false
        }
        return true 
    })
}

console.log(primeNumber([1,2,3,4,5,6,7,8,9,10]))