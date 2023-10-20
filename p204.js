// Encontrar el número más grande : Encuentra el número más grande en un arreglo de números utilizando un bucle for

const numberGrand = (number) => {
    let result = []
for (let i = 0; i < number.length; i++){
    if (number[i] > result) {
        result = number[i]
}
}
return result
}

console.log(numberGrand([15,26,5,6,10,30,50]))