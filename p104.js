// Validación de objeto:

// Enunciado: Crea una función que valide si un objeto tiene todas las propiedades requeridas.
// Ejemplo de entrada y salida:
// const persona = { nombre: "Juan", edad: 30, ciudad: "Madrid" };
// const propiedadesRequeridas = ["nombre", "edad", "ciudad"];
// const valido = validarObjeto(persona, propiedadesRequeridas);
// console.log(valido); // Salida: true/

const persona = { nombre: "Juan", edad: 30, ciudad: "Madrid" };

// if ("nombre", "edad", "ciudad" in persona) {
//     return true
//     }
//     else{
//         return false
//     }
//     console.log(persona)

const validarObjeto = (objeto, propiedadesRequeridas) => {
  for (let i = 0; i < propiedadesRequeridas.length; i++) {
    const propiedad = propiedadesRequeridas[i];
    if (!objeto.hasOwnProperty(propiedad)) {
      return false; // El objeto no tiene la propiedad requerida
    }
  }
  return true; // Todas las propiedades requeridas están presentes en el objeto
};
//   La función validarObjeto recibe dos argumentos: el objeto que quieres validar (objeto) y un array de propiedades requeridas (propiedadesRequeridas). Luego, recorre el array de propiedades requeridas y verifica si cada propiedad existe en el objeto utilizando hasOwnProperty(). Si encuentra alguna propiedad que falta en el objeto, la función devuelve false. Si todas las propiedades requeridas están presentes, la función devuelve true.

//   En el ejemplo proporcionado, el objeto persona tiene todas las propiedades requeridas, por lo que la función devuelve true.
