const products = [
    {name: "book", price:300,  },
    {name: "dress", price:300,  },
    {name: "glass", price:890,  },
    {name: "book", price:9800,  }
]

function getshopping(products){
    let total= 0;
    for( const product of products){
        total= total + product.price;
    }
      return total
}

const total= getshopping(products);
console.log(total)