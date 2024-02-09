// El caracol sube 7 pies cada día y retrocede 2 pies cada noche.
// ¿Cuántos días tardará el caracol en salir de un pozo con la profundidad dada?

const caracol = (num) => {
    let day = 7
    let night= 2
    const recorrido = day - night
    return Math.ceil(num - night / recorrido)
}

console.log(caracol(37))