// Eliminar duplicados:

// Enunciado: Escribe una función que elimine los elementos duplicados de un arreglo.
// Ejemplo de Entrada: [1, 2, 2, 3, 4, 4, 5]
// Ejemplo de Salida: [1, 2, 3, 4, 5]

const removeDuplicate = (number) => {
  return [...new Set(number)]
  // const newNumber = new Set(number);

  // return [...newNumber]
};

console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));

// Se utiliza Set para remover duplicados es bastante simple, creamos un nuevo Set basado en el arreglo original utilizando new Set.

// Y finalmente puedes convertir el nuevo Set a un arreglo nuevamente utilizando la sintaxis spread.
