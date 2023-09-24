// determinar si el array tiene  5 o mas elementos devolver true o false, si cumple de lo contrario no cumple

const searchArray = (arr) => {
  return arr.length >= 5 ? "Si cumple" : "No cumple";
};

console.log(searchArray([1, 2, 3]));

// cantidad de elemento

const searchArrays = (arr1, arr2) => {
  // return arr1.concat(arr2)

  return [...arr1, ...arr2];
};

console.log(searchArrays([1, 2, 3], [4, 5, 6]));

// recibe 2 array y una longitud, validar si el primer array cumple con la longitud y en el caso de que no cumpla se le debe fusionar el 2 array para que cumpla con la longitud

const fuseArray = (arr1, arr2, long) => {
  return arr1.length >= long ? "Si cumple" : [...arr1, ...arr2];
};

console.log(fuseArray([1, 2, 3], [4, 5, 6], 4));
