// Usa rest para encerrar el resto de valores específicos proporcionados por el usuario en un arreglo:
const miBio = (primerNombre, apellido, ...otraInfo) => { 
    return otraInfo;
  }

  console.log(miBio("Oluwatobi", "Sofela", "CodeSweetly", "Desarrollo Web", "Hombre"))


//   Ahora, considere este ejemplo de un operador spread:
  // Define una función con tres parámetros:
const miBios = (primerNombre, apellido, empresa) => { 
    return `${primerNombre} ${apellido} dirije ${empresa}`;
  }
  
  // Utiliza spread para expandir los elementos de un arreglo en argumentos individuales:
  console.log(miBios(...["Oluwatobi", "Sofela", "CodeSweetly"]))
  

  // Define un objeto de desestructuración con dos variables regulares y una variable rest:
  
const { primerNombre, apellido, ...otraInfo } = {
    primerNombre: "Oluwatobi",
    apellido: "Sofela", 
    nombreEmpresa: "CodeSweetly",
    profesion: "Desarrollo Web",
    genero: "Hombre"
  }

// Invoca la variable otraInfo:
console.log(otraInfo);


