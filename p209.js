let myString = "programming";

const countCharacters = (str) => {
  return [...str].reduce((prev, current) => {
    prev[current] ? prev[current]++ : (prev[current] = 1);
    return prev;
  }, {});
};
console.log("");
console.log("");
console.log(countCharacters(myString));
console.log("");
console.log("");