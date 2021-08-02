var products = [
    {
      name: "realme C20 (Cool Blue, 32 GB) (2 GB RAM)",
      img: "https://rukminim1.flixcart.com/image/832/832/kn7sdjk0/mobile/w/h/q/c20-rmx3063-realme-original-imagfxfzay72jqvh.jpeg?q=70",
      price: "₹ 6999",
      rating: "4.3",
    },
    {
      name: "realme Narzo 30 (Racing Silver, 64 GB) (4 GB RAM)",
      img: "https://rukminim1.flixcart.com/image/832/832/kq18n0w0/mobile/u/w/b/narzo-30-rmx2156-realme-original-imag45ymfpry9ecq.jpeg?q=70",
      price: "₹ 12499",
      rating: "4.3",
    },
    {
      name: "OPPO Reno6 5G (Aurora, 128 GB) (8 GB RAM)",
      img: "https://rukminim1.flixcart.com/image/832/832/kr2e3680/mobile/b/q/v/reno6-5g-cph2251-oppo-original-imag4xp73qsqrtnt.jpeg?q=70",
      price: "₹ 29990",
      rating: "4.3",
    },
    {
      name: "SAMSUNG Galaxy F41 (Fusion Blue, 128 GB) (6 GB RAM)",
      img: "https://rukminim1.flixcart.com/image/832/832/kfzq8i80/mobile/y/j/f/samsung-galaxy-f41-sm-f415fzbdins-original-imafwbnpdafmeuj6.jpeg?q=70",
      price: "₹ 19990",
      rating: "4.3",
    },
    {
      name: "OPPO Reno6 5G (Aurora, 128 GB) (8 GB RAM)",
      img: "https://rukminim1.flixcart.com/image/832/832/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dqq7z8cgh.jpeg?q=70",
      price: "₹ 29990",
      rating: "4.3",
    },
    {
      name: "APPLE iPhone 12 (Blue, 128 GB)",
      img: "https://rukminim1.flixcart.com/image/832/832/kr2e3680/mobile/b/q/v/reno6-5g-cph2251-oppo-original-imag4xp73qsqrtnt.jpeg?q=70",
      price: "₹ 72990",
      rating: "4.3",
    },
    {
      name: "vivo Y51A (Crystal Symphony, 128 GB) (8 GB RAM)",
      img: "https://rukminim1.flixcart.com/image/832/832/kk1h5e80/mobile/3/7/u/vivo-y51a-v2031-original-imafzh2ud9t3wsm7.jpeg?q=70",
      price: "₹ 17990",
      rating: "4.3"
    },
  ];

  //Array


  var products_div = document.querySelector('.products')

  for (let i = 0; i < products.length; i++) {
   
    var div = document.createElement("div");

    var img = document.createElement("img");

    img.src = products[i].img

    img.id = "product-img"


    var title = document.createElement('p')

    title.innerText = products[i].name


    var rating = document.createElement('button')

    rating.innerText=products[i].rating

    rating.id = "product-rating"


    var price = document.createElement('p')

    price.innerText = products[i].price


    div.onclick = function(){

        showProduct(products[i])

    }


    div.append(img, title, rating, price)

    products_div.append(div)




  }



  function showProduct(product){
  
  
    console.log('product:', product)


    localStorage.setItem("clicked_product", JSON.stringify(product))

    window.location.href='product.html'


  }