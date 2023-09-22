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

//   const result = posts.filter((item) => item.tags.includes("angular"))
  const result = posts.filter((item) => item.image !== undefined)
  console.log(result)
  