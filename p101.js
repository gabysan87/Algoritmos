const billboard = (name, price) => {
    for (let i = 0, len = name.length; i < len; i++)
      if (!price) {
          price = 30; // Precio predeterminado por carácter
        }
        let costoTotal = 0;
        for (let i = 0, len = name.length; i < len; i++) {
          costoTotal += price;
        }
        return costoTotal;
        

        // return name.repeat(price).length;
    }
  console.log(billboard("Jeong-Ho Aristotelis"));
  console.log(billboard("Abishai Charalampos"));
  console.log(billboard("Idwal Augustin"));
  console.log(billboard("Hadufuns John",20));