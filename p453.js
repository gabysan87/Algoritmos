// Formatear Fechas a Estilo Amigable
// Enunciado: Dado un arreglo de fechas en formato ISO (ej. 2022-01-01), crear un nuevo arreglo donde cada fecha esté en un formato más amigable, como "Día Mes Año". Además, agregar el índice de cada fecha como prefijo.

// Ejemplo de Entrada: ["2022-01-01", "2022-02-14", "2022-12-31"]


const formatDate = (arr) => {
    const monthNames = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    return arr.map((item, index) => {
        const [año, mes, dia] = item.split("-");
      return  `${index}: ${dia} ${monthNames[mes -1]} ${año}`
    })
}
console.log(formatDate(["2022-01-01", "2022-02-14", "2022-12-31"]))

// Ejemplo de Salida: ["0: 01 Enero 2022", "1: 14 Febrero 2022", "2: 31 Diciembre 2022"]