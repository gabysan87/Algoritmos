// Desestructuración de un array:
//    Planteamiento: Tenemos un array con las temperaturas de la semana. Usa la desestructuración para obtener las temperaturas de los primeros tres días y mostrarlas por consola.
//    Entrada:
   
   const temperaturasSemana = [20, 22, 25, 27, 23, 24, 21];

   const result = (arr) => {
    const [p1, p2, p3] = arr
    return [p1, p2, p3] 

//    const [p1, p2, p3, p4, p5, p6, ...resto] = arr
//     return resto
   }
   console.log(result(temperaturasSemana))


//    Desestructuración con valores por defecto:
//    Planteamiento: Tenemos un objeto que representa un usuario con un nombre y una edad. Utiliza la desestructuración para mostrar el nombre y la edad, pero si el objeto no tiene definida la edad, muestra un mensaje predeterminado.
//    Entrada:
   
   const usuario = {
       nombre: 'Ana',
    //    edad: 25
   };

// const searchAge = (obj) => {
// const {nombre, edad = 'Edad no especificada' } = obj
//         return `Nombre: ${nombre}, Edad: ${edad}`
// }

const searchAge = ({nombre, edad = "Edad no especificada"}) => {
            return `Nombre: ${nombre}, Edad: ${edad}`
    }

console.log(searchAge(usuario))
   
//    Salida esperada:
//    Nombre: Ana
//    Edad: Edad no especificada



// Desestructuración con rest operator:
//    Planteamiento: Tenemos un objeto que representa un estudiante con nombre, edad, ciudad y notas. Utiliza la desestructuración junto con el operador rest para obtener el nombre y la edad del estudiante, y el resto de las propiedades en un objeto llamado infoAdicional.
//    Entrada:
      const estudiante = {
       nombre: 'Luis',
       edad: 22,
       ciudad: 'Sevilla',
       notas: [8, 7, 9]
   };
   
const {nombre, edad, ...infoAdicional} = estudiante 

const studentAndAdditionalInformation = ({nombre, edad, ...infoAdicional }) => {
return `Nombre: ${nombre}, Edad: ${edad}, Información adicional: ${JSON.stringify(infoAdicional)}`
}


console.log(studentAndAdditionalInformation(estudiante))


//    Salida esperada:
//    Nombre: Luis
//    Edad: 22
//    Información adicional: { ciudad: 'Sevilla', notas: [8, 7, 9] }