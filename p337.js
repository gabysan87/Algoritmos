// crear una función que reciba un array de strings y una letra como parámetro, debe devolver en un nuevo array los strings que comiencen por esa letra 

// entrada: [Apple", "Arandano", "Banana", "azucar"], "a"
// salida: [ 'Apple', 'Arandano', 'azucar' ]

const newArray = (arr, letter) => {
    return arr.filter((item) => item.toLowerCase()[0] === letter)
}

console.log(newArray(["Apple", "Arandano", "Banana", "azucar"], "a"))