
// Interruptor de movimiento

// Tarea
// Cree una función que siempre regrese truepara cada elemento de una lista determinada. Sin embargo, si un elemento es la palabra "flick" , cambie para devolver siempre el valor booleano opuesto.

// Ejemplos
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
// Notas
// "flick" siempre se escribirá en minúsculas.
// Una lista puede contener varias películas.
// Cambie el valor booleano en el mismo elemento que el propio movimiento.

const flickSwitch = (arr) => {
    let returning = true;
    return arr.map(item =>{
        return (item === 'flick') ? returning = !returning : returning
    })

}
console.log(flickSwitch(["codewars", "flick", "code", "wars"]))