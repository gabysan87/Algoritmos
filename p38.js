// obtener el valor ascii del personaje
// Obtener el valor ASCII de un carácter.

// Para la tabla ASCII puede consultar http://www.asciitable.com/

const getASCII = (c) => {
   return c.charCodeAt()
  }
 console.log(getASCII('A'))
 console.log(getASCII(' '))
 console.log(getASCII('!'))