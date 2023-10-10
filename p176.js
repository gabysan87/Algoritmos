// comparar 2 array

const compareArray = (arr1, arr2) => {
return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index])
}

console.log(compareArray([1,2,3], [1,3,4]))