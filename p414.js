// Encontrar el valor máximo en un array de objetos

const items = [
    { name: 'Item 1', value: 10 },
    { name: 'Item 2', value: 50 },
    { name: 'Item 3', value: 30 },
  ];

  const findValue = (arr) => {
  return arr.reduce((acc, curr) => {
    return curr.value > acc.value ? curr : acc;
  },arr[0])
  }

  console.log(findValue(items))

  // Salida: { name: 'Item 2', value: 50 }

//   reduce: La función reduce recorre el array y compara los valores de value de cada objeto. Si el valor de curr es mayor que el de acc, entonces curr se convierte en el nuevo acc.
// Inicialización con arr[0]: Así garantizamos que el valor inicial de acc ya contiene un objeto con la propiedad value.