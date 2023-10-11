const numbers = [10,0,50,125,75,6];

const result = numbers.reduce( (acc, curr) => {
return Math.max(acc, curr)
})

console.log(result)