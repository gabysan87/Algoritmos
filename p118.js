// quitar el tiempo
// Descripción de la tarea
// Estás rediseñando un blog y las publicaciones del blog tienen el Weekday Month Day, timeformato para mostrar la fecha y hora en que se realizó una publicación, por ejemplo, Friday May 2, 7pm.

// Se está quedando sin espacio en la pantalla y en algunas páginas desea mostrar un formato más corto Weekday Month Dayque omita la hora.

// Escriba una función que tome la fecha/hora del sitio web en su formato de cadena original y devuelva el formato abreviado.

const shortenToDate = (longDate) => {
  // your code here

  return longDate.split(",")[0];
};

console.log(shortenToDate("Friday May 2, 9am"));
console.log(shortenToDate("Tuesday January 29, 10pm"));
console.log(shortenToDate("Monday December 25, 10pm"));
