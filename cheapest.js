const phones = [ 
    {name : "redmi", camera : "22 mp", price:25000},
    {name : "realme", camera : "22 mp", price:24000},
    {name : "oppo", camera : "22 mp", price:10000},
    {name : "vivo", camera : "22 mp", price:5000}

]
function getCheapestPhone(phones){
let min = phones [0];
for(const phone of phones ){
    if ( phone.price < min.price ){
        min = phone
    }
}
return min
}

phonePrice = getCheapestPhone(phones);
console.log(phonePrice)