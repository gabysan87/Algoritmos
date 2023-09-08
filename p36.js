// FIXME: Reemplazar todos los puntos
// // 
// Se supone que el código proporcionado reemplaza todos los puntos .en la cadena especificada str con guiones-

// Pero no funciona correctamente.

// Tarea
// Corrija el error para que todos podamos irnos a casa temprano.

// Notas
// La cadena str nunca será nula.

const replaceDots = (str) => {
    // return str.replace(/[.]/g, "-")
    return str.replaceAll(".", "-")
  }

  console.log(replaceDots("one.two.three"))