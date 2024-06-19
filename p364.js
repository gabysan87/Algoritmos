// Escribir una función que recibe como parametro una lista de desarrolladores que se anotaron para asistir a una meetup. La función debe devolver true si existe al menos una persona de cada continente (Africa, Americas, Asia, Europe, Oceania).

// Nota: Los continentes siempre estarán presentes y escritos correctamente.



const developmentList = [
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
    const continents = [ "Africa", "Americas", "Asia", "Europa", "Oceania"]
//  return arr.every((item, index) => continents.includes(item.continent) )
const paises = arr.map((item) => item.continent )
return continents.every((element) => paises.includes(element))
  }
  
  console.log(result(developmentList))