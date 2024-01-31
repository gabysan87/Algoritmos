// Duplicados basados en una propiedad:

// Planteamiento:
// Crear una función que elimine duplicados de un array de objetos basándose en el valor de una propiedad específica.

// Entrada:
const inputArray = [
    { id: 1, category: 'A' },
    { id: 2, category: 'B' },
    { id: 3, category: 'A' },
    { id: 4, category: 'C' },
    { id: 5, category: 'B' },
  ];


  const result = (array) => {
    let obj = {};
    // return array.filter((item) => obj[item.category] ? false : obj[item.category] = true);
    return array.filter((item)=>{
        let result = !obj[item.category];
        obj[item.category] = true
        return result;
    })

      }

  console.log(result(inputArray))

  const removeDuplicates = (arr) =>{
    let uniqueValues = {}
    return arr.filter((item) => {
        return uniqueValues.hasOwnProperty(item.category) ? false : uniqueValues[item.category] = true
    })
}

console.log(removeDuplicates(inputArray))


// Salida:
// const outputArray = [
//     { id: 1, category: 'A' },
//     { id: 2, category: 'B' },
//     { id: 4, category: 'C' },
//   ];