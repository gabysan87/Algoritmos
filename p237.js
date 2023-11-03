// escribir una funcion que reciba un array de animales como parametros y una letra, debe devolver en un nuevo array los animales que comiencen con esa letra especifica

// entrada: ["oso", "aguila", "alcabaran", "pollo"], "a"

// salida: [ 'aguila', 'alcabaran' ]
 
const arrayOfAnimals = (arr, letter) => {

    return arr.filter((item) => item[0].toLowerCase() === letter)

}

console.log(arrayOfAnimals(["oso", "Aguila", "alcabaran", "pollo"], "a"))