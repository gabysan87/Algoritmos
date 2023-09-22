const posts = [
    {
      id: 1,
      title: "Mi primer post",
      tags:["javascript", "webdevelopment"]
    },
    {
      id: 2,
      title: "Mi experiencia con React",
      image: "https:/img.com/2",
      tags:["javascript", "webdevelopment", "React"]
    },
    {
      id: 3,
      title: "Por qué dejé Angular",
      image: "https:/img.com/3",
      tags:["javascript", "webdevelopment", "angular"]
    }
  ]

//   Solicita solo las etiquetas (tags)

const result = posts.reduce((allTags, post) => {
    return Array.from(new Set([...allTags, ...post.tags]))
}, [])

console.log(result)

// Array.from : creame un nuevo array 
