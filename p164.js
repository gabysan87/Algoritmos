// 1-Ordenar un array de manera ascendente.

const orderNumber = (arr) => {
    return arr.sort((a,b) => a - b)
}

console.log(orderNumber([3,12,40,20,6]))


// ordenar de forma alfabetica un array

const orderstring = (arr) => {
    return arr.sort((a,b) => a.localeCompare(b))
}
console.log(orderstring(["zapato","ana, mesa,"]))
