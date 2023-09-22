const students = [
    {name: "Jill", lastname: "Doe", age: 25, course: "Marketing"},
    {name: "John", lastname: "Doe", age: 20, course: "Web Development"}, {name: "Jack", lastname: "Doe", age: 22, course: "Accounting"},
    {name: "Ryan Jhon", lastname: "Ray", age: 20, course: "Web Development"},
    {name: "Jane", lastname: "Doe", age: 21, course: "Financial Management"}
]

// se sumara la edades de los estuadiantes, 

// let total = 0
// for (let i = 0; i < students.length; i++) {
//     total += students[i].age
//     // total = total + students

// }
// console.log(total)

// quiero obtener una variable que tenga la suma de la edades de los estudiantes, para hacerlo usaremos el bucle for, creamos una variable i que empiece en 0, luego le digo mientras i sea menor al arreglo de estudiantes y va a empezar a sumar, esto va a empezar a recorrer cada uno de los objetos, entonces le voy a decir del arreglo estuduante en el indice  actual vamos a tomar su edad .age, creamos una variable total y le digo que la edad va a ser sumada alli; entonces la variable total es = a total + la edad del estudiante pero se resume a total +=, con esto estoy asignando o acumulando las edades en una variable 

// const result = students.reduce((total,student) => {
//     return total + student.age;
// }, 0)

const result = students.reduce((total,student) => total + student.age, 0)

console.log(result)

// Reduce: toma propiedades de un objeto y permite reducirlas a un solo valor 

const developers = [
    {
      id: 1,
      name: "John",
      skills: ["HTML", "React", "JavaScript", "Java"],
    },
    {
      id: 2,
      name: "Jane",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
    },
    {
      id: 3,
      name: "Jack",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
    },
  ];

 const results =  developers.reduce((allSkills, student) => {
return Array.from(new Set([...allSkills, student.skills]))
  }, [])

  console.log(results)

//   aca se va a obtener un array con el total de las habilidades de los desarrolladores





