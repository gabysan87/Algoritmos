// Escriba la función alternateCase que cambia cada letra de la cadena de superior a inferior y de inferior a superior. Por ejemplo: Hola Mundo -> hOLA mUNDO

const changeLetter = (str) =>{
return str.split("").map((item) => item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()).join("")
}

console.log(changeLetter("Hola Mundo"))