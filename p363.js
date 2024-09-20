// Hacer otra función para retornar la cantidad de JavaScript developers que vienen de Europa

const elementQuantity = [
  {
    firstName: "Fatima",
    lastName: "A.",
    country: "Algeria",
    continent: "Africa",
    age: 25,
    language: "JavaScript",
     },
  {
    firstName: "Agustín",
    lastName: "M.",
    country: "Chile",
    continent: "Americas",
    age: 37,
    language: "C",
  },
  {
    firstName: "Jing",
    lastName: "X.",
    country: "China",
    continent: "Asia",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Laia",
    lastName: "P.",
    country: "Andorra",
    continent: "Europa",
    age: 55,
    language: "Ruby",
  },
  {
    firstName: "Oliver",
    lastName: "Q.",
    country: "Australia",
    continent: "Oceania",
    age: 65,
    language: "PHP",
  },
  {
    firstName: "Tony",
    lastName: "Q.",
    country: "España",
    continent: "Europa",
    age: 65,
    language: "JavaScript",
  },
  {
    firstName: "Anibal",
    lastName: "Q.",
    country: "Italia",
    continent: "Europa",
    age: 65,
    language: "JavaScript",
  },
]


const result = (arr) => {
    return arr.filter((item) => item.continent === "Europa" && item.language === "JavaScript")
}

console.table(result(elementQuantity))