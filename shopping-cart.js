const products = [
    {name: "book", price:300,  quantity:4},
    {name: "dress", price:300, quantity:5 },
    {name: "glass", price:890, quantity:3 },
    {name: "book", price:9800, quantity:6 },
]

function cartTotal (products){
let total= 0;
for(const product of products){
    const thisCost = product.price * product.quantity
    total = total + thisCost;
}
return total
}
const cost= cartTotal(products);
console.log(cost)