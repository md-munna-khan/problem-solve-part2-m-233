const price = [20000,4000,56000,5999,847,47579];

function minPrice(numbers ){
    let min = numbers [0];
    for(const  num of numbers){
        if(num < min)
        { min = num;

        }
    }
return min
}
const totalPrice =minPrice(price);
console.log(totalPrice)