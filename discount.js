function discountPrice(quantity){
    if( quantity <=100){
        const total= quantity * 100;
return total
    } else if(quantity <=200){
        const total = quantity * 80;
        return total
    } else{ quantity <=300;
        const total = quantity * 50;
return total
    }
}
const price = discountPrice(201);
console.log(price)