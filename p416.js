// / Probablemente conozcas el sistema de "me gusta" de Facebook y otras páginas. Las personas pueden marcar "me gusta" en publicaciones de blogs, imágenes u otros elementos. Queremos crear el texto que se debe mostrar junto a dicho elemento.

// Implementa la función que toma una matriz que contiene los nombres de las personas a las que les gusta un elemento. Debe devolver el texto que se muestra como se muestra en los ejemplos:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

const whoLikes = (arr) => {
 const countWords = arr.length
    console.log(countWords)
    if (countWords === 0){
        return `no one likes this`
    }else if (countWords === 1) {
        return `${arr[0]} likes this`
    }else if (countWords === 2) {
        return `${arr[0]} and ${arr[1]} likes this`
    }else if (countWords === 3) {
        return  `${arr[0]}, ${arr[1]} and ${arr[2]} likes this`
    }else {
        return  `${arr[0]}, ${arr[1]} and ${countWords-2} others likes this`
    }

}

console.log(whoLikes([]));
console.log(whoLikes(['Peter']));
console.log(whoLikes(['Jacob', 'Alex']));
console.log(whoLikes(['Max', 'John', 'Mark']));
console.log(whoLikes(['Alex', 'Jacob', 'Mark', 'Max']));
console.log(whoLikes(["Alex", "Jacob", "Mark", "Max", 'Jonh', 'Paty', 'Carl', 'pedro']));


