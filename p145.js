// recibe un arreglo de letras y devolver el mismo arreglo sin duplicado

const letterNoDuplicate = (array) => {
    let indicador = array.filter((valor, indice, arreglo) => arreglo.indexOf(valor) !== indice);

    return array.filter((item, indx)=> item !== indicador[0])
}
  

console.log(letterNoDuplicate(["a", "b", "c", "a", "b", "d"]));
console.log(letterNoDuplicate(["andrea"]))
