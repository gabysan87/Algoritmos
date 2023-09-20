// Desarrolla un programa que determine si un año ingresado es bisiesto o no.

const leapYear = (age) => {
if ((age % 4 === 0 && age % 100 !== 0) || age / 400 === 0) {
    return "El año es bisiesto"
}
else {
    return "El año no es bisiesto"
}
}

console.log(leapYear(1987))
console.log(leapYear(2020))