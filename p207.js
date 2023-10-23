let arrNumbers = [2, 4, 5, 6, 7, 9, 0 ,8];

const reverseArray = (arr) => {
  let arrFlag = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arrFlag.push(arr[i]);
  }
  return arrFlag;
};

console.log("");
console.log("");
console.log(reverseArray(arrNumbers));
console.log("");
console.log("");