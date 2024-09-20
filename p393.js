// Contar votos por candidato
// Problema: Dado un array de votos en una elección, cuenta cuántos votos ha recibido cada candidato.

// Entrada:
let votos = [
  { candidato: "Juan" },
  { candidato: "Ana" },
  { candidato: "Juan" },
  { candidato: "Ana" },
  { candidato: "Pedro" }
];

const countVotes = (arr) => {

return arr.reduce((acc, curr) => {
    // Si el candidato ya tiene un voto, lo incrementamos en 1, sino lo inicializamos en 1
  acc[curr.candidato] = acc[curr.candidato] ? acc[curr.candidato] + 1 : 1
return acc
},{})
//Otro resultado
// return arr.reduce((acc, {candidato}) =>{
//     acc[candidato] =  (acc[candidato] || 0 ) + 1
//     return acc
// },{})
}

console.log(countVotes(votos))



//salida
// {
//     "Juan": 2,
//     "Ana": 2,
//     "Pedro": 1
//   }
