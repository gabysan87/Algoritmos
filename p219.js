const posts = [{
    id: 1,
    title: "Mi primer post",
    image: "htps://img.com/1",
    tags: ["javascript","webdevelopment"]

},{
    id: 2,
    title: "Mi experiencia con React",
    image: "htps://img.com/3",
    tags: ["javascript","webdevelopment","angular"]
},{
    id: 3,
    title: "Por deje Angular",
    image: "htps://img.com/2",
    tags: ["javascript","webdevelopment","react"]
}]

// Metodo Find
// devuelve el valor del primer elemento del array que cumple la función

 const result = posts.find((post) => post.title == "Porque deje Angular")

 const result2 = posts.find((post) => post.title.id == 1)

console.log(result)
console.log(result2)

//Metodo Some 
// comprueba si al menos un elemento del array cumple con la condición

posts.some((post) => post.id === 4)

// Metodo includes 
//determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.

posts.some((post) => post.tags.includes("react"))


// Metodo Every
// Determina si todos los elementos en el array satisfacen una condición.

posts.every((post) => post.tags.includes("javascript"))


// Metodo MAP 

//crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

posts.map((post) => post.title)


// Metodo filter
// crea un nuevo array con todos los elementos que cumplan la condición

posts.filter((post) => post.tags.includes("angular"))

//Metodo reduce
posts.reduce( (allTags, post) => {
    return Array.from(new Set([...allTags, post.tags]))
}, [])