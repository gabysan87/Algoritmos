// igualdad entre objetos

const  auto1 = {marca: "Ford" , modelo : "Focus"};
const auto2 = {marca: "Ford" , modelo : "Focus"};

console.log(auto1 === auto2)
console.log(auto1.modelo === auto2.modelo)

const auto3 = auto1;
console.log(auto1 === auto3)


