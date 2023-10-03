// regresar el dia
// Complete la función que devuelve el día de la semana según el número ingresado:
// 1 devoluciones"Sunday"
// 2 devoluciones"Monday"
// 3 devoluciones"Tuesday"
// 4 devoluciones"Wednesday"
// 5 devoluciones"Thursday"
// 6 devoluciones"Friday"
// 7 devoluciones"Saturday"
// De lo contrario regresa"Wrong, please enter a number between 1 and 7"

const whatday = (num) => {
  switch (num) {
    case 1:
      return "Sunday";
      break;
    case 2:
      return "Monday";
      break;
    case 3:
      return "Tuesday";
      break;
    case 4:
      return "Wednesday";
      break;
    case 5:
      return "Thursday";
      break;
    case 6:
      return "Friday";
      break;
    case 7:
      return "Saturday";
      break;

    default:
      return "Wrong, please enter a number between 1 and 7";

    // let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // return days[num - 1] || 'Wrong, please enter a number between 1 and 7';
  }
};
console.log(whatday(1));
console.log(whatday(2));
console.log(whatday(3));
console.log(whatday(8));
console.log(whatday(20));
