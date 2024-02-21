// Cree una función que siempre devuelva verdadero para cada elemento de una lista determinada. Sin embargo, si un elemento es la palabra "flick", cambie para devolver siempre el valor booleano opuesto.
// entrada : ["flick", "rata", "flick", "chocolate"]


const listItem = (arr) => {
    return arr.map((element) => element !== "flick")
}

console.log(listItem(["flick", "rata", "flick", "chocolate"]))