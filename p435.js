// Supongamos que tienes una lista de personas y quieres filtrar las que tienen más de 30 años y ordenarlas alfabéticamente por su nombre.

// Definimos un array de objetos llamado 'personas'. Cada objeto representa a una persona con propiedades 'nombre' y 'edad'.
const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Ana', edad: 32 },
    { nombre: 'Luis', edad: 28 },
    { nombre: 'María', edad: 35 },
    { nombre: 'Pedro', edad: 40 }
  ];
  
  // Filtramos las personas que tienen más de 30 años.
  // El método 'filter()' crea un nuevo array con todos los elementos que cumplan la condición proporcionada por la función.
  const mayoresDe30 = personas.filter(persona => persona.edad > 30);
  
  // Ordenamos el array filtrado alfabéticamente por nombre.
  // El método 'sort()' ordena los elementos del array. Comparamos las propiedades 'nombre' de cada objeto.
  mayoresDe30.sort((a, b) => {
    // 'localeCompare()' compara dos cadenas en un orden alfabético localmente sensible.
    return a.nombre.localeCompare(b.nombre);
  });
  
  // Mostramos el resultado final en la consola.
  console.log(mayoresDe30);
  
  /*
    Salida esperada:
    [
      { nombre: 'Ana', edad: 32 },
      { nombre: 'María', edad: 35 },
      { nombre: 'Pedro', edad: 40 }
    ]
  */
  