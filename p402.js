// Dado un array de objetos, mapea cada objeto a un nuevo formato especificado

// Entrada:
const personas = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'Ana', edad: 25 }
  ];

  const mappedPeople = (arr) => { 
    return arr.map( (item) => ({
        fullName: item.nombre,
        years: item.edad
    }))
  }

  console.log(mappedPeople(personas));

  // Salida esperada:
//   const personasMapeadas = [
//     { fullName: 'Juan', years: 30 },
//     { fullName: 'Ana', years: 25 }
//   ]; 
