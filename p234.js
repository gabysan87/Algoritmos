// Encuentre el número duplicado en una lista consecutiva sin clasificar


const findDup = (arr) => {
    
        return arr.filter((item, valor) => arr.indexOf(item) != valor)[0]
  }

  console.log(findDup([1,2,2,3]));
  console.log(findDup([1,3,2,5,4,5,7,6]));