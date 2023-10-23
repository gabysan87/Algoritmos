// validar un palindromo

let myString = "arepera";

const palindromeValidator = (str) => {
  let stringReverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    stringReverse += str[i];
  }
  return stringReverse === str;
};
console.log("");
console.log("");
console.log(palindromeValidator(myString));
console.log("");
console.log("");
// -------------------------------------------------------------------
let startValue = 1;
let endValue = 10;

const plusRange = (start, end) => {
  let flag = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      flag += i;
    }
  }
  return flag;
};