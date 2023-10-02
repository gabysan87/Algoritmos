// regresar el dia

// Complete la función que devuelve el día de la semana según el número ingresado:

// 1devoluciones"Sunday"
// 2devoluciones"Monday"
// 3devoluciones"Tuesday"
// 4devoluciones"Wednesday"
// 5devoluciones"Thursday"
// 6devoluciones"Friday"
// 7devoluciones"Saturday"
// De lo contrario regresa"Wrong, please enter a number between 1 and 7"

const whatday = (num) => {
  if (num === 1) {
    return "Sunday";
  }
  if (num === 2) {
    return "Monday";
  }
  if (num === 3) {
    return "Tuesday";
  }
  if (num === 4) {
    return "Wednesday";
  }
  if (num === 5) {
    return "Thursday";
  }
  if (num === 6) {
    return "Friday";
  }
  if (num === 7) {
    return "Saturday";
  } else {
    return "Wrong, please enter a number between 1 and 7";
  }
};

console.log(whatday(1));
console.log(whatday(2));
console.log(whatday(3));
console.log(whatday(8));
console.log(whatday(20));
