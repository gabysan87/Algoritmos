const numbers = [10,0,50,125,75,6];

const result = numbers.reduce( (acc, elementactual) => {
return Math.max(acc, elementactual)
})

console.log(result)