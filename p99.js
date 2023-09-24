// /En este kata, crearemos una función para probar si un período se retrasa.

// Nuestra función tomará tres parámetros:

// último: el objeto Fecha con la fecha del último período

// hoy: el objeto Fecha con la fecha del cheque

// CycleLength: número entero que representa la duración del ciclo en días.

// Devuelve verdadero si el número de días transcurridos desde el último hasta hoy es mayor que la longitud del ciclo. De lo contrario, devuelve falso./

const periodIsLate = (last, today, cycleLength) => {
    const resultDay =  today - last //resultado en milisegundos
    const diasTranscurridos = resultDay/(24 * 60 * 60 * 1000)//horas,minutos*hora,segundos,milisegundos
    return Math.round(diasTranscurridos) > cycleLength
  }
 
console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35))


//EJEMPLO MDN:
const date = new Date();//Obligatorio debo tener estas propiedades a la clase date (para invocar o instanciar)
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];

console.log(date.getMonth()+1)
console.log(date.getDate())
console.log(date.getFullYear())

const [hour, minutes, seconds] = [
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
];

console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())


//EJEMPLO PEDRO
const fecha = new Date();
const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);

console.log(fechaFormateada)