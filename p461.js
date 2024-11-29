//  Enunciado:
//  Filtrar nombres repetidos y devolver las iniciales
// Dado un arreglo de nombres, elimina duplicados (usando filter), transforma cada nombre único en sus iniciales (usando map) y encuentra el primer nombre que empieza con la letra "A" (usando find).

const nombres = ["Ana", "Carlos", "Ana", "Roberto", "Amalia", "Carlos"];

const filterOutDuplicateNames = (array) => {
    // ELIMINAR DUPLICADOS
   const nombresUnicos = array.filter((valor, indice) => {
        return array.indexOf(valor) === indice
    })

    //transformar en iniciales
    const iniciales = nombresUnicos.map((nombre) =>nombre[0])

    //encontrar el primer nombre
    const firtsName = iniciales.find((word) => word === "A")

    return firtsName
}

console.log(filterOutDuplicateNames(nombres))
// salida:
// "A"