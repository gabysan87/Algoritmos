// Quitar signos de exclamación
// Función de escritura RemoveExclamationMarks que elimina todos los signos de exclamación de una cadena determinada.

const removeExclamationMarks = (s) => {
    return s.replace(/!/g, '')
  }

  console.log(removeExclamationMarks("Hello World!"))

//   utilizo el metodo replace Busca un patrón en una cadena y devuelve una cadena donde se reemplaza la primera coincidencia y luego una expresión regular /!/g La barra inclinada hacia adelante (/) indica el inicio de la expresión regular, ! representa el signo de exclamación que deseas eliminar y g significa "global", lo que indica que se deben reemplazar todas las ocurrencias de ! en la cadena.